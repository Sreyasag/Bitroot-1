import React, { useEffect, useState } from 'react'
import Card from './Card'
import Modal from './Modal'
import './Home.css'

function Home() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
        .then((res)=>{
            if(!res.ok) throw Error('error occured')
            return res.json()
        })
        .then((data)=>{
            setData(data)
            setLoading(false)
            setError(null)
            
        })
        .catch((err)=>{
            setError(err)
            setLoading(false)
        })
    },[])

    const [modalData, setModalData] = useState(null)
    const[showModal, setShowModal] = useState(false)
    
    function displayModal(data){
        setModalData(data)
        setShowModal(true)
    }

    function hideModal(){
        setShowModal(false)
    }

    return (
        <div className='content'>
            {loading && 
                <div className='loading'>
                    <img src="/loading.png"/> 
                    <div>loading...</div>
                </div>
            }
            {error && <div>{error.message}</div>}
            <div className='list'>
                {data && data.map((item) => {
                            return <Card data={item} displayModal={displayModal} key={item.id} />
                        })
                }
            </div>
            {modalData && <Modal data={modalData} showModal={showModal} hideModal={hideModal} /> }   
        </div>
    )
}

export default Home