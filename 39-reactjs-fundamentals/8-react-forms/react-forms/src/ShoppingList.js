import React, { useState } from 'react';
import Item from './Item';
import NewItemForm from './NewItemForm';

const ShoppingList = () => {
    const INITIAL_STATE = [
        {id: 1, name: 'Peaut Butter', quantity: 2},
        {id: 2, name: 'Whole Milk', quantity: 1}
    ]
    const [items, setItems] = useState(INITIAL_STATE);
    const addItem = (name, quantity) => {
        // setItems(items => [...items, {name:name, quantity:quantity}])
        setItems(items => [...items, {name, quantity}])
    }
    return (
        <div>
            <h3>Shopping List</h3>
            <NewItemForm addItem={addItem}/>
            <div>
                {items.map(({id, name, quantity}) => <Item id={id} name={name} quantity={quantity} />)}
            </div>
        </div>
    );
}

export default ShoppingList;