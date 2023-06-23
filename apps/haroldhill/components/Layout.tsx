import React from 'react'
import styles from './layout.module.css'

type LayoutProps = {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={`govuk-width-container ${styles.container}`} id="content">
        {children}
      </div>
    </>
  )
}
