export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'Basic T-shirts',
            href: '/product/271',
            imageSrc: 'https://rukminim1.flixcart.com/image/612/612/kzu6efk0/t-shirt/a/z/g/xxl-soul-white-base-41-original-imagbre89wxce5rx.jpeg?q=70',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
            css:"aspect-h-1 aspect-w-1 h-1/2 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75",
          },
          {
            name: 'New Arrivals',
            href: '/product/290',
            imageSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/y/g/m/l-sleeveless-shset95222-shae-by-sassafras-original-imaggjzkwyyyezzg.jpeg?q=70',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
            css:"aspect-h-1 aspect-w-1  overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75",
          },
        
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id:"tops"},
              { name: 'Dresses', id:"women dress" },
              { name: 'Women Jeans', id: 'women jeans' },
              { name: 'Lengha Choli', id: 'lengha choli' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'Sarees', id: 'sarees' },
              { name: 'Kurtas', id: 'women kurtas' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'watch' },
              { name: 'Wallets', id: 'wallet' },
              { name: 'Bags', id: 'bag' },
              { name: 'Sunglasses', id: 'sunglasse' },
              { name: 'Hats', id: 'hat' },
              { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'Trending kurta',
            id: '#',
            href: '/product/114',
            imageSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/t/g/w/xxl-ae08sk42-blue-aew-designs-original-imagg8npatfky9wg.jpeg?q=70',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
              css:"aspect-h-1 aspect-w-1  overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75",
          },
          
          {
            name: 'New Arrivals',
            id: '#',
            href: '/product/5',
            imageSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/i/a/z/4xl-white-vtexx-original-imagnzecssjs3y9g.jpeg?q=70',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
            css:"aspect-h-1 aspect-w-1  overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75",
          },
       
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'men kurtas' },
              { name: 'Shirt', id: 'shirts' },
              { name: 'Men Jeans', id: 'men jeans' },
                       
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'shoes', id: 'shoes',href: `{men/accessories/shoes}` },
              { name: 'Wallets', id: '#' },
              { name: 'Bags', id: '#' },
              
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Store', id: '/' },
    ],
  }