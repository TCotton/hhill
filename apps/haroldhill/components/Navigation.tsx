import React, { ReactNode } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'
import styles from './MenuItems.module.css'

const Navigation = (props) => {
  const articles = props.articles
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
              {articles.map((article) => {
                const id =
                  `${article.slug}-${article.title}` +
                  Math.random().toString(36).substr(2, 9)
                return (
                  <>
                    <ListItemNoLink
                      key={id}
                      title={article.title}
                      className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    />
                    <ul>
                      {article.pages.map((page) => {
                        const href = `${page.slug}-${page.id}`
                        return (
                          <ListItem
                            key={page.id}
                            title={page.title}
                            href={href}
                            className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                          />
                        )
                      })}
                    </ul>
                  </>
                )
              })}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className={styles.NavigationMenuIndicator}>
          <div className={styles.Arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  )
}

interface IForwardRefProps {
  children?: ReactNode
  className?: string
  title?: string
  href?: string
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

const ListItemNoLink = React.forwardRef<HTMLParagraphElement, IForwardRefProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
      <p ref={forwardedRef}>
        <span>{title}</span>
        {children}
      </p>
    </li>
  )
)

ListItemNoLink.displayName = 'ListItemNoLink'

export default Navigation
