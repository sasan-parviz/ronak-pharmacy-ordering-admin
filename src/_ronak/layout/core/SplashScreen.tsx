import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import {WithChildren} from '../../helpers'

const SplashScreenContext = createContext<Dispatch<SetStateAction<number>> | undefined>(undefined)

const SplashScreenProvider: FC<WithChildren> = ({children}) => {
  const [count, setCount] = useState(0)
  let visible = count > 0

  useEffect(() => {
    // Show SplashScreen
    if (visible) {
      console.log('remove loading')
      document.body.classList.remove('page-loading')

      return () => {
        console.log('add loading')
        document.body.classList.add('page-loading')
      }
    }

    // Hide SplashScreen
    let timeout: number
    if (!visible) {
      timeout = window.setTimeout(() => {
        console.log('add loading')
        document.body.classList.add('page-loading')
      }, 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [visible])

  return <SplashScreenContext.Provider value={setCount}>{children}</SplashScreenContext.Provider>
}

const LayoutSplashScreen: FC<{visible?: boolean}> = ({visible = true}) => {
  // Everything are ready - remove splashscreen
  const setCount = useContext(SplashScreenContext)

  useEffect(() => {
    if (!visible) {
      return
    }

    if (setCount) {
      setCount((prev) => {
        return prev + 1
      })
    }

    return () => {
      if (setCount) {
        setCount((prev) => {
          return prev - 1
        })
      }
    }
  }, [setCount, visible])

  return null
}

export {SplashScreenProvider, LayoutSplashScreen}
