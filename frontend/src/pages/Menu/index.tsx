import * as React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchCategories } from './services/fetchCategories'
import { fetchProducts } from './services/fetchProducts'
import { ProductCard } from './components/ProductCard'
import { toggleFavorite } from './services/toggleFavorite'

function Menu() {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    initialData: []
  })

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', categories],
    queryFn: fetchProducts,
    enabled: !!categories
  })

  const { isPending, mutate } = useMutation({
    mutationKey: ['toggleFavorite'],
    mutationFn: toggleFavorite
  })

  const queryClient = useQueryClient()

  const handleToggleFavorite = (id: string) => {
    if (!id) return
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['products'],
          refetchType: 'all'
        })
      }
    })
  }

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

      {isLoading || !products || isPending ? (
        <div className="h-16 w-16 animate-spin rounded-full border-8 border-t-red-200"></div>
      ) : (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {products.map(({ name, category, image, price, id, favorite }) => (
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
