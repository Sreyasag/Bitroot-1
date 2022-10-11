import React from 'react'
import reactDOM from 'react-dom'
import './Modal.css'


function Modal(props) {
  return (reactDOM.createPortal(
    <div className='details'>
      <div className={`alert ${props.showModal ? '' : 'hidden'}`}>
        <div className='close-button'>
            <img src="/close.png" alt="close" title="close" onClick={props.hideModal} />
        </div>
        <div className='image-large'>
          <img src={props.data.thumbnail.large} alt="" />
        </div>
        <div className="content">
            <h2>{props.data.title}</h2>
            <p>{props.data.content}</p>
            <div className="author">
                <img src={props.data.author.avatar} alt={props.data.author.name} title={props.data.author.name}/>
                <div className='role'>{props.data.author.name} - {props.data.author.role}</div>
            </div>
        </div>
      </div>
      <div className={`overlay ${props.showModal ? '' : 'hidden'}`} onClick={props.hideModal}></div>
    </div> ,
    document.getElementById('modal')
  )
    
  )
}

export default Modal