import React from "react"


const totalPrice = ({calculateTotal}) => {
    return (
        <div>
            <p className="container">Total Price: ${
                calculateTotal.length !== 0 ? calculateTotal.map(item =>  item.product.priceInCents * item.quantity)
                .reduce((previousVal, current) => (Number(previousVal) + Number(current)).toFixed(2)) : ""}
            </p>
        </div>
    )
}

export default totalPrice;

