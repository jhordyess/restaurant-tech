import * as React from 'react'

type Props = {
  title: string
  price: number
  image?: string
  category?: string
  favorite: boolean
  toggleFavorite: () => void
}

export const ProductCard = ({ title, price, image, favorite, toggleFavorite }: Props) => {
  const [src, setSrc] = React.useState<string>(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  )
  // create a ref to the element we want to observe
  const node = React.useRef<HTMLImageElement>(null)

  React.useEffect(() => {
    // create the observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && image) {
          setSrc(image)
        }
      })
    })

    // start observing
    if (node.current) {
      observer.observe(node.current)
    }

    // Disconnect the observer as soon as the component is unmounted
    return () => {
      if (node.current) {
        observer.unobserve(node.current)
      }
    }
  }, [image])

  return (
    <div>
      <figure className="relative h-72 w-64 border-x border-t">
        <img ref={node} className="h-full w-full bg-gray-300" src={src} alt="None" />
        <div className="absolute right-0 top-0 flex flex-row text-sm">
          <button className="px-3 py-2 hover:bg-red-100">➕</button>
          <button
            className={`px-3 py-2 hover:bg-red-100 ${favorite ? 'border border-orange-300' : ''}`}
            onClick={toggleFavorite}
          >
            {favorite ? '🧡' : '🤍'}
          </button>
        </div>
      </figure>
      <div className="flex h-16 flex-col items-center justify-center border">
        <span className="font-bold">{title}</span>
        <span className="text-amber-800">{price}$</span>
      </div>
    </div>
  )
}
