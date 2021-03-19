import React, { Component } from "react"


let itemId = 3;

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {products: []};

    }

    async componentDidMount() {
        const response = await fetch("http://localhost:8082/api/products")
        const json = await response.json()
        this.setState({products: json})
    }

    addItem = (e) => {
        if (this.state.quantity <= 0) {
            alert("give a postivie quantity")
        } else {
            e.preventDefault()
            let searchItem = this.state.products.find(product => product.name === this.state.product )
            if (searchItem) {
                let itemToAdd = { 
                    id: ++itemId, 
                    product: { 
                        id: searchItem.id, 
                        name: searchItem.name, 
                        priceInCents: searchItem.priceInCents / 100,
                    }, 
                    quantity: this.state.quantity }
            this.props.addItem(itemToAdd)
            } else {
                alert("Select a Product")
            }
        }
        
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state);
    }

    render() {
        return (
            <form>
                <div className="form-group container">
                    <p>
                        <label>Qantity</label><br />
                        <input type="number" min={1} onChange={this.onChange} name="quantity" />
                    </p>
                    <p>
                        <label>Products</label><br />
                        <select defaultValue={"DEFAULT"} onChange={this.onChange} name="product">
                            <option value="DEFAULT" disabled>Select an Option</option>
                            {this.state.products.map((product, key) =>  <option key={key}>{product.name}</option>)}
                        </select>
                    </p>
                    <button type="submit" onClick={this.addItem} className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }

}

export default UserForm;