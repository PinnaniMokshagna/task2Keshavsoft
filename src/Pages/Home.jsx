import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

const Home = () => {
  const features = [
    {
      id: 1,
      title: 'Cutting-Edge Tech',
      description: 'We use the latest technologies to deliver robust, scalable solutions.',
      image: '/assets/tech.jpg'
    },
    {
      id: 2,
      title: 'Modern Design',
      description: 'Clean, modern, and visually engaging UI/UX for your business.',
      image: '/assets/Design.jpg'
    },
    {
      id: 3,
      title: 'Fully Responsive',
      description: 'Our layouts adapt seamlessly to any device or screen size.',
      image: '/assets/Responsive.jpg'
    }
  ]

  const portfolioItems = [
    {
      id: 1,
      title: 'Software Development',
      description: 'Tailored digital solutions for complex business processes.',
      image: '/assets/Soft.jpg'
    },
    {
      id: 2,
      title: 'Web Application',
      description: 'Delivering seamless experiences across all platforms.',
      image: '/assets/Gen.jpg'
    },
    {
      id: 3,
      title: 'E-commerce Website',
      description: 'Driving growth with cutting-edge online retail technology.',
      image: '/assets/Ecomers.jpg'
    },
    {
      id: 4,
      title: 'Data Science',
      description: 'Advanced analytics and machine learning solutions.',
      image: '/assets/data.jpg'
    },
    {
      id: 5,
      title: 'Machine Learning',
      description: 'Intelligent automation and predictive analytics.',
      image: '/assets/Machine.jpg'
    },
    {
      id: 6,
      title: 'React Development',
      description: 'Modern web applications with React ecosystem.',
      image: '/assets/React.jpg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center position-relative d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
        <img 
          src="/assets/Design.jpg" 
          alt="Keshav Soft Hero" 
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          style={{ zIndex: 0, opacity: 0.25, pointerEvents: 'none' }}
        />
        <div className="container hero-content position-relative py-5">
          <motion.h1 
            className="display-3 fw-bold mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Keshav Soft
          </motion.h1>
          <motion.p 
            className="lead mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative Software Solutions with a Modern Touch
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="#features" className="btn btn-light btn-lg shadow me-3">
              Explore Our Features
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-light py-5">
        <div className="container">
          <motion.div 
            className="row text-center justify-content-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.id}
                className="col-md-4 mb-4 d-flex align-items-stretch"
                variants={itemVariants}
              >
                <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.04} tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={700} className="w-100">
                  <div className="card h-100 border-0 shadow-sm card-hover mx-auto" style={{ maxWidth: 350 }}>
                    <div className="card-body p-4">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        width="80" 
                        height="80" 
                        className="mb-3 rounded-circle shadow img-optimized mx-auto d-block"
                        loading="lazy"
                      />
                      <h4 className="card-title">{feature.title}</h4>
                      <p className="card-text">{feature.description}</p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section py-5">
        <div className="container">
          <motion.h2 
            className="fw-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.h2>
          <motion.p 
            className="lead text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Showcasing Success: Our portfolio demonstrates our collaborative approach to innovation and commitment to excellence.
          </motion.p>
          <motion.div 
            className="row g-4 justify-content-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {portfolioItems.map((item) => (
              <motion.div 
                key={item.id}
                className="col-md-4 d-flex align-items-stretch"
                variants={itemVariants}
              >
                <Tilt glareEnable={true} glareMaxOpacity={0.12} scale={1.03} tiltMaxAngleX={12} tiltMaxAngleY={12} transitionSpeed={600} className="w-100">
                  <div className="card h-100 border-0 shadow-sm card-hover text-center mx-auto" style={{ maxWidth: 350 }}>
                    <div className="card-body p-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        width="80" 
                        height="80" 
                        className="mb-3 rounded shadow img-optimized mx-auto d-block"
                        loading="lazy"
                      />
                      <h5 className="card-title mb-2">{item.title}</h5>
                      <p className="card-text mb-0">{item.description}</p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section bg-primary text-white text-center py-5">
        <div className="container">
          <motion.h3 
            className="mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Project?
          </motion.h3>
          <motion.p 
            className="lead mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's discuss how we can help bring your ideas to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn btn-light btn-lg">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home