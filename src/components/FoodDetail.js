import React from 'react'
 import "./FoodDetail.css"


function FoodDetail({currentDish, handleImageDetail}) {

  function handleImageClick(event){
    handleImageDetail(event.target.alt)
  }
  
  console.log(currentDish)

  return (
    <div className='ingredients'>Food Detail: {currentDish.name}
    <h1>{currentDish.name}</h1>
    <img className="foodPic" src={currentDish.image} alt={currentDish.name} onClick={handleImageClick}></img>
    <p>{currentDish.description}</p>
    <p>{currentDish.ingredients}</p>
    </div>
  )
}

export default FoodDetail