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
    )


    return (
        <>
            {
                products.map(
                    (product) => {
                        return <ul key={`product--${product.id}`}>{product.candy}</ul>
                    }
                )
            }
        </>
    )
}