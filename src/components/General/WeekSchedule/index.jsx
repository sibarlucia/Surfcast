import styles from './index.module.css'

// const defaultData = [
//     {
//         dayName: 'DOM',
//         active: true,
//         startTime: '',
//         endTime: ''
//     },
//     {
//         dayName: 'LUN',
//         active: true,
//         startTime: '',
//         endTime: ''    
//     },
//     {
//         dayName: 'MAR',
//         active: false,
//         startTime: '',
//         endTime: ''    
//     },
//     {
//         dayName: 'MIER',
//         active: false,
//         startTime: '',
//         endTime: ''    
//     },
//     {
//         dayName: 'JUE',
//         active: false,
//         startTime: '',
//         endTime: ''    
//     },
//     {
//         dayName: 'VIER',
//         active: false,
//         startTime: '',
//         endTime: ''
//     },
//     {
//         dayName: 'SAB',
//         active: false,
//         startTime: '',
//         endTime: ''
//     }
// ]


const hoursOptions = [
    '00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'
] 

export const WeekSchedule = ({  onChange = () => {}, data = [] }) => {

    // data = defaultData

    const handleToggleDay = (selectedIndex) => () => {
        const updatedData = [...data]
        updatedData[selectedIndex].active = !updatedData[selectedIndex].active
        onChange(updatedData)
    } 

    const handleChageTime = (changeIndex) => (event) => {
        const updatedData = [...data]
        const { value, name } = event.target
        updatedData[changeIndex][name] = value 
        onChange(updatedData)
    }

    return (
        <ul className={styles.scheduleList}>
            {
                data.map((item, index) => {
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