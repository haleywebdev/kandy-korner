import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/products")
                .then(res => res.json())
                .then((productsArray) => {
                    setProducts(productsArray)
                })
        },
        []
        // if you remove this array, this useEffect will now react with ANY state change and will result in another
        // infinite loop!! 
        // if you put the "products" argument in this dependency array, you will also end up in an infinite loop!!
        // be careful :)
    )

    

    return (
        <>
        <center><h2>All Available Candy</h2>
            {
                products.map(
                    (product) => {
                        return <div key={`product--${product.id}`}>{product.candy}

                        </div>
                    }
                )
            }</center>
        </>
            )
}

