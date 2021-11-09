import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {Button} from "react-bootstrap";

const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText= {(value) => (
                <>
                <p>
                    Subtotal(0 items):
                    <strong>0</strong>
                </p>
                </>
            )}
            decimalScale= {2}
            value={0}
            displayType= {"text"}
            thousandSeparator= {true}
            prefix={""}

            />
             <Button className="SubtotalBtn" variant="success"> Checkout</Button>
        </div>
    )
}

export default Subtotal
