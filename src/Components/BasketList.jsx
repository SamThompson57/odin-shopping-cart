import React from "react";

const BasketList = (props) => {
        const { itemList } = props
    let total = 0

    if(itemList.length){
        for(let i = 0; i< itemList.length; i++){
        total = total + itemList[i].itemSub
        }
    }
    

    return (
        <div className="basketList">
            {itemList.map(line => (
                <div className="itemLine">
                    <div>{line.itemName}</div>
                    <div>({line.itemQty})</div>
                    <div>£{line.itemSub.toFixed(2)}</div>
                </div>
            ))}
            <div className="basketTot">
                <div>TOTAL:</div>
                <div>£{total.toFixed(2)}</div>
            </div>
        </div>
    )
}

export default BasketList