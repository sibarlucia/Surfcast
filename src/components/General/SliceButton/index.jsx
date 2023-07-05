import styles from './index.module.css'

export const SliceButton = ({ active, onClick, size = null}) => {
  // const [isToggled, toggle] = useState(active)

  const mainStyle = {}

  if (size) {
    mainStyle.fontSize = size
  }

  

  const callback = () => {
    onClick(!active)
  }

  return (
    <label
      className={`${styles.label} ${active ? styles.selectedLabel : ''}`}
      style={mainStyle}
    >
      <input
        className={styles.input}
        type="checkbox"
        checked={active}
        onChange={() => {}}
        onClick={callback}
      />
      <span className={styles.back}> 
        <span className={styles.dot}/>
      </span>
    </label>
  )
}