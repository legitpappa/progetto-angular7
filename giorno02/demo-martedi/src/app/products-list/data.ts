/* import { Product } from '../models/product'; */
import { IProduct } from '../models/iProduct';
/*
export const PRODUCTS: Product[]
  = [new Product(1, 'Harry Potter e la pietra filosofale', 'libro', 12, 'fantasy',
    'https://images.pottermore.com/bxd3o8b291gf'
    + '/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg'),
  new Product(2, 'Il silenzio degli innocenti', 'libro', 13, 'romanzo',
    'https://images.pottermore.com/bxd3o8b291gf/3SQ3X2km8wkQIsQWa02yOY'
    + '/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg'),
  new Product(3, 'Il rifugio', 'libro', 14, 'romanzo', 'https://images.pottermore.com/bxd3o8b291gf/3SQ3X2km8wkQIsQWa02yOY/'
    + '25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg ')
  ];
 */
export const IPRODUCTS: IProduct[] = [
  {
    id: 1,
    name: 'Harry Potter e la pietra filosofale',
    description: 'libro',
    price: 12,
    category: 'romanzo',
    image: 'https://images.pottermore.com/bxd3o8b291gf'
      + '/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg'
  },
  {
    id: 2,
    name: 'Il silenzio degli innocenti',
    description: 'libro',
    price: 13,
    category: 'fantasy',
    image: 'https://images.pottermore.com/bxd3o8b291gf'
      + '/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg'
  },
  {
    id: 3,
    name: 'Harry Potter e la pietra filosofale',
    description: 'libro',
    price: 14,
    category: 'romanzo',
    image: 'https://images.pottermore.com/bxd3o8b291gf'
      + '/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg'
  }
];

