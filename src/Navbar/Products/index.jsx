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
import { useStateValue } from '../../StateProvider';

const Products = ({heading,data}) => {  
    const [{basket}, dispatch] = useStateValue();
    return (
        <div>
            <ProductsContainer>
                <ProductsHeading style={{fontFamily: 'Staatliches, cursive'}}>{heading}</ProductsHeading>
                <ProductWrapper>
                    {data.map((product ,index) => {
                        console.log("this is the basket",basket);
                        const addToBasket = () => {
                            //dispatch the item into the data layer
                        dispatch({
                            type: 'ADD_TO_BASKET',
                            item:{
                                
                                title:product.name,
                                image:product.img,
                                price:product.price,
                                desc: product.desc
                            },
                    
                           
                        })
                    }
                        return(
                            <ProductCard key = {index}>
                                <ProductImg src= {product.img} alt={product.alt}/>
                                <ProductInfo>
                                    <ProductTitle style={{fontFamily: 'Mate SC, serif'}}>{product.name}</ProductTitle>
                                    <ProductDesc style={{fontFamily: 'Gruppo, cursive'}}>{product.desc}</ProductDesc>
                                    <ProductPrice style={{fontFamily: 'Electrolize, sans-serif'}}>{product.price}</ProductPrice>
                                    <ProductButton
                                     style={{fontFamily: 'Cabin Sketch, cursive'}}
                                     onClick={addToBasket}
                                     >{product.button}</ProductButton>
                                </ProductInfo>
                            </ProductCard>
                        );
                        })}
                </ProductWrapper>
            </ProductsContainer>
        </div>
    )
}

export default Products
