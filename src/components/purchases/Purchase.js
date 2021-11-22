import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

export const Purchase = () => {
    const [purchase, assignPurchase] = useState({})  // State variable for current purchase object. Purchase is an empty object.
    // assignPurchase is a function

    const [customers, syncCustomers] = useState([])  // State variable for array of customers

    const { purchaseId } = useParams()  // Variable storing the route parameter

    const history = useHistory() // We can access and manipulate the current state of the browser history.
    // We can use this object to redirect the user to another page by calling history.push('/example-route')
    // history is a "prop" used to move from the current page to another one.


    // Fetch the individual purchase when the purchaseId route parameter value changes
    useEffect(
        () => {
            return fetch(`http://localhost:8088/purchases/${purchaseId}?_expand=customer&_expand=product`)
                .then(response => response.json())
                .then((purchasesArray) => {
                    assignPurchase(purchasesArray)
                })

        },
        [purchaseId]  // Above function runs when the value of purchaseId changes
    )

    // Fetch all customers
    useEffect(
        () => {
            fetch(`http://localhost:8088/customers`)
                .then(res => res.json()) // converting JSON to JS data structure
                .then((data) => {
                    syncCustomers(data)
                })
        },
        []  // Empty dependency array only reacts to JSX initial rendering.
    )

    // Function to invoke when a <link> customer is chosen from the list of current orders
    const assignCustomer = (evt) => {

        // Construct a new object to replace the existing one in the API
        const updatedPurchase = {
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            productId: purchase.productId,
            timestamp: Date.now()
        }

        // Perform the PUT HTTP request to replace the resource
        fetch(`http://localhost:8088/purchases/${purchaseId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPurchase)
        })
            .then(() => {
                history.push("/purchases")
            })
    }

    // return the candy the user has purchased in JSX

    return (
        <>
            <h2>Purchase Details</h2>
            <section className="purchase">
                <div className="customer_purchase">{purchase.customer?.name} purchased {purchase.productId}
                    </div>
            </section>
        </>
    )
}