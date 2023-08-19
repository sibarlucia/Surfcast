import { useMemo } from 'react'
import { WeeksDays } from '../../../utils/getWeekDays'
import styles from './index.module.css'

export const WeelDaysSchedule = ({selectedDays = '', onChange = () => {}, className = ''}) => {

    const formatedSelectedDays = useMemo(() => {
        if (!selectedDays) return []
        return selectedDays.split(',')
    }, [selectedDays])

    const handleSelectDay = (selectedDay) => () => {
        const { value: selected } = selectedDay 
        let updatedDays = []
        if (formatedSelectedDays.includes(selected)) {
            updatedDays = formatedSelectedDays.filter(item => item !== selected)
        } else {
            updatedDays = [...formatedSelectedDays, selected]
        }
        onChange(updatedDays.join())
    }

    return (
        <ul className={`${styles.list} ${className}`}>
            {
                WeeksDays.map((item, index) => {
                    return (
                        <li
                            key={`weekDay-${index}`}
                            className={styles.item}
                        >
                            <button
                                type='button'
                                className={`${styles.dayButton} ${formatedSelectedDays.includes(item.value) ? styles.buttonActive : '' }`}
                                onClick={handleSelectDay(item)}
                            >
                                {item.name}
                            </button>
                        </li>         
                    )
                })
            }
        </ul>
    )
}