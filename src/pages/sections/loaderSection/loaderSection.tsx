import React, { useEffect, useState } from 'react'
import styles from './LoaderSection.module.scss'
import { Lora } from 'next/font/google'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Title, InfoCard } from '@/pages/components'

const lora = Lora({ subsets: ['latin'] })

const LoaderSection: React.FC = () => {
  const cardItemsText = [
    {
      icon: './icons/check.svg',
      text: 'Aligning with your goals',
    },
    {
      icon: './icons/grid.svg',
      text: 'Reviewing your answers',
    },
    {
      icon: './icons/text.svg',
      text: 'Picking Bible verses and prayers for you',
    },
    {
      icon: './icons/ai.svg',
      text: 'Finalizing your personalized plan',
    },
  ]
  const percentage = 87

  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  useEffect(() => {
    setAnimatedPercentage(percentage)
  }, [percentage])
  return (
    <>
      <div>
        <Title text={'We are crafting your spiritual growth plan'} />
        <CircularProgressbar
          value={animatedPercentage}
          text={`${Math.round(animatedPercentage)}%`}
          className={`${styles.spinner} ${lora.className}`}
          background
          styles={{
            trail: { stroke: '#fff' },
            path: {
              stroke: '#0CBD68',
              strokeLinecap: 'round',
              transformOrigin: 'center center',
            },
            text: { fill: '#000' },
            background: { fill: '#fff' },
          }}
        />
        <InfoCard items={cardItemsText} animate={true} />
      </div>
    </>
  )
}

export default LoaderSection
