import React, { useState, useEffect } from "react";
import "./index.css";
const Home = () => {
  const [Fromdate, setFromdate] = useState("");
  const [Todate, setTodate] = useState("");
  const [Pagesize, setPagesize] = useState("");
  const [Page, setPage] = useState("");
  const [data, setData] = useState([]);

  const [xAxis, setXaxis] = useState([]);
  const [yAxis, setYaxis] = useState([]);
  
  const handleFromdate = (e) => {
    setFromdate(e.target.value);
  };

  const handleTodate = (e) => {
    setTodate(e.target.value);
  };

  const handlePagesize = (e) => {
    setPagesize(e.target.value);
  };

  const handlePage = (e) => {
    setPage(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://api.stackexchange.com/2.2/tags?page=${Page}&pagesize=${Pagesize}&fromdate=${Fromdate}&todate=${Todate}&order=desc&sort=popular&site=stackoverflow`
    )
      .then((res) => res.json())
      .then((result) => setData(result))
      .then(()=>{
        setXaxis([]);
      })
      .then(()=>{
        setYaxis([]);
      })
      .catch((error) => console.log(error.message));
      
  }, [Page, Pagesize, Fromdate, Todate]);

  if(data.items !== undefined){
    data.items.map((item)=>{
        xAxis.push(item.name)
        yAxis.push(item.count)
    })
}        
console.log(xAxis," ",yAxis)

  return (
    <div className="mainContainer">
      <div className="inputContainer input-group">
        <input
          className="form-control m-1"
          type="date"
          value={Fromdate}
          placeholder="Fromdate"
          onChange={handleFromdate}
        />
        <input
          className="form-control m-1"
          type="date"
          value={Todate}
          placeholder="Todate"
          onChange={handleTodate}
        />
        <input
          className="form-control m-1"
          type="text"
          value={Pagesize}
          placeholder="Pagesize"
          onChange={handlePagesize}
        />
        <input
          className="form-control m-1"
          type="text"
          value={Page}
          placeholder="Page"
          onChange={handlePage}
        />
      </div>
    </div>
  );
};

export default Home;
