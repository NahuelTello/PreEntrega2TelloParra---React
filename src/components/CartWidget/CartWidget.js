import React from 'react'
import img from "../../assets/img/mainCart.svg"
import './CartWidget.css'
const CardWidget = () => {
  return (
    <>
        <div className="card-widget">
            <img src={img} alt="cart" />
            <p>
                <span>5</span>
            </p>
        </div>
    </>
  )
}

export default CardWidget