import React, { useState } from 'react';

// macPros and newCars numbers in thousands:

const Hooksclick1 = () => {

const [macPros, setMacPros] = useState(0);
const [newCars, setNewCars] = useState(0);




   
    const handleAddMacPros = () => setMacPros(macPros + 4)
    const handleAddNewCars = () => setNewCars(newCars + 25)

    const handleDeductMacPros = () => setMacPros(macPros -4)
    const handleDeductNewCars = () => setNewCars(newCars - 25)

    return (
        <div>
            <p>Purchased {macPros} thousand dollars worth of new computers</p>
            <p>Purchased {newCars} thousand dollars worth of new vehicles</p>
            <div>
                <button onClick={handleAddMacPros}>Add New Computer Purchase</button>
                <button onClick={handleAddNewCars}>Add New Car Purchases</button>
                <button onClick={handleDeductMacPros}>Deduct Computer Purchase</button>
                <button onClick={handleDeductNewCars}>Deduct New Car Purchases</button>
            </div>
        </div>
    );

}
export default Hooksclick1;