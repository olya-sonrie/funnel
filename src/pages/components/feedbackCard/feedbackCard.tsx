import React from 'react'
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
import styles from './FeedbackCard.module.scss'

interface FeedbackCardProps {
  usersFeedback: {
    name: string
    date: string
    text: string
  }[]
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ usersFeedback }) => {
  const stars = [
    './icons/star.svg',
    './icons/star.svg',
    './icons/star.svg',
    './icons/star.svg',
    './icons/star.svg',
  ]

  return (
    <div className={styles.card}>
      {usersFeedback &&
        usersFeedback.map((feedback, indx) => (
          <Card key={indx} className="p-3" style={{ marginBottom: 12 }}>
            <CardHeader className={styles.card__header}>
              <div className="flex items-center justify-between w-full">
                <p className={styles.name}>{feedback.name}</p>
                <div className={styles.stars}>
                  {stars &&
                    stars.map((item, index) => (
                      <Image
                        src={item}
                        key={index}
                        width={12}
                        height={12}
                        alt="star"
                      />
                    ))}
                </div>
              </div>
              <small className={styles.date}>{feedback.date}</small>
            </CardHeader>
            <CardBody className="p-0">
              <p className={`${styles.text} ${styles['truncate-overflow']}`}>{feedback.text}</p>
            </CardBody>
          </Card>
        ))}
    </div>
  )
}

export default FeedbackCard
