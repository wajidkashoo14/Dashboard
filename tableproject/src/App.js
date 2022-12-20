import "./App.css";
import Table from "./Components/Table";
import Button from "./Components/Button";
import { GoSettings } from "react-icons/go";
import { useState } from "react";
function App() {
  const [startDate, setStartDate] = useState("2021-06-01");
  const [endDate, setEndDate] = useState("2021-06-01");
  const [show, setShow] = useState(true);

  const handleChangeOne = (e) => {
    const inputOne = e.target.value;
    setStartDate(inputOne);
  };

  const handleChangeTwo = (e) => {
    const inputTwo = e.target.value;
    setEndDate(inputTwo);
  };

  const handleClick = () => {
    console.log("clicked");
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="container">
      <div className="input-div">
        <div className="input">
          <label for="html">From </label>
          <input
            type="date"
            id="start"
            name="trip-start"
            value={startDate}
            min="2021-06-01"
            max="2021-06-31"
            className="date"
            onChange={handleChangeOne}
          />
          <label for="html">To</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            value={endDate}
            min="2021-06-01"
            max="2021-06-31"
            className="date"
            onChange={handleChangeTwo}
          />
        </div>
        <div onClick={handleClick}>
          <button className="settingsbtn">
            <GoSettings className="icon" />
            Setings
          </button>
        </div>
      </div>
      {show && (
        <div className="btn-div-show">
          <Button>Date</Button>
          <Button>App</Button>
          <Button>Clicks</Button>
          <Button>Ad Requests</Button>
          <button className="normalbtn">Ad response</button>
          <button className="normalbtn">Impression</button>
          <Button>Revenue</Button>
          <Button>Fill Rate</Button>
          <Button>CTR</Button>
        </div>
      )}
      <Table startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default App;
