import React from 'react'
import * as path from 'path'
import * as dotenv from 'dotenv'
dotenv.config({ path: path.join(__dirname, '../../../../.env.local') })
const featureList: { [x: string]: string } = {
  unitTesting: process.env['NEXT_PUBLIC_RELEASE_UNIT_TESTING'] || '',
  unitTestingTwo: process.env['NEXT_PUBLIC_RELEASE_UNIT_TESTING_TWO'] || ''
}

const stringToBoolean = (string: string) => {
  switch (string) {
    case 'false':
      return false
    case 'true':
      return true
    default:
      return false
  }
}

const featureToggle = {
  unitTesting: (): boolean => {
    return stringToBoolean(featureList['unitTesting'])
  },
  unitTestingTwo: (): boolean => {
    return stringToBoolean(featureList['unitTestingTwo'])
  }
}

const toggle = (name: string) => {
  return featureList[name]
}

const toggleOn =
  (featureName: string, ComposedComponent: React.FunctionComponent) =>
  (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => {
    return stringToBoolean(toggle(featureName)) ? (
      <ComposedComponent {...props} />
    ) : null
  }

export { featureToggle, featureList, toggleOn }
