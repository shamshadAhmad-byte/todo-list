import { DataPass } from "./PropUse";
import { Error } from "./errorMessage";
import { FoodItem } from "./foodItem";
import {useState} from "react";
export function UseMap(){
    // let foodItem=['Dal','green vegetable','Salad','Roti','Milk'];
    let [foodItem,setFoodItems]=useState([]);
    let [textToShow,setTextState]=useState();
    // console.log(`Current value of textState: ${textToShow}`);

    const handleOnKeyDown=(event)=>{
        if(event.key==='Enter'){
            let newFoodItem=event.target.value;
            event.target.value="";
            let newItems=[...foodItem,newFoodItem];
            console.log("Food value entered is "+newFoodItem);
            setFoodItems(newItems);
        }
        
        // setTextState(event.target.value);
    };
    
    return (
        <div className="container1">
            <h1 className="food-heading">Healthy Food </h1>
            <FoodItem handleOnKeyDown={handleOnKeyDown}></FoodItem>
            <Error items={foodItem}></Error>
            <p>{textToShow}</p>
            <DataPass items={foodItem}></DataPass>
        </div>
    );
} 