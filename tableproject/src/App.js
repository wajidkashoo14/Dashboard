import "./App.css";
import Table from "./Components/Table";
import Button from "./Components/Button";
import { GoSettings } from "react-icons/go";
function App() {
  return (
    <div className="container">
      <div className="input-div">
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2021-06-01"
          max="2021-06-31"
          className="date"
        />
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
      <Table />
    </div>
  );
}

export default App;
