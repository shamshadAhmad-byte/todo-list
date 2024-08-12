import { useState } from "react";
import { Item } from "./item";
export function DataPass({items}){
    // let foodItem=['Dal','green vegetable','Salad','Roti','Milk'];
    let [activeItems,setActiveItems]=useState([]);
    let onBuyButton=(item,event)=>{
        let newItems=[...activeItems,item];
        setActiveItems(newItems);
    }
    return(
        <>
        <ul className="list-group">
            {items.map(item=>(
               <Item key={item} foodItem={item}
               bought={activeItems.includes(item)}
                handleBuyButtonClicked={(event)=>onBuyButton(item,event)}></Item>
            ))} 
        </ul>
        </>
    );
}