import { fakeRequest } from '@/api'

export const fetchProductImage = (product: Omit<TProduct, 'id'>, index: number = 118) =>
  fakeRequest({
    ...product,
    id: index,
    image: `https://picsum.photos/id/${index}/300/400`
  })
