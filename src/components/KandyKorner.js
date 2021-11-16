
// This is the main component.

import { LocationList } from "./locations/LocationsList"


export const KandyKorner = () => {

//Render the customer, employee list.
    return (

        <>
            <h1>Kandy Korner Candy Shop</h1>

            <h2>Location's List</h2>
            <LocationList />
            
        </>
    )
}