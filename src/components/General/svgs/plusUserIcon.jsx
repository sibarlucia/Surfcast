
export const PlusUserIcon = (props) => {
  const {color = '#E14192'} = props
  // #706F6F
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      fill="none"
      {...props}
    >
      <path
        fill={color}
        d="M43.75 12.5h-2.084v-2.084a2.083 2.083 0 0 0-4.166 0V12.5h-2.084a2.083 2.083 0 0 0 0 4.166H37.5v2.084a2.083 2.083 0 0 0 4.166 0v-2.084h2.084a2.083 2.083 0 0 0 0-4.166ZM20.833 22.916a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667ZM33.333 43.75a2.083 2.083 0 0 0 2.084-2.084 14.583 14.583 0 0 0-29.167 0 2.083 2.083 0 0 0 2.083 2.084"
      />
    </svg>
  )
}