import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )


    return (
        <>
            {
                customers.map(
                    (customer) => {
                        return <ul key={`customer--${customer.id}`}>{customer.name}</ul>
                    }
                )
            }
        </>
    )
}