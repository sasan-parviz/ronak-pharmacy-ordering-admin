/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {useQueryResponseLoading, useQueryResponsePagination} from '../../core/QueryResponseProvider'
import {useQueryRequest} from '../../core/QueryRequestProvider'

const mappedLabel = (label: string): string => {
  if (label === '&laquo; قبلی') {
    return 'بعدی'
  }

  if (label === 'بعدی &raquo;') {
    return 'قبلی'
  }

  return label
}

const ListPagination = () => {
  const pagination = useQueryResponsePagination()
  const isLoading = useQueryResponseLoading()
  const {updateState} = useQueryRequest()
  const updatePage = (page: number | null) => {
    if (!page || isLoading || pagination.page === page) {
      return
    }

    updateState({page, items_per_page: pagination.items_per_page || 10})
  }

  return (
    <div className='row'>
      <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'></div>
      <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
        <div id='kt_table_users_paginate'>
          <ul className='pagination'>
            {pagination.links
              ?.map((link: any) => {
                return {...link, label: mappedLabel(link.label)}
              })
              .map((link: any) => (
                <li
                  key={link.label}
                  className={clsx('page-item', {
                    active: pagination.page === link.page,
                    disabled: isLoading,
                    previous: link.label === 'قبلی',
                    next: link.label === 'بعدی',
                  })}
                >
                  <a
                    className={clsx('page-link', {
                      'page-text': link.label === 'قبلی' || link.label === 'بعدی',
                      'me-5': link.label === 'قبلی',
                    })}
                    onClick={() => updatePage(link.page)}
                    style={{cursor: 'pointer'}}
                  >
                    {mappedLabel(link.label)}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export {ListPagination}
