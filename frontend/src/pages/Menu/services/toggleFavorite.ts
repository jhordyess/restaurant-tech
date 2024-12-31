import { fakeRequest } from '@/api'

export const toggleFavorite = async (productId: string) => {
  fakeRequest({ productId }, 1000)
  console.info(
    `Product with id ${productId} was ${Math.random() > 0.5 ? 'added' : 'removed'} to favorites`
  )
}
