import { useRouter } from 'next/router'
import { Button } from '@nextui-org/react'
import { Lora } from 'next/font/google'
import styles from './Header.module.scss'
import BackIcon from './images/BackIcon'
import MenuIcon from './images/MenuIcon'

const lora = Lora({ subsets: ['latin'] })

interface FunnelHeaderProps {
  onChange: () => void
}

const FunnelHeader: React.FC<FunnelHeaderProps> = ({ onChange }) => {
  return (
    <>
      <header className={`${styles.header} ${lora.className}`}>
        <Button isIconOnly className={styles['back-btn']} onClick={onChange}>
          <BackIcon />
        </Button>
        <p className={styles.title}>App</p>
        <Button isIconOnly className={styles['menu-btn']}>
          <MenuIcon />
        </Button>
      </header>
    </>
  )
}

export default FunnelHeader
