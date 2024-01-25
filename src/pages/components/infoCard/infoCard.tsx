import { useEffect, useState } from 'react'
import { Image } from '@nextui-org/react'
import { Lora } from 'next/font/google'
import styles from './InfoCard.module.scss'
import { CircularProgressbar } from 'react-circular-progressbar'

const lora = Lora({ subsets: ['latin'] })

interface InfoCardProps {
  items: {
    icon?: string
    percentage?: string
    text: string
  }[]
  animate: boolean
}

const InfoCard: React.FC<InfoCardProps> = ({ items, animate }) => {
  const percentage = 100

  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  const [animationDone, setAnimationDone] = useState(false)

  useEffect(() => {
    if (animate) {
      setAnimatedPercentage(percentage)
    }
  }, [animate, percentage])

  if (animate) {
    setTimeout(() => {
      setAnimationDone(true)
    }, 500)
  }
  return (
    <div className={`${styles.card} ${!animate ? styles.card_shadow : ''}`}>
      {items &&
        items.map((item, index) => (
          <div className={styles.card__item} key={index}>
            {!item.percentage ? (
              <div className={styles.card__icon}>
                {animate && !animationDone && (
                  <CircularProgressbar
                    value={animatedPercentage}
                    className={styles.spinner}
                    background
                    styles={{
                      trail: { stroke: '#fff' },
                      path: {
                        stroke: '#222B38',
                        transformOrigin: 'center center',
                      },
                      background: { fill: '#fff' },
                    }}
                  />
                )}
                {(animationDone || !animate) && (
                  <Image src={item.icon} width={24} height={24} alt="icon" />
                )}
              </div>
            ) : (
              <div className={`${styles.card__percentage} ${lora.className}`}>
                {item.percentage}
              </div>
            )}
            <p style={{ marginLeft: 12 }}>{item.text}</p>
          </div>
        ))}
    </div>
  )
}

export default InfoCard
