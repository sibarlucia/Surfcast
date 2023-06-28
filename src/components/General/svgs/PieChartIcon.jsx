
export const PieChartIcon = (props) => {
  const {color = '#E14192'} = props
  // #706F6F
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={52}
      height={52}
      fill="none"
      {...props}
    >
      <path
        fill={color}
        d="M31.416 22.38h14.452a1.798 1.798 0 0 0 1.798-1.798 16.25 16.25 0 0 0-16.25-16.25 1.798 1.798 0 0 0-1.798 1.798v14.452a1.798 1.798 0 0 0 1.799 1.798Z"
      />
      <path
        fill={color}
        d="M45.673 25.998H28.015a1.971 1.971 0 0 1-1.972-1.971V6.325a1.993 1.993 0 0 0-2.21-1.993 21.667 21.667 0 1 0 23.833 23.833 1.994 1.994 0 0 0-1.993-2.167Z"
      />
    </svg>
  )
}