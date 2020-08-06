import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTatal } from './Reducer';
import { Link } from 'react-router-dom';
const Subtotla = () => {

    const [{basket,user}]=useStateValue()
    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>SubTotal ({basket.length}:item)<strong>{`$${value}`}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox"></input>
                        This Order contains a gift.
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTatal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                profix={"$"}
            />

            <button><Link to={user?'/shipping':'/login'}>Proced To Chackout</Link></button>

        </div>
    )
}

export default Subtotla
