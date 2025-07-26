import React from 'react'
import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <motion.div
        className="spinner-border text-primary"
        role="status"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <span className="visually-hidden">Loading...</span>
      </motion.div>
    </div>
  )
}

export default LoadingSpinner