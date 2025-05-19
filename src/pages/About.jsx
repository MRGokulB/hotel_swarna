import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const teamMembers = [
  {
    name: 'Rajesh Sharma',
    role: 'Head Chef',
    description: 'With over 20 years of experience in vegetarian cuisine, Chef Rajesh brings authentic flavors to every dish.',
    image: '/src/assets/chef-rajesh.jpg',
  },
  {
    name: 'Priya Patel',
    role: 'Restaurant Manager',
    description: 'Priya ensures smooth operations and exceptional customer service at Swarna Hotel.',
    image: '/src/assets/priya-patel.jpg',
  },
  {
    name: 'Amit Desai',
    role: 'Sous Chef',
    description: 'Specializing in traditional Indian dishes, Chef Amit adds his creative touch to our menu.',
    image: '/src/assets/chef-amit.jpg',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="section-title">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Swarna Hotel has been serving authentic vegetarian cuisine since 1995. 
              Our commitment to quality ingredients and traditional cooking methods 
              has made us a beloved destination for food lovers in Pune.
            </p>
          </motion.div>
        </section>

        {/* History Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1995, Swarna Hotel began as a small family restaurant 
                  with a vision to serve the finest vegetarian cuisine. Over the years, 
                  we have grown into a premier dining destination while maintaining 
                  our commitment to quality and tradition.
                </p>
                <p>
                  Our recipes have been passed down through generations, ensuring 
                  authentic flavors that have stood the test of time. We take pride 
                  in using fresh, locally sourced ingredients to create dishes that 
                  delight our customers.
                </p>
                <p>
                  Today, Swarna Hotel stands as a testament to our dedication to 
                  vegetarian cuisine and exceptional dining experiences.
                </p>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <img
                src="/src/assets/restaurant-interior.jpg"
                alt="Restaurant Interior"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card text-center"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 