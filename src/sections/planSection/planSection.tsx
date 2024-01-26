import { Button } from '@nextui-org/react'
import styles from './PlanSection.module.scss'
import { Inter } from 'next/font/google'
import { Title } from '@/components'

const inter = Inter({ subsets: ['latin'] })

interface PlanSectionProps {
  onClick: () => void
}

const PlanSection: React.FC<PlanSectionProps> = ({ onClick }) => {
  const showNextPage = () => onClick()

  const lines = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className={styles.plan}>
        <div>
          <Title text={'See your Spiritual Growth progress by Sep 17, 2024'} />
          <div className={`${styles.chart} ${inter.className}`}>
            <div className={styles.chart__to}>
              <span className={styles.date}>Sep 17</span> <br /> 2024
            </div>
            <div className={styles.chart__body}>
              {lines.map((_, index) => (
                <div className={styles.line} key={index}></div>
              ))}
            </div>
            <div className={styles.chart__from}>Now</div>
          </div>
        </div>
        <Button className={styles.button} color="primary" variant="solid" fullWidth size="lg" onClick={showNextPage}>
          Continue
        </Button>
      </div>
    </>
  )
}

export default PlanSection
