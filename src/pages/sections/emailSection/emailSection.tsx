import React, { useState, useEffect } from 'react'
import { Button, Input } from '@nextui-org/react'
import styles from './EmailSection.module.scss'
import { Title } from '@/pages/components'

interface LoaderSectionProps {
  email: string
  onUpdate: (data: string) => void
}

const LoaderSection: React.FC<LoaderSectionProps> = ({ email, onUpdate }) => {
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    setUserEmail(email)
  }, [email])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value

    setUserEmail(inputEmail)
  }

  const validateEmail = (email: string) => {
    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  }

  const isInvalid = React.useMemo(() => {
    if (userEmail === '') {
      return false
    }

    return validateEmail(userEmail) ? false : true
  }, [userEmail])

  const showNextPage = () => {
    if (validateEmail(userEmail)) {
      onUpdate(userEmail)
    }
  }
  return (
    <>
      <div className={styles.email}>
        <div>
          <Title text={'Enter your email to get your personalised Spiritual Growth Plan'} />
          <Input
            type="email"
            label="Email"
            value={userEmail}
            isRequired
            isInvalid={isInvalid}
            color={isInvalid ? 'danger' : 'primary'}
            errorMessage={isInvalid && 'Please enter a valid email'}
            onChange={handleInputChange}
          />
        </div>
        <Button className={styles.button} color="primary" variant="solid" fullWidth size="lg" onClick={showNextPage}>
          Continue
        </Button>
      </div>
    </>
  )
}

export default LoaderSection
