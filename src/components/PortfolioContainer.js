import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, handleRemove}) {
  const portfolioList = stocks.map((stock) => <Stock key={stock.id} name={stock.name} ticker={stock.ticker} 
  price={stock.price} stock={stock} handleClick={handleRemove}/>)

  return (
    <div>
      <h2>My Portfolio</h2>
      {
       portfolioList
      }
    </div>
  );
}

export default PortfolioContainer;