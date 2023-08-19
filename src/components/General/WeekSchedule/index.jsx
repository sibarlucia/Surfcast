import { useMemo } from 'react'
import styles from './index.module.css'
import { WeeksDays } from '../../../utils/getWeekDays'
import { hoursOptions } from '../../../utils/getHoursOptions'

export const WeekSchedule = ({  onChange = () => {}, data = [], disabled = false }) => {

    const formatedData = useMemo(() => {
        const formated = WeeksDays.map(item => {
            const dayName = item.name
            const active = data[`${item.value}_bool`]
            let startTime = ''
            let endTime = ''
            try {
                let time = data[`${item.value}_time`]
                startTime = time.split('-')[0] || ''
                endTime = time.split('-')[1] || ''
            } catch (error) {
                console.log('')
            }
            return {
                dayName, active, startTime, endTime, dayValue: item.value
            }            
        })
        return formated
    }, [data])

    // data = defaultData
    const disabeledStyles = {
        opacity: '0.5',
        pointerEvents: 'none'
    }

    const handleToggleDay = (selectedIndex) => () => {
        const toggleDay = formatedData[selectedIndex].dayValue
        const updatedData = {...data}
        updatedData[`${toggleDay}_bool`] = !updatedData[`${toggleDay}_bool`]
        onChange(updatedData)
    } 

    const handleChageTime = (changeIndex) => (event) => {
        const { value, name } = event.target
        const toggleDay = formatedData[changeIndex].dayValue
        const updatedData = {...data}
        let [startTime, endTime] = updatedData[`${toggleDay}_time`].split('-')
        if (name === 'startTime') {
            updatedData[`${toggleDay}_time`] = `${value}-${endTime}`
        } else {
            updatedData[`${toggleDay}_time`] = `${startTime}-${value}`
        }   
        onChange(updatedData)
    }

    return (
        <ul
            className={styles.scheduleList}
            style={disabled ? disabeledStyles : {} }
        >
            {
                formatedData.map((item, index) => {
                    return (
                        <li key={`scheduleItem-${index}`}>
                            <button
                                type='button'
                                className={`${styles.dayButton} ${item.active ? styles.buttonActive : ''}`}
                                onClick={handleToggleDay(index)}
                            >
                                {item.dayName}
                            </button>
                            <div className={styles.selectHoursContainer}>
                                <select
                                    name='startTime'
                                    value={item.startTime}
                                    onChange={handleChageTime(index)}
                                >
                                    <option value="" hidden>
                                            Desde
                                    </option>
                                    {
                                        hoursOptions.map((item) => {
                                            return (
                                                <option
                                                    value={item}
                                                    key={`starthours-${item}`}
                                                >
                                                    {item}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                                <p className={styles.selectDivider}>
                                    -
                                </p>
                                <select
                                    name='endTime'
                                    value={item.endTime}
                                    onChange={handleChageTime(index)}
                                >
                                    <option value="" hidden>
                                            Hasta
                                    </option>
                                    {
                                        hoursOptions.map((item) => {
                                            return (
                                                <option
                                                    value={item}
                                                    key={`endhours-${item}`}
                                                >
                                                    {item}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )

}