import React, { ReactNode } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'
import styles from './MenuItems.module.css'

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className={styles.NavigationMenuRoot}>
      <NavigationMenu.List className={`${styles.NavigationMenuList}`}>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={`${styles.NavigationMenuTrigger} .gem-c-layout-super-navigation-header__navigation-top-toggle-button`}>
            Menu <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="govuk-list govuk-list--spaced gem-c-layout-super-navigation-header__navigation-second-items">
              <ListItem
                title="Introduction"
                href="/docs/primitives/overview/introduction"
                className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
                className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link">
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem
                title="Styling"
                href="/docs/primitives/overview/styling"
                className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/docs/primitives/overview/animation"
                className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link">
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
                className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link">
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/docs/primitives/overview/releases"
                className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link">
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className={styles.NavigationMenuIndicator}>
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  )
}

interface IForwardRefProps {
  children?: ReactNode
  className?: string
  title: string
  href: string
}

type Ref = HTMLAnchorElement

const ListItem = React.forwardRef<Ref, IForwardRefProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
      <p className="govuk-link">
        <NavigationMenu.Link asChild>
          <a
            className={classNames('ListItemLink', className)}
            {...props}
            ref={forwardedRef}>
            <span>{title}</span>
            {children}
          </a>
        </NavigationMenu.Link>
      </p>
    </li>
  )
)

ListItem.displayName = 'ListItem'

export default NavigationMenuDemo
