export function FoodItem({handleOnKeyDown}){
    return(
        <input type="text" placeholder="Enter food item here" className="fooditem"
            onKeyDown={handleOnKeyDown}
        />
    )
}
//onKeyDown
//onChange
//onClick