import "./App.css";
import Table from "./Components/Table";
import Button from "./Components/Button";
import { GoSettings } from "react-icons/go";
import { useState } from "react";
function App() {
  const [startDate, setStartDate] = useState("2021-06-01");
  const [endDate, setEndDate] = useState("2021-06-01");
  const handleChangeOne = (e) => {
    const inputOne = e.target.value;
    setStartDate(inputOne);
  };
  const handleChangeTwo = (e) => {
    const inputTwo = e.target.value;
    setEndDate(inputTwo);
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

        <Button className={"settingsbtn"}>
          <GoSettings className="icon" />
          Setings
        </Button>
      </div>
      <div className="btn-div">
        <Button>Date</Button>
        <Button>App</Button>
        <Button>Clicks</Button>
        <Button>Ad Requests</Button>
        <Button>Ad response</Button>
        <Button>Impression</Button>
        <Button>Revenue</Button>
        <Button>Fill Rate</Button>
        <Button>CTR</Button>
      </div>
      <Table startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default App;
