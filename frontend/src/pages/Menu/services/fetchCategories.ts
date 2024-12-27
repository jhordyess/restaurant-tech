import { fakeRequest } from '@/api'

export const fetchCategories = () =>
  fakeRequest([
    'All',
    'Daily Specials',
    'Main Entrees',
    'Desserts',
    'Soups and Broths',
    'Appetizers'
  ])
