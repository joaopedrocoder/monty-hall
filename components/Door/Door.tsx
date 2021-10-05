import styles from './door.module.css'
import DoorModel from '../../model/doorModel'

interface DoorProps{
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

const Door = (props: DoorProps) => {
    const door = props.value
    const selected = door.isSelect && !door.isOpen ? styles.selected : ''

    const toggleSelection = (event) =>{
        props.onChange(door.toggleSelection())
    }

    const open = (event) =>{
        event.stopPropagation()
        props.onChange(door.open())
    }

    const doorRender = () =>{
        return(
            <div className={styles.door}>
                <div className={styles.number}>{door.doorNumber}</div>
                <div className={styles.knob} onClick={open}></div>
            </div>    
        )
        
    }

    return (
        <div className={styles.container} onClick={toggleSelection}>
            <div className={`${styles.frame} ${selected}`}>
                {door.isOpen ? false : doorRender()}    
            </div>
            
            <div className={styles.floor}></div>
        </div>
       
    )
}

export default Door
