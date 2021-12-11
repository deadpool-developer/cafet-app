import React from 'react'
import { useStateValue } from '../StateProvider'
import "./CheckoutProduct.css"

function CartItem({id,image,title,price}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () => {
        //remove the items
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct_image' src={image}/>

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <button className='remove__btn' onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CartItem
