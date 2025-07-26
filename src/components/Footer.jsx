import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: 'bi-facebook', url: '#', label: 'Facebook' },
    { icon: 'bi-twitter', url: '#', label: 'Twitter' },
    { icon: 'bi-linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'bi-instagram', url: '#', label: 'Instagram' }
  ]

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <motion.div 
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h5>Keshav Soft</h5>
            <p className="small">Innovative software solutions for modern businesses.</p>
          </motion.div>
          
          <motion.div 
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-light text-decoration-none">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5>Connect</h5>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.icon}
                  href={social.url}
                  className="text-light me-3"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={`bi ${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.hr 
          className="my-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        />
        
        <motion.small
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          &copy; {currentYear} Keshav Soft. All rights reserved.
        </motion.small>
      </div>
    </footer>
  )
}

export default Footer