// import React, { useState } from "react"
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

// export const PurchaseForm = () => {

//     const [purchase, updatePurchase] = useState({})
//     const [productLocations, updateProductLocations] = useState([])

//     const history = useHistory()

  

//     // this is the object we want to send to the api

//     const submitPurchase = (evt) => {
//         evt.preventDefault()
//         const newPurchase = {
//             "customerId": parseInt(localStorage.getItem("kandy_customer")),
//             "productId": purchase.productId,
//             "timestamp": Date.now()
//         }

//         const fetchOption = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newPurchase)
//         }

//         // when something new has been created in the API, we want to send the user immediately back to the purhases to see what has been added to the list.
//         // we use the history mechanism to programatically change it! 

//         return fetch("http://localhost:8088/purchases", fetchOption)
//             .then(() => {
//                 history.push("/purchases")
//             })
//     }

//     return (
//         <>
//             <form className="orderForm">
//                 <h2 className="orderForm__title">Place an Order</h2>

//                 <fieldset>
//                     <div className="form-group">
//                         <select value={purchase.productId}
//                             onChange={
//                                 (evt) => {
//                                     // you cannot directly modify state. you must make a copy of state using ...
//                                     const copy = { ...purchase }
//                                     copy.productId = evt.target.value
//                                     updatePurchase(copy)
//                                 }
//                             } >
//                             <option name="candyTypes">Choose A Gummy Candy...</option>
//                             <option name="fish">Swedish Fish</option>
//                             <option name="rings">Peach Rings</option>
//                             <option name="bears">Gummy Bears</option>
//                         </select>
//                     </div>
//                 </fieldset>

//                 <fieldset>
//                     <div className="form-group">

//                         <select value={purchase.productId}
//                             onChange={
//                                 (evt) => {
//                                     // you cannot directly modify state. you must make a copy of state using ...
//                                     const copy = { ...purchase }
//                                     copy.productId = evt.target.value
//                                     updatePurchase(copy)
//                                 }
//                             } >
//                             <option name="candyTypes">Choose A Chocolate Candy...</option>
//                             <option name="fish">Hershey Kisses</option>
//                             <option name="rings">Goo-Goo Clusters</option>
//                             <option name="bears">Cadbury Creme Eggs</option>
//                         </select>

//                     </div>
//                 </fieldset>

//                 <fieldset>
//                     <div className="form-group">
//                         <select value={purchase.productId}
//                             onChange={
//                                 (evt) => {
//                                     // you cannot directly modify state. you must make a copy of state using ...
//                                     const copy = { ...purchase }
//                                     copy.productId = evt.target.value
//                                     updatePurchase(copy)
//                                 }
//                             } >
//                             <option name="candyTypes">Choose A Sour Candy...</option>
//                             <option name="fish">Sour Patch Kids</option>
//                             <option name="rings">Sour Gummy Worms</option>
//                             <option name="bears">Warheads</option>
//                         </select>
//                     </div>
//                 </fieldset>

//                 <fieldset>
//                     <div className="form-group">
//                         <select value={purchase.productId}
//                             onChange={
//                                 (evt) => {
//                                     // you cannot directly modify state. you must make a copy of state using ...
//                                     const copy = { ...purchase }
//                                     copy.productnId = evt.target.value
//                                     updatePurchase(copy)
//                                 }
//                             } >
//                             <option name="candyTypes">Choose A Hard Candy...</option>
//                             <option name="fish">Jolly Ranchers</option>
//                             <option name="rings">Peppermints</option>
//                             <option name="bears">Werther's</option>
//                         </select>
//                     </div>
//                 </fieldset>

//                 <fieldset>
//                     <div className="form-group">
//                         <select value={purchase.productId}
//                             onChange={
//                                 (evt) => {
//                                     // you cannot directly modify state. you must make a copy of state using ...
//                                     const copy = { ...purchase }
//                                     copy.productId = evt.target.value
//                                     updatePurchase(copy)
//                                 }
//                             } >
//                             <option name="candyTypes">Choose A Gum Candy...</option>
//                             <option name="fish">Bazooka Bubblegum</option>
//                             <option name="rings">Double Bubble</option>
//                             <option name="bears">Blow Pops</option>
//                         </select>
//                     </div>
//                 </fieldset>

//                 <fieldset>
//                     <div className="form-group">
//                         <select value={purchase.productId}
//                             onChange={
//                                 (evt) => {
//                                     // you cannot directly modify state. you must make a copy of state using ...
//                                     const copy = { ...purchase }
//                                     copy.productId = evt.target.value
//                                     updatePurchase(copy)
//                                 }
//                             } >
//                             <option name="candyTypes">Choose A Fudge...</option>
//                             <option name="fish">Chocolate</option>
//                             <option name="rings">Salted Caramel</option>
//                             <option name="bears">Peanut Butter</option>
//                         </select>
//                     </div>
//                 </fieldset>

//                 <button className="btn btn-primary" onClick={submitPurchase}>
//                     Submit Your Order
//                 </button>
//             </form>
//         </>
//     )
// }
