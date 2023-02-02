import React from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'
import Header from '../components/Header'

const Index: NextPageWithLayout = () => {
  return (
    <>
      <Header />
      <Layout>
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h1 className="govuk-heading-l">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Welcome to Harold Hill: A People's History
              </h1>
              <p className="govuk-body">
                This is a prototype for a new website for Harold Hill.
              </p>
              <p className="govuk-body">
                It is built using Next.js, TypeScript, React, and the GOV.UK
                Design System.
              </p>
              <p className="govuk-body">
                It is a work in progress, and is not yet ready for public
                consumption.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Index
