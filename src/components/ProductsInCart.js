import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ProductsInCart extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    deleteItem = (itemName) => {
        let foundItem = this.props.products.find(thing => thing.product.name === itemName)
        this.props.deleteItem(foundItem)
    }

    render() {
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-md-6">{this.props.name}</div>
                    <div className="col-md-2">${this.props.price}</div>
                    <div className="col-md-2">{this.props.quantity}</div>

                    <button disabled={this.props.products.length >= 2 ? false : true} onClick={() =>
                        this.deleteItem(this.props.name)} className="btn-delete">
                            <FontAwesomeIcon icon={this.props.faTrash} />
                    </button>
                </div>
            </div>
        )
    }

}
export default ProductsInCart;