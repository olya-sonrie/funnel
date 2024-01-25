import React from 'react'
import { Button } from '@nextui-org/react'
import styles from './SelectPlan.module.scss'
import Title from '@/pages/components/title/title'
import RadioButton from '@/pages/components/radioButton/radioButton'

interface SelectPlanProps {
  options: {
    description: string
    price: string
    id: number
    topText?: string
  }[]
}

const SelectPlan: React.FC<SelectPlanProps> = ({ options }) => {
  return (
    <div className={styles['select-plan']}>
      <Title text={'Choose your plan'} />
      <div className={styles['radio-group']}>
        <RadioButton radioOptions={options} />
      </div>
      <Button className={styles.button} color="primary" variant="solid" fullWidth size="lg">
        Get my plan
      </Button>
      <p className={styles.description}>
        You are enrolling in a 3-monthly subscription to
        <span className={styles.link}> https://awesomeapp.com/subscription </span>
        with the discount price $29.99.You agree that the plan you selected will automatically be extended at the full
        price for successive renewal periods and you will be charged $99.99 every 3 months until you cancel
        subscription. Payments will be charged from the card you specified here. You can cancel your subscription by
        contacting our customer support team via email at support@awesomeapp.com Subscription Policy. The charge will
        appear on your bill as &quot;awesomeapp&quot;
      </p>
    </div>
  )
}

export default SelectPlan
