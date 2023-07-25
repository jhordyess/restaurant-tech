import * as React from 'react'
import { fetchCategories } from '@api/requests'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchProductsWithImage, setFavorite } from '@store/slices/dataSlice'
import { TProduct } from 'types'

type Props = {
  title: string
  price: number
  image: string
  category?: string
  favorite: boolean
  toggleFavorite: () => void
}

const ProductCard = ({ title, price, image, favorite, toggleFavorite }: Props) => {
  const [src, setSrc] = React.useState<string>(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  )
  // create a ref to the element we want to observe
  const node = React.useRef<HTMLImageElement>(null)

  React.useEffect(() => {
    // create the observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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

function Menu() {
  const [categories, setCategories] = React.useState<string[]>([])

  const products = useSelector(
    (state: any) => state.data.products,
    shallowEqual
    //compare and avoid re-renders
  )

  const loading = useSelector((state: any) => state.ui.loadingProducts)
  const dispatch = useDispatch()

  const getCategories = async () => {
    const categories = await fetchCategories()
    setCategories(categories)
  }

  const getProducts = async () => {
    dispatch(fetchProductsWithImage())
  }

  const handleToggleFavorite = (id?: number) => {
    if (!id) return
    dispatch(setFavorite(id))
  }

  React.useEffect(() => {
    getCategories()
    getProducts()
  }, [])

  return (
    <section className="flex flex-col items-center gap-y-6 py-6">
      <section className="mx-auto flex w-64 flex-row items-center justify-between">
        <input
          type="text"
          placeholder="Hamburger?"
          className="box-content h-8 w-full border px-2 text-sm outline-none"
        />
        <button className="box-content border-y border-r p-1 hover:bg-red-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 100 100"
            stroke="currentColor"
          >
            <circle cx="45" cy="45" r="18" strokeWidth="5" />
            <line x1="55" y1="55" x2="75" y2="75" strokeWidth="5" />
          </svg>
        </button>
      </section>
      {categories.length > 1 && (
        <section>
          <ul className="flex flex-row gap-6">
            {categories.map((name, index) => (
              <li key={'cat-' + index}>{name}</li>
            ))}
          </ul>
        </section>
      )}
      {loading ? (
        <div className="h-16 w-16 animate-spin rounded-full border-8 border-t-red-200"></div>
      ) : (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {(products as TProduct[]).map(({ name, category, image, price, id, favorite }) => (
            <ProductCard
              key={name}
              category={category}
              title={name}
              image={image}
              price={price}
              favorite={favorite}
              toggleFavorite={() => {
                handleToggleFavorite(id)
              }}
            />
          ))}
        </section>
      )}
    </section>
  )
}

export default Menu
