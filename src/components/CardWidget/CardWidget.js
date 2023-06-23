import React from 'react'
import img from "../../assets/img/cart2.svg"
import './CardWidget.css'
const CardWidget = () => {
  return (
    <>
        <div className="card-widget">
            <img src={img} alt="cart" />
            <p>
                <span>2</span>
            </p>
        </div>
    </>
  )
}

export default CardWidget