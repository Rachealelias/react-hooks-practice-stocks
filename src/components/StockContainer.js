import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleAdd}) {

  const displayStocks = stocks.map((stock) => <Stock key={stock.id} 
  name={stock.name} ticker={stock.ticker} price={stock.price} handleClick={handleAdd} stock={stock}/>)


  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}


export default StockContainer;