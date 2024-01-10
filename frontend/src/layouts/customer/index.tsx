import * as React from 'react'
import { Link } from 'react-router-dom'
import { TCustomersLinks } from '@/routes'

interface ICustomer {
  children: React.ReactNode
  links: TCustomersLinks
}

export default function Customer({ children, links }: ICustomer) {
  const [left, center, right] = links

  const rightFixed = right.filter(({ isPrivate }) => !isPrivate)

  const [toggleLeft, setToggleLeft] = React.useState(false)

  const handleToggle = () => {
    setToggleLeft(!toggleLeft)
  }

  return (
    <div className="min-h-screen w-full bg-red-50 px-10">
      <header className="border-b py-6">
        <nav className="flex flex-row items-center justify-between">
          <div className="flex-column item-center relative flex">
            <button
              className="flex w-full items-center justify-between p-1 text-lg"
              onClick={handleToggle}
            >
              <span className="text-2xl">❇ Restaurant Tech</span>
              &nbsp;
              {toggleLeft ? (
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M 14.77 12.79 A 0.75 0.75 180 0 1 13.71 12.77 L 10 8.832 L 6.29 12.77 A 0.75 0.75 180 1 1 5.21 11.73 L 9.46 7.23 A 0.75 0.75 180 0 1 10.54 7.23 L 14.79 11.73 A 0.75 0.75 180 0 1 14.77 12.79 Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M 5.23 7.21 A 0.75 0.75 0 0 1 6.29 7.23 L 10 11.168 L 13.71 7.23 A 0.75 0.75 0 1 1 14.79 8.27 L 10.54 12.77 A 0.75 0.75 0 0 1 9.46 12.77 L 5.21 8.27 A 0.75 0.75 0 0 1 5.23 7.21 Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            {toggleLeft && (
              <ul className="absolute w-full bg-white" style={{ top: 41 }}>
                {left.map(({ name, path }, index) => (
                  <Link to={path} key={'lfnav-' + index} onClick={handleToggle}>
                    <li className="w-full px-4 py-2 hover:bg-blue-100">{name}</li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          <div>
            <Link to={center.path}>
              <span className="px-4 py-2 hover:bg-red-100">{center.name}</span>
            </Link>
          </div>
          <div>
            <ul className="flex w-full flex-row">
              {rightFixed.map(({ name, path }, index) => (
                <Link to={path} key={'lfnav-' + index}>
                  <li className="w-full px-4 py-2 hover:bg-red-100">{name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
