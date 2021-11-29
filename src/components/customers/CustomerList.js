import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [purchases, setPurchases] = useState([])
    const [totalPurchasesMessage, updateMessage] = useState("")
    

    useEffect(
        () => {
            fetch("http://localhost:8088/purchases?_expand=customer&_expand=productLocation")
                .then(res => res.json())
                .then((purchaseObj) => {
                    setPurchases(purchaseObj)
                })
        },
        []
    )

    useEffect(
        () => {
            console.log("Customer state changed")
            if (purchases.length === 1) {
                updateMessage("1")
            }
            else {
                updateMessage(`You have ${purchases.length} purchases`)
            }
        },
        [customers]
    )


    return (
        <><center>

<div>{totalPurchasesMessage}</div>

            {
                purchases.map(
                    (purchase) => {
                        return <ul key={`purchase--${purchase.id}`}>{purchase.customer.name}</ul>
                    }
                )
            }</center>
        </>
    )
}