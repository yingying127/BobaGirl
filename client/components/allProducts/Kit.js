import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '/client/store'

export class Kit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teaName: '',
            teaName2: '',
            syrupName: '',
            syrupName2: '',
            milkName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addProductToCart = this.addProductToCart.bind(this);
    }
    addProductToCart(product) {
        const quantity = 1;
        this.props.addToCart(product, quantity);
    }
    handleSubmit(ev) {
        ev.preventDefault()
        // console.log(this.state)
    }
    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    render() {
        const { teaName, teaName1, syrupName, syrupName1, milkName } = this.state;
        const { teas, syrups, product, milks } = this.props
        const { handleChange, handleSubmit, addProductToCart } = this;
        return (
            <div>
                <form className='kitform' onSubmit={ handleSubmit }>
                    {product.name === '2 Cups Fruit Tea Kit' &&
                    <div>
                        <p>Select Tea</p>
                        <select className='kitoption' value={ teaName } name='teaName' onChange={ handleChange }>
                                <option value=''>Tea Options</option>
                                {
                                    teas.map(tea => {
                                        return (
                                            <option key={tea.id}>
                                                {tea.name}
                                            </option>
                                        )
                                    })
                                }
                        </select>
                        <p>Select Syrup</p>
                        <select className='kitoption' value={ syrupName } name='syrupName' onChange={ handleChange }>
                                <option value=''>Syrup Options</option>
                                {
                                    syrups.map(syrup => {
                                        return (
                                            <option key={syrup.id}>
                                                {syrup.name}
                                            </option>
                                        )
                                    })
                                }
                        </select>
                    </div>
                    }
                    
                    {(product.name === '2 Cups Milk Tea Kit') &&
                        <div>
                            <p>Select Tea</p>
                            <select className='kitoption' value={ teaName } name='teaName' onChange={ handleChange }>
                                    <option value=''>Tea Options</option>
                                    {
                                        teas.map(tea => {
                                            return (
                                                <option key={tea.id}>
                                                    {tea.name}
                                                </option>
                                            )
                                        })
                                    }
                            </select>
                            <p>Select Milk Powder</p>
                            <select className='kitoption' value={ milkName } name='milkName' onChange={ handleChange }>
                                <option value=''>Milk Powder Options</option>
                                {
                                    milks.map(milk => {
                                        return (
                                            <option key={milk.id}>
                                                {milk.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    }

                    {product.name === '4 Cups Mix Tea Kit' &&
                    <div>
                        <p>Select Teas</p>
                        <select className='kitoption' value={ teaName } name='teaName' onChange={ handleChange }>
                                <option value=''>Tea Options</option>
                                {
                                    teas.map(tea => {
                                        return (
                                            <option key={tea.id}>
                                                {tea.name}
                                            </option>
                                        )
                                    })
                                }
                        </select>
                        <select className='kitoption' value={ teaName1 } name='teaName1' onChange={ handleChange }>
                                <option value=''>Tea Options</option>
                                {
                                    teas.map(tea => {
                                        return (
                                            <option key={tea.id}>
                                                {tea.name}
                                            </option>
                                        )
                                    })
                                }
                        </select>
                        <p>Select Syrups</p>
                        <select className='kitoption' value={ syrupName } name='syrupName' onChange={ handleChange }>
                                <option value=''>Syrup Options</option>
                                {
                                    syrups.map(syrup => {
                                        return (
                                            <option key={syrup.id}>
                                                {syrup.name}
                                            </option>
                                        )
                                    })
                                }
                        </select>
                        <select className='kitoption' value={ syrupName1 } name='syrupName1' onChange={ handleChange }>
                                <option value=''>Syrup Options</option>
                                {
                                    syrups.map(syrup => {
                                        return (
                                            <option key={syrup.id}>
                                                {syrup.name}
                                            </option>
                                        )
                                    })
                                }
                        </select>
                    </div>
                    }  
                    
                   

                    {(product.name === '4 Cups Milk Tea Kit') &&
                        <div>
                           <p>Select Teas</p>
                            <select className='kitoption' value={ teaName } name='teaName' onChange={ handleChange }>
                                <option value=''>Tea Options</option>
                                {
                                    teas.map(tea => {
                                        return (
                                            <option key={tea.id}>
                                                {tea.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <select className='kitoption' value={ teaName1 } name='teaName1' onChange={ handleChange }>
                                <option value=''>Tea Options</option>
                                {
                                    teas.map(tea => {
                                        return (
                                            <option key={tea.id}>
                                                {tea.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <p>Select Milk Powder</p>
                            <select className='kitoption' value={ milkName } name='milkName' onChange={ handleChange }>
                                <option value=''>Milk Powder Options</option>
                                {
                                    milks.map(milk => {
                                        return (
                                            <option key={milk.id}>
                                                {milk.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    }

                    <button className='addtocart-btn' onClick={() => addProductToCart(product)}>Add to Cart</button>
                </form>
                {/* <pre>
                    { JSON.stringify(this.state, null, 2)}
                </pre> */}
            </div>
        )
    }
}

const mapState = ( state, otherProps ) => {
    const teas = state.products.filter((product) => product.key === 'tea')
    const syrups = state.products.filter((product) => product.key === 'syrup')
    const product = state.products.find(
        (product) => product.id === otherProps.match.params.id * 1
      ) || {};
    const milks = state.products.filter((product) => product.key === 'milk')
    return {
        teas,
        syrups,
        product,
        milks,
    }
}

const mapDispatch = dispatch => {
    return {
        addToCart: (product, quantity) =>
            dispatch(addToCart(product, quantity, history)),
    }  
}

export default connect(mapState, mapDispatch)(Kit)