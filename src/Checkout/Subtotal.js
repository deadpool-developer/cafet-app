import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {Button} from "react-bootstrap";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from '../reducer/reducer';

const Subtotal = () => {
    const [{basket} ,dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText= {(value) => (
                <>
                <p>
                    Subtotal({basket.length} items):
                    <strong>{value}</strong>
                </p>
                </>
            )}
            decimalScale= {2}
            value={getBasketTotal(basket)}
            displayType= {"text"}
            thousandSeparator= {true}
            prefix={""}

            />
             <Button className="SubtotalBtn" variant="success"> Checkout</Button>
        </div>
    )
}

export default Subtotal
