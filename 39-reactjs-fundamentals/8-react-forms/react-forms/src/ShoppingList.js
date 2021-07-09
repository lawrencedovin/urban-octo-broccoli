import React, { useState } from 'react';
import Item from './Item';
import NewItemForm from './NewItemForm';
import {v4 as uuid} from 'uuid';

const ShoppingList = () => {
    const INITIAL_STATE = [
        {id: uuid(), name: 'Peaut Butter', quantity: 2},
        {id: uuid(), name: 'Whole Milk', quantity: 1}
    ]
    const [items, setItems] = useState(INITIAL_STATE);
    const addItem = (newItem) => {
        // ...items saves previous items status and only adds new Item
        setItems(items => [...items, {id: uuid(), ...newItem}])
    }
    return (
        <div>
            <h3>Shopping List</h3>
            <NewItemForm addItem={addItem}/>
            <div>
                {items.map(({id, name, quantity}) => <Item id={id} name={name} quantity={quantity} key={id} />)}
            </div>
        </div>
    );
}

export default ShoppingList;