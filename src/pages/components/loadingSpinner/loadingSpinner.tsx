import React from 'react'
import styles from './LoadingSpinner.module.scss'
import { CircularProgressbar } from 'react-circular-progressbar'

import 'react-circular-progressbar/dist/styles.css'

interface LoadingSpinnerProps {
  className: string
  value: number
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className, value }) => {
  const combinedClassName = `${styles.spinner} ${className}`

  return (
    <div className={combinedClassName}>
      <CircularProgressbar value={value} maxValue={1} text={`${value}%`} />
    </div>
  )
}

export default LoadingSpinner
