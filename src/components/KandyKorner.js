
// This is the main component.

import { LocationList } from "./locations/LocationsList"
import { ProductList } from "./products/ProductList"


export const KandyKorner = () => {

//Render the customer, employee list.
    return (

        <>
            <h1>Kandy Korner Candy Shop</h1>

            <h2>Location's List</h2>
            <LocationList />

            <h2>Product's List</h2>
            <ProductList />
            
        </>
    )
}