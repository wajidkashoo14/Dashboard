import "./App.css";
import Table from "./Components/Table";
import { GoSettings } from "react-icons/go";
import { useState } from "react";
import Settings from "./Components/Settings";

function App() {
  const [startDate, setStartDate] = useState("2021-06-01");
  const [endDate, setEndDate] = useState("2021-06-01");
  const [active, setActive] = useState(true);

  const handleChangeOne = (e) => {
    const inputOne = e.target.value;
    setStartDate(inputOne);
  };

  const handleChangeTwo = (e) => {
    const inputTwo = e.target.value;
    setEndDate(inputTwo);
  };

  const handleClick = () => {
    setActive(true);
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
      <Settings active={active} setActive={setActive} />

      <Table startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default App;
