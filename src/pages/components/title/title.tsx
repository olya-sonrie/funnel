import { Lora } from 'next/font/google'
import styles from './Title.module.scss'

const lora = Lora({ subsets: ['latin'] })

interface TitleProps {
  text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h2 className={`${styles.title} ${lora.className}`}>{text}</h2>
}

export default Title
