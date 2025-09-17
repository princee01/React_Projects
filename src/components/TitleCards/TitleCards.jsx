import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import Card_data from '../../assets/Cards/Cards_data'



function TitleCards() {

const cardsRef = useRef();


  useEffect(() => {
    const handlewheel = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    }
    
    cardsRef.current.addEventListener('wheel', handlewheel)
  }, [])
  
  return (
    <div className='title-cards'>
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {Card_data.map((card, index) => {
          return <div className='card' key={index}>
            <img src={card.image} alt="" />
            <p>{ card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
export default TitleCards
