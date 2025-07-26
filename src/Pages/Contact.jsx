import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Address',
      content: '123 Tech Street, Digital City, DC 12345'
    },
    {
      icon: 'bi-telephone',
      title: 'Phone',
      content: '+91-98765-43210'
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      content: 'info@keshavsoft.com'
    }
  ]

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section text-center position-relative d-flex align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
        <div className="container hero-content position-relative py-5">
          <motion.h1 
            className="display-3 fw-bold mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="lead mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with us to discuss your next project.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section py-5">
        <div className="container">
          <div className="row justify-content-center align-items-start">
            {/* Contact Form */}
            <motion.div 
              className="col-lg-8 mb-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card shadow-sm mx-auto" style={{ maxWidth: 600 }}>
                <div className="card-body p-4">
                  <h2 className="fw-bold mb-4 text-center">Send us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                    
                    {submitStatus === 'success' && (
                      <motion.div 
                        className="alert alert-success mt-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Thank you! Your message has been sent successfully.
                      </motion.div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <motion.div 
                        className="alert alert-danger mt-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Sorry! There was an error sending your message. Please try again.
                      </motion.div>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="col-lg-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card shadow-sm mx-auto" style={{ maxWidth: 350 }}>
                <div className="card-body p-4">
                  <h2 className="fw-bold mb-4 text-center">Get in Touch</h2>
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={info.title}
                      className="d-flex align-items-start mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 me-3">
                        <i className={`bi ${info.icon} fs-4 text-primary`}></i>
                      </div>
                      <div>
                        <h5 className="mb-1">{info.title}</h5>
                        <p className="text-muted mb-0">{info.content}</p>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div 
                    className="mt-5 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h5 className="mb-3">Follow Us</h5>
                    <div className="d-flex gap-3 justify-content-center">
                      <motion.a
                        href="#"
                        className="text-primary fs-4"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="bi bi-facebook"></i>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="text-primary fs-4"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="bi bi-twitter"></i>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="text-primary fs-4"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="bi bi-linkedin"></i>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="text-primary fs-4"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="bi bi-instagram"></i>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-light py-5">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-4">Find Us</h2>
            <div className="ratio ratio-21x9 mx-auto" style={{ maxWidth: 900 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
                title="Office Location"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact