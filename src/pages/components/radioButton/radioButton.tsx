import React from 'react'
import { RadioProps, Badge } from '@nextui-org/react'
import styles from './RadioButton.module.scss'

interface RadioButtonProps {
  radioOptions: {
    description: string
    price: string
    id: number
    topText?: string
  }[]
}

const RadioButton: React.FC<RadioButtonProps> = ({ radioOptions }) => {
  return (
    <div className={styles['radio-group']}>
      {radioOptions &&
        radioOptions.map((radio, index) => (
          <div key={index}>
            <input
              className={styles.input}
              type="radio"
              id={`radioOption${radio.id}`}
              name="radioGroup"
              value={`${radio.price}`}
            />
            <div>
              {radio.topText && (
                <span className={styles.text}>{radio.topText}</span>
              )}
              <label
                className={`${styles.radio} ${radio.topText ? styles.radio_border : ''}`}
                htmlFor={`radioOption${radio.id}`}
              >
                <span className={styles['radio-btn']}>
                  <span className={styles['radio-btn__circle']}></span>
                </span>
                <div className={styles.info}>
                  <div style={{ fontWeight: 700 }}>{radio.description}</div>
                  <div className={styles.price}>
                    <Badge
                      content="$"
                      className={styles.price__badge}
                      placement="top-left"
                    >
                      <div className={styles.price__number}>{radio.price}</div>
                    </Badge>
                  </div>
                </div>
              </label>
            </div>
          </div>
        ))}
    </div>
  )
}

export default RadioButton
