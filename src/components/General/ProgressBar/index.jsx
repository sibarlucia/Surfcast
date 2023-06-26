import { ProgressNode } from "../ProgressNode"
import { ProgressLine } from "../ProgressLine"
import styles from './index.module.css'
import { Fragment } from "react"

export const ProgressBar = ({ data = [], size }) => {
  
  const mainStyles = {}

  if (size) {
    mainStyles.fontSize = `${size}px`
  }
  
  return (
    <section
      className={styles.progressBar}
      style={mainStyles}
    >
      {
        data.map((item, index) => {
          const { node, line } = item
          const isLast = index + 1 === data.length
          return (
            <Fragment key={`progressBar-item-${index}`}>
              <ProgressNode
                number={index + 1}
                text={node.text}
                active={node.active}
                color={node.color}
              />
              {
                !isLast && (
                  <ProgressLine
                    progress={line?.progress}
                    beginColor={line?.beginColor}
                    endColor={line?.endColor}
                    active={node.active}
                  />
                )
              }
            </Fragment>
          )
        })
      }
    </section>
  )
} 