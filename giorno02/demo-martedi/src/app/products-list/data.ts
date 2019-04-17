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
      name: 'Leaf Rake',
      category: 'GDN-0011',
      releaseDate: 'March 19, 2016',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      image: 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
      id: 2,
      name: 'Garden Cart',
      category: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      image: 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
    {
      id: 5,
      name: 'Hammer',
      category: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      image: 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    },
    {
      id: 8,
      name: 'Saw',
      category: 'TBX-0022',
      releaseDate: 'May 15, 2016',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      image: 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
    },
    {
      id: 10,
      name: 'Video Game Controller',
      category: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      image: 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
    }
  ]
;

