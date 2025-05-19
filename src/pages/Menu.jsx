import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const menuCategories = [
  'All',
  'Starters',
  'Main Course',
  'Rice & Breads',
  'Desserts',
  'Beverages',
]

const menuItems = [
  {
    name: 'Veg Spring Roll',
    category: 'Starters',
    price: '₹180',
    description: 'Crispy rolls filled with mixed vegetables and noodles',
    image: '/src/assets/spring-roll.jpg',
  },
  {
    name: 'Paneer Butter Masala',
    category: 'Main Course',
    price: '₹280',
    description: 'Cottage cheese cubes in rich tomato gravy with butter and cream',
    image: '/src/assets/paneer-butter-masala.jpg',
  },
  {
    name: 'Veg Biryani',
    category: 'Rice & Breads',
    price: '₹250',
    description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices',
    image: '/src/assets/veg-biryani.jpg',
  },
  {
    name: 'Butter Naan',
    category: 'Rice & Breads',
    price: '₹40',
    description: 'Soft and fluffy bread baked in tandoor with butter',
    image: '/src/assets/butter-naan.jpg',
  },
  {
    name: 'Gulab Jamun',
    category: 'Desserts',
    price: '₹120',
    description: 'Soft milk solids dumplings soaked in sugar syrup',
    image: '/src/assets/gulab-jamun.jpg',
  },
  {
    name: 'Masala Chai',
    category: 'Beverages',
    price: '₹30',
    description: 'Traditional Indian spiced tea with milk',
    image: '/src/assets/masala-chai.jpg',
  },
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Our Menu</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-dark hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-primary font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Items Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
} 