import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=desc")
                .then(res => res.json())
                .then((productsArray) => {
                    setProducts(productsArray)
                })
        },
        []
    )

    // Use the _expand query string parameter feature of json-server to embed the product type object in the product object when you query the API.
    // Update the product list to replace the product type number with the actual name of the product type.
    // See if you can use the _sort query string parameter feature of json-server to group the list of products by type.

    // return (
    //     <>
    //         {
    //             products.map(
    //                 (product) => {
    //                     return <ul key={`product--${product.id}`}>{product.candy}</ul>
    //                 }
    //             )
    //         }
    //     </>
    // )

    return (
        <>
            {
                products.map(
                    (product) => {
                        return <div key={`product--${product.productType.id}`}>{product.productType.type} 

                        </div>
                    }
                )
            }
        </>
    )
}
