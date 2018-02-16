import React from 'react';
import Item from '../Item/Item';

const list = (props) => {
    const allItem = [];

    for(let index in props.items){
        allItem.push({
            id: props.items[index].id,
            name: props.items[index].name,
            description: props.items[index].description,
            image : props.items[index].image,
            nonVeg: props.items[index].nonVeg,
            spicy: props.items[index].spicy
        })
    }
    const listOutput = allItem.map(list => {
        // console.log('o/p', list);
        return (
            <Item 
                key = {list.id}
                item = {list}
            />
        )
    })
    // console.log('items',props);
    return (
        <div>
            {listOutput}
        </div>
    )
};

export default list;