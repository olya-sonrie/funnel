import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Header } from '@/components'
import { LoaderSection, EmailSection, PlanSection, FunnelSection } from '@/sections'

interface SubmittedData {
  username: string
  email: string
}

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [userData, setUserData] = useState({
    username: '',
    email: '',
  })
  const [initUserEmail, setInitUserEmail] = useState('placeholder')

  if (typeof window !== 'undefined') {
    const disableBack = () => {
      window.history.forward()
    }

    setTimeout(() => disableBack(), 0)
    window.onunload = () => null
  }

  if (currentPage === 1) {
    setTimeout(() => setCurrentPage(2), 2000)
  }

  const handleEmailUpdate = (email: string) => {
    const data = {
      username: 'john_doe',
      email: email,
    }

    if (userData !== data) {
      setUserData(data)
    }

    if (currentPage === 2) {
      setCurrentPage(3)
    }
  }

  const handleSubmit = async (quizResults: SubmittedData) => {
    try {
      const response = await fetch('/api/quizResults', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: quizResults }),
      })

      if (response.ok) {
        console.info({ user: quizResults }) // eslint-disable-line no-console
        console.log('Results submitted successfully') // eslint-disable-line no-console
      } else {
        console.error('Failed to submit') // eslint-disable-line no-console
      }
    } catch (error) {
      console.error('An error occurred during quiz results submission', error) // eslint-disable-line no-console
    }
  }

  const showFunnel = () => {
    if (initUserEmail !== userData.email) {
      setInitUserEmail(userData.email)
      handleSubmit(userData)
    }

    setCurrentPage(4)
  }

  const showPreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  return (
    <>
      <Head>
        <title>Mini-quiz funnel</title>
        <meta name="description" content="Mini-quiz funnel for test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header onChange={showPreviousPage} />
      <main className={`${styles.main} ${jakarta.className}`}>
        {currentPage === 1 && <LoaderSection />}
        {currentPage === 2 && (
          <EmailSection email={userData.email} onUpdate={handleEmailUpdate} />
        )}
        {currentPage === 3 && <PlanSection onClick={showFunnel} />}
        {currentPage === 4 && <FunnelSection />}
      </main>
    </>
  )
}
