import React from 'react'
import styles from './FunnelSection.module.scss'
import SelectPlan from './components/selectPlan'
import { Title, FeedbackCard, InfoCard } from '@/pages/components'

const ProgressSection: React.FC = () => {
  const feedback = [
    {
      name: 'Guadalupe Hudson',
      date: '2 January 2024',
      text: 'All I want to know if you are working on another agent A game or chapters. Loved this game!',
    },
    {
      name: 'Bobby Wintheiser',
      date: '27 December 2023',
      text: 'I`ve played this over and over and I love it!',
    },
    {
      name: 'Colleen Beahan',
      date: '19 December 2023',
      text: 'Soooo fun I recommend. Easy and fun I thought it was a little challenging but if it wasn`t it would not be fun I recommend',
    },
  ]

  const cardItemsIcon = [
    {
      icon: './icons/greenCheck.svg',
      text: 'You wake up feeling motivated and energized',
    },
    {
      icon: './icons/greenCheck.svg',
      text: 'You start your day in harmony with prayer',
    },
    {
      icon: './icons/greenCheck.svg',
      text: 'Your relationships are stronger than ever',
    },
    {
      icon: './icons/greenCheck.svg',
      text: 'You’re commited to spiritual growth and self-improvement',
    },
    {
      icon: './icons/greenCheck.svg',
      text: 'You grow closer to God through everyday Bible reading',
    },
  ]

  const cardItemsText = [
    {
      percentage: '71%',
      text: 'of users were able to feel the power of prayer after just 6 weeks',
    },
    {
      percentage: '65%',
      text: 'of users started to have a meaningful daily routine and peaceful mind',
    },
    {
      percentage: '47%',
      text: 'of users struggled with finding time for daily praying',
    },
  ]

  const topOptions = [
    {
      description: '1-Month Plan',
      price: '10',
      id: 1,
    },
    {
      description: '3-Month Plan',
      price: '30',
      id: 2,
      topText: 'MOST POPULAR',
    },
    {
      description: '6-Month Plan',
      price: '60',
      id: 3,
    },
  ]

  const bottomOptions = [
    {
      description: '1-Month Plan',
      price: '10',
      id: 4,
    },
    {
      description: '3-Month Plan',
      price: '30',
      id: 5,
      topText: 'MOST POPULAR',
    },
    {
      description: '6-Month Plan',
      price: '60',
      id: 6,
    },
  ]
  return (
    <>
      <div>
        <div className={styles.margin}>
          <SelectPlan options={topOptions} />
        </div>
        <Title text={'Users love App!'} />
        <div className={styles.margin}>
          <FeedbackCard usersFeedback={feedback} />
        </div>
        <Title text={'What you get'} />
        <div className={styles.margin}>
          <InfoCard items={cardItemsIcon} animate={false} />
        </div>
        <Title text={'People just like you achieved great results with App!'} />
        <div className={styles.margin}>
          <InfoCard items={cardItemsText} animate={false} />
        </div>
        <div className={styles.margin_small}>
          <SelectPlan options={bottomOptions} />
        </div>
      </div>
    </>
  )
}

export default ProgressSection
