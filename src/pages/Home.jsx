import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    name: 'Pure Vegetarian',
    description: 'Experience the finest vegetarian cuisine prepared with fresh, locally sourced ingredients.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    name: 'Family Restaurant',
    description: 'A warm and welcoming atmosphere perfect for family gatherings and celebrations.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Premium Dining',
    description: 'Elegant dining experience with attentive service and comfortable seating.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
]

const menuItems = [
  {
    name: 'Paneer Butter Masala',
    price: '₹280',
    description: 'Cottage cheese cubes in rich tomato gravy with butter and cream',
    image: '/src/assets/paneer-butter-masala.jpg',
  },
  {
    name: 'Veg Biryani',
    price: '₹250',
    description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices',
    image: '/src/assets/veg-biryani.jpg',
  },
  {
    name: 'Gulab Jamun',
    price: '₹120',
    description: 'Soft milk solids dumplings soaked in sugar syrup',
    image: '/src/assets/gulab-jamun.jpg',
  },
]

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Welcome to Swarna Hotel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Experience the finest vegetarian cuisine in Pune
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/menu" className="btn btn-primary mr-4">
              View Menu
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Book a Table
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-pattern">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Popular Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
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
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="btn btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 