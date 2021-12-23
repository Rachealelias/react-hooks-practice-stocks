import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortWith, setSortWith] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("Tech");

  useEffect(() => {
    fetch("http://localhost:3001/stocks") 
    .then((r) => r.json())
    .then((data) => {
      setStocks(data)
    }) 
    .catch((err) => {
      alert(err)
    })
  }, [])

  const handleAdd = (stock) => {
    setPortfolio(currentStocks => [...currentStocks, stock])
  }

  const handleRemove = (stockObj) => {
    // setPortfolio(portfolio => )
    setPortfolio((portfolio) => portfolio.filter((stock) => stock.id !== stockObj.id))
  }

  const sortStocks = [...stocks].sort((stock1, stock2) => {
    if (sortWith === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name);
    }else {
      return stock1.price - stock2.price;
    }
  })

  const filteredStocks = sortStocks.filter(
    (stock) => stock.type === filterBy
  );

  return (
    <div>
      <SearchBar 
      sortWith={sortWith}
      onChangeSort={setSortWith}
      filterBy={filterBy}
        onChangeFilter={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} handleAdd={handleAdd} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} handleRemove={handleRemove}/>
        </div>
      </div>
    </div>
  );
}
export default MainContainer;
