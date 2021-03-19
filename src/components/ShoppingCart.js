import React, { Component } from "react";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ProductsInCart from "./ProductsInCart";
import TotalPrice from "./TotalPrice"
import UserForm from "./UserForm"

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [

            ],
            totalPrice: 0,

        }

    };

    deleteItem = (item) => {

        this.setState(prevState => ({products: prevState.products.filter(thing => thing !== item)}))
    } 

    addItem = (item) => {
        let found = this.state.products.find(thing => thing.product.name === item.product.name)
        if (found) {
            console.log(item);
            console.log(found);
            let totalQuantity = Number(found.quantity) + Number(item.quantity)
            this.setState(prevState => ({
                products: prevState.products.map(product => 
                    product.product.name === item.product.name ? 
                    {...product, quantity: totalQuantity} : 
                    product)}))
        } else {
            this.setState(prevState => ({products: prevState.products.concat(item)}));
        }
    }

    calculateTotal = () => this.setState({totalPrice: 0})
  
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Cart Items</h1>
                    <div className="list-group">
                        <div className="list-group-item">
                            <div className="row">
                                <div className="col-md-6">Product</div>
                                <div className="col-md-2">Price</div>
                                <div className="col-md-2">Quantity</div>
                                <div className="col-md-2">Remove</div>
                            </div>
                        </div>
                        {this.state.products.map(item =>
                            <ProductsInCart
                                deleteItem={this.deleteItem}
                                products={this.state.products}
                                key={item.id}
                                name={item.product.name}
                                price={item.product.priceInCents}
                                quantity={item.quantity}
                                faTrash={faTrash}
                            />
                        )}
                    </div>
                </div>
                <TotalPrice calculateTotal={this.state.products} />
                <UserForm addItem={this.addItem} />
            </div>
        )
    }
}

export default ShoppingCart;