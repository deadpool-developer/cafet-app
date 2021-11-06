import React from 'react'
import {
    ProductCard,
    ProductsContainer,
    ProductImg,
    ProductInfo,
    ProductsHeading,
    ProductTitle,
    ProductWrapper,
    ProductDesc,
    ProductPrice,
    ProductButton
} from "./ProductsElements";
import "typeface-mate-sc";
import "typeface-gruppo";
import "typeface-electrolize";
import "typeface-staatliches";
import 'typeface-cabin-sketch';

const Products = ({heading,data}) => {
    return (
        <div>
            <ProductsContainer>
                <ProductsHeading style={{fontFamily: 'Staatliches, cursive'}}>{heading}</ProductsHeading>
                <ProductWrapper>
                    {data.map((product ,index) => {
                        return(
                            <ProductCard key = {index}>
                                <ProductImg src= {product.img} alt={product.alt}/>
                                <ProductInfo>
                                    <ProductTitle style={{fontFamily: 'Mate SC, serif'}}>{product.name}</ProductTitle>
                                    <ProductDesc style={{fontFamily: 'Gruppo, cursive'}}>{product.desc}</ProductDesc>
                                    <ProductPrice style={{fontFamily: 'Electrolize, sans-serif'}}>{product.price}</ProductPrice>
                                    <ProductButton style={{fontFamily: 'Cabin Sketch, cursive'}}>{product.button}</ProductButton>
                                </ProductInfo>
                            </ProductCard>
                        )
                    })}
                </ProductWrapper>
            </ProductsContainer>
        </div>
    )
}

export default Products
