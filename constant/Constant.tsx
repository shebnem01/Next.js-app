import men from '@/public/men.webp'
import ladies from '@/public/ladies.avif'
import bags from '@/public/bags.avif'
import shoes from '@/public/shoe.webp'
import watch from '@/public/smart.webp'
import imgBanner from '@/public/slider-2.webp'
import imgSlider from '@/public/slider.webp'
export const categories = [
    { category: "Men's wear",img: men},
    { category: "Ladies wear" ,img: ladies},
    { category: "Bags",img: bags},
    { category: "Shoes",img: shoes },
    { category: "Smart watch" ,img: watch},
];
export  const links = [
    { name: "About us", url: "/about" },
    { name: "Shop", url: "/products" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" }
]
export  const homeSlider = [
  {
    id: 1,
    title: "Discover Timeless Elegance",
    subtitle: "Find the perfect watch to complement your style. Shop our collection today!",
    image: imgBanner,
  },
  {
    id: 2,
    title: "Elevate Your Wardrobe",
    subtitle: "Explore our range of dresses for every occasion. Step into style now!",
    image: imgSlider,
  },
]