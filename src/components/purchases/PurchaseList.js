import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from "react-router-dom"

export const PurchaseList = () => {
    const [purchases, setPurchases] = useState([])
    const history = useHistory()


    useEffect(
        () => {
            fetch("http://localhost:8088/purchases?_expand=customer")
                .then(res => res.json())
                .then((purchasesArray) => {
                    setPurchases(purchasesArray)
                })
        },
        []
        // if you remove this array, this useEffect will now react with ANY state change and will result in another
        // infinite loop!! 
        // if you put the "products" argument in this dependency array, you will also end up in an infinite loop!!
        // be careful :)
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

            <div>
                <button onClick={() => history.push("/purchases/create")}>Place A New Order</button>
            </div>

            <h3>Pending Orders</h3>

            {
                purchases.map(
                    (purchase) => {
                        return <div key={`purchase--${purchase.id}`}><Link to={`/purchases/${purchase.id}`}>{purchase.customer.name}</Link>

                        </div>
                    }
                )
            }
        </>
    )
}
