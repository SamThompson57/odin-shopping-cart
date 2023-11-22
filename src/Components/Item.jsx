import React, { useState } from "react";
import burgerimg from "../img/burgeroutline.png"

const Item = (props) => {

    const { name, desc, kcal, cost, addToBasket, removeFromBasket } = props

    const [qty, setQty] = useState(0)

    function add(){
        setQty(qty+1)
        addToBasket({
            itemName: name,
            itemQty: qty+1,
            itemSub: cost * (qty+1)
        })
    }

    function rem(){
        setQty(qty-1)
        removeFromBasket({
            itemName: name,
            itemQty: qty-1,
            itemSub: cost * (qty - 1)
        })
    }

    return (
        <div>
            <div className="itemCard">
                <div className="itemCardHead">{name}</div>
                <div className="itemCardBody">
                    <img className="cardImg" src={burgerimg} alt="borger"/>
                    <div className="cardDesc">{desc}</div>
                    <div className="cardKcal">{`from ${kcal}kcal`}</div>
                </div>
                <div className="itemCardFoot">
                    <div className="cardCost">{`£${cost}`}</div>
                    <div className="quantity">
                        <button onClick={() => {if(qty > 0) rem()}}>-</button>
                        <div>{qty}</div>
                        <button onClick={() => {add()}}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item