import { useState } from 'react'
import './Card.css'

function Card(props) {

    const [isHovering, setIsHovering] = useState(true);
    

    let date = new Date(props.data.date)
                .toLocaleDateString('en-us', { month:"short",  day:"numeric", year:"numeric", })

    return (
    <div className='card'>
        <div className="image" 
            onMouseEnter={()=>{setIsHovering(true)}} 
            onMouseLeave={()=>{setIsHovering(false)}} 
            onClick={()=>{props.displayModal(props.data)}}
            title="More details"
        >
            <img src={props.data.thumbnail.small}/>
            <div className={`learn-more ${isHovering ? '' : 'hidden'}`}>
                Learn More
            </div>
        </div>
        <div className="card__content">
            <div className="dots">
                <span className="dot dot1"></span>
                <span className="dot dot2"></span>
            </div>
            <h2 onClick={()=>{props.displayModal(props.data)}}>{props.data.title}</h2>
            <p>{props.data.content}</p>
            <div className='card__footer'>
                <div>{props.data.author.name} - {props.data.author.role}</div>
                <div>{date}</div>
            </div>
        </div>
    </div>
  )
}

export default Card