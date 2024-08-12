export function Item({ foodItem, bought, handleBuyButtonClicked }) {
  // const handleBuyButtonClicked=(event)=>{
  //     console.log(event);
  //     console.log(`${foodItem} being bought`);
  // }
  return (
    <li key={foodItem} className="list-group-item kg-item">
      <span className={`kg-span ${bought && "active"}`}>{foodItem}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleBuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
}
