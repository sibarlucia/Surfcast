import { useState, useEffect, useRef } from 'react'
import styles from './index.module.css'

// options={[
//   {
//     value: 'edit',
//     text: 'Editar',
//     data: item
//   },
//   {
//     value: 'delete',
//     text: 'Borrar',
//     data: item,
//     color: 'error',
//   },
//   {
//     value: item.active ? 'deactivate' : 'activate',
//     text: item.active ? 'Desactivar' : 'activar',
//     color: item.active ? 'error' : 'success',
//     data: item
//   }
// ]}
// [
//     {
//         value: 'edit',
//         text: 'Editar',
//         data: item,
//         icon: historyIcon,
//         color: 'primary'
//     },
//     {
//         value: 'delete',
//         text: 'Borrar',
//         data: item,
//         color: 'error',
//         icon: trashICon
//     },
// ]

export const DropdownMenu = ({ children, options, onSelect = () => {}, id = '' }) => {
    const [showMenu, setShowMenu] = useState(false)
    const dropdownContainer = useRef()

    const handleSelectItem = (value) => () => {
        setShowMenu(!showMenu)
        onSelect(value)
    }

    useEffect(() => {
        const handleClick = (event) => {
            if (!dropdownContainer.current.contains(event.target)) {
                setShowMenu(false)
            } 
        }

        document.addEventListener('mousedown', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [])

    return (
        <div
            className={styles.general__dropdownMenu}
            ref={dropdownContainer}
        >
            <button
                onClick={() => setShowMenu(!showMenu)}
                className={styles.general__dropdownMenu__mainButton}
            >
                { children }
            </button>
            {
                showMenu && (
                    <div className={styles.general__dropdownMenu__optionContainer}>
                        {
                            options.map((item, index) => {
                                const colorClass = item.color ? styles[`general__dropdownMenu__option--${item.color}`] : null 
                                return (
                                    <button
                                        className={`${styles.general__dropdownMenu__option} ${colorClass ? colorClass : ''}`}
                                        onClick={handleSelectItem(item)}
                                        key={`general__dropdownMenu-${id}-${index}`}
                                    >
                                        {
                                            item.icon && (
                                                <img
                                                    src={item.icon}
                                                    alt={item.text}
                                                />
                                            )
                                        }
                                        {item.text}
                                    </button>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}