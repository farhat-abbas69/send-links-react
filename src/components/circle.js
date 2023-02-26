import { useState } from 'react'
import '../styles/circle.css'
export default function Circle(){

    const [x, setX] = useState(null)
    const [y, setY] = useState(null)
    const [styles, setStyles] = useState({ 
        // transform: 'translateX(0px)',

    })

    function onDragHandle(e){
        console.log(e)
        console.log(e.clientX)
        console.log(e.clientY)
        setX(e.clientX)
        setY(e.clientY)

        setStyles({
            transform: `translate(${x}px, ${y}px)`,
        })
    }

    function onDragEndHandle(e){
        setStyles({
            transform: `translate(${e.clientX}px, ${e.clientY}px)`,
        })
    }
    function circleClicked(e){
        console.log(e)
    }
    

    return(
        <div className='circle-bg' >
            <div className='circle'
                style={styles}
                onDrag={onDragHandle} 
                onDragEnd={onDragEndHandle}
                onClick={circleClicked}
            >
                
            </div>
        </div>
    )
}