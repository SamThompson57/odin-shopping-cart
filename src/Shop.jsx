import React, { useEffect, useState } from "react";
import Item from "./Components/Item";
import basket from "./img/basket-outline.png"
import BasketList from "./Components/BasketList";
import storefront from "./storefront.json"

const Shop = () => {

    const [res, setRes] = useState([])
    const [menu, setMenu] = useState([])

    const [cartList, setCartList] = useState([])
    const [cartQty, setCartQty] = useState(0)

    const [showItems, setShowItems] = useState(false)


    const fetchItems = () => {
        const data = storefront
        setRes(data)
        setMenu(data.menu)
    }

    useEffect(() => {
        fetchItems()
    },[])

    function addToBasket(itemObject){
        //Ch`eck if the item is in the cart already
        setCartQty(cartQty+1) 
        if(cartList.length < 1){
            
            setCartList(cartList.concat(itemObject))
            return
        }
        let i = cartList.findIndex(e => e.itemName === itemObject.itemName);
        if (i < 0) { //This means the item does not exist in the list
            setCartList(cartList.concat(itemObject))
            return
        } 

        // At this point I need to build a new object and set the list as this object.
        const holderlist = cartList

        holderlist.splice(i,1,itemObject)

        setCartList(holderlist)
    }

    function removeFromBasket(itemObject){
        // This function will give us the item, this will not be called if the '-' button is pressed at 0
        setCartQty(cartQty-1)
        let i = cartList.findIndex(e => e.itemName === itemObject.itemName);
        const holderlist = cartList

        if (cartList[i].itemQty === 1){
            holderlist.splice(i,1)
            setCartList(holderlist)
        } else{
            holderlist.splice(i,1,itemObject)
            setCartList(holderlist)
        }

    }

    function checkout() {
        window.location.reload();
    }

    return(
        <div className="storeFront">
            <div className="basket">
                <img className="basketIMG" src={basket} alt="Basket" onClick={()=>setShowItems(true)}/>
                <div>{cartQty}</div>
                {showItems ? 
                    <div className="expandList">
                        <BasketList itemList={cartList}/>
                        <div className="listButtons">
                            <button onClick={()=>setShowItems(false)}>Collapse</button>
                            <button onClick={() => checkout()}>Checkout</button>
                        </div>
                    </div>
                    : null
                }
            </div>
            <div>
                <h1 className="title">{res.storename}</h1>
                <h4>{`Opening hours: ${res.open} - ${res.close} `}</h4>
                <div>
                    {menu.map(section => (
                    <div>
                        <h2>{section.subsection}</h2>
                        <p>{section.desc}</p>
                        {section.items.map(item => (
                            <Item 
                                name={item.name} 
                                desc={item.desc} 
                                kcal={item.kcal} 
                                cost={item.cost} 
                                addToBasket={addToBasket}
                                removeFromBasket={removeFromBasket}
                            />                            
                        ))}
                    </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop