import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ananya',
      role: 'Founder & CEO',
      description: 'Leading the vision and strategy for innovative software solutions.',
      image: '/assets/team1.png'
    },
    {
      id: 2,
      name: 'Harika',
      role: 'Lead Developer',
      description: 'Expert in React, Node.js, and modern web technologies.',
      image: '/assets/team2.jpg'
    },
    {
      id: 3,
      name: 'verma',
      role: 'UI/UX Designer',
      description: 'Creating beautiful and intuitive user experiences.',
      image: '/assets/team3.jpg'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section text-center position-relative d-flex align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
        <div className="container hero-content position-relative py-5">
          <motion.h1 
            className="display-3 fw-bold mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Keshav Soft
          </motion.h1>
          <motion.p 
            className="lead mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are passionate about creating innovative software solutions that drive business growth.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section py-5">
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold mb-4">Our Mission</h2>
              <p className="lead mb-4">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and growth in the digital age.
              </p>
              <p className="mb-4">
                We believe in creating software that not only meets current needs but also anticipates 
                future challenges. Our team of experts works tirelessly to deliver solutions that are 
                scalable, secure, and user-friendly.
              </p>
            </motion.div>
            <motion.div 
              className="col-lg-6 text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="/assets/mission.jpg" 
                alt="Our Mission" 
                className="img-fluid rounded shadow mx-auto"
                loading="lazy"
                style={{ maxHeight: 320 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-light py-5">
        <div className="container">
          <motion.div 
            className="row text-center justify-content-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="col-md-3 mb-4 d-flex align-items-stretch"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card border-0 bg-transparent mx-auto" style={{ maxWidth: 250 }}>
                  <div className="card-body">
                    <h3 className="display-4 fw-bold text-primary mb-2">{stat.number}</h3>
                    <p className="text-muted">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section py-5">
        <div className="container">
          <motion.h2 
            className="fw-bold text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="col-lg-4 mb-4 d-flex align-items-stretch"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.04} tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={700} className="w-100">
                  <div className="card border-0 shadow-sm card-hover text-center h-100 mx-auto" style={{ maxWidth: 350 }}>
                    <div className="card-body p-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="rounded-circle mb-3 mx-auto d-block"
                        width="120"
                        height="120"
                        style={{ objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <h5 className="card-title">{member.name}</h5>
                      <p className="text-primary fw-bold mb-2">{member.role}</p>
                      <p className="card-text">{member.description}</p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-light py-5">
        <div className="container">
          <motion.h2 
            className="fw-bold text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <div className="row justify-content-center">
            <motion.div 
              className="col-md-4 mb-4 d-flex align-items-stretch"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center card border-0 bg-transparent mx-auto" style={{ maxWidth: 350 }}>
                <i className="bi bi-lightbulb display-4 text-primary mb-3"></i>
                <h4>Innovation</h4>
                <p>We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
              </div>
            </motion.div>
            <motion.div 
              className="col-md-4 mb-4 d-flex align-items-stretch"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center card border-0 bg-transparent mx-auto" style={{ maxWidth: 350 }}>
                <i className="bi bi-shield-check display-4 text-primary mb-3"></i>
                <h4>Quality</h4>
                <p>We maintain the highest standards of quality in every project we undertake.</p>
              </div>
            </motion.div>
            <motion.div 
              className="col-md-4 mb-4 d-flex align-items-stretch"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center card border-0 bg-transparent mx-auto" style={{ maxWidth: 350 }}>
                <i className="bi bi-people display-4 text-primary mb-3"></i>
                <h4>Collaboration</h4>
                <p>We work closely with our clients to ensure their vision becomes reality.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About