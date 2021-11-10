import React from 'react';
import {
    FeatureContainer,
    FeatureButton
} from "./FeatureElements";

const Feature = () => {
    return (
        <div>
            <FeatureContainer>
                <h1>Burger of the Day</h1>
                <p>Truffle alfredo sauce topped with 24 carat gold dust</p>
                <FeatureButton>Order Now</FeatureButton>
            </FeatureContainer>
        </div>
    )
}

export default Feature
