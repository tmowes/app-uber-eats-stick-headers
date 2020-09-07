const items = [
  {
    title: 'Long Hongdae Nights',
    description:
      'Korean fried chicken glazed with Gochujang, garnished with sesame & spring onions, served with fries & Miss Miu Mayo',
    price: '26 CHF',
  },
  {
    title: 'Late Sunset',
    description:
      'Korean fried chicken starter with dirty cheese sauce and Artisan Hot Sauce - the naughty version new, favorite',
    price: '13.50 CHF',
  },
  {
    title: 'Cabbage Kimchi',
    description: 'Portion, vegan',
    price: '5.00 CHF',
  },
  {
    title: 'Namur by Pieces',
    description:
      'Homemade steamed dim sum with minced pork, shiitake mushrooms and smokey honey flavour, four pcs',
    price: '10.50 CHF',
  },
  {
    title: 'Silim Lights',
    description:
      'Beef Bibimbap, sesame oil, rice, beans, spinach, carrots, spring onions, Chinese cabbage, shiitake mushrooms, roasted onions and egg',
    price: '26.50 CHF',
  },
]
export const menu = [
  { name: 'Starters', items },
  { name: 'Order Again', items },
  { name: 'Picked for you', items },
  { name: 'Gimbap Sushi', items },
]
export const defaultTabs = menu.map(({ name }) => ({ name, anchor: 0 }))
