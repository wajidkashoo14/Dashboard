import React, { useState, useEffect } from "react";
import styles from "./Styles/table.module.css";

function Table() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03"
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => setItems(res))
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  console.log(items.data);
  function cal(a, b) {
    return (a / b) * 100;
  }
  return (
    <div className={styles.table}>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>App Name</th>
            <th>AD Request</th>
            <th>AD Response</th>
            <th>Impression</th>
            <th>Clicks</th>
            <th>Revenue</th>
            <th>Fill Rate</th>
            <th>CTR</th>
          </tr>
        </tbody>
        {items.data?.map((val, key) => {
          console.log((val.requests / val.responses) * 100);
          return (
            <tbody>
              <tr key={key}>
                <td key={key}>{val.date}</td>
                <td key={key}>{val.app_id}</td>
                <td key={key}>{val.requests}</td>
                <td key={key}>{val.responses}</td>
                <td key={key}>{val.impressions}</td>
                <td key={key}>{val.clicks}</td>
                <td key={key}>{val.revenue}</td>
                <td key={key}>{cal(val.requests, val.responses)}</td>
                <td key={key}>{cal(val.clicks, val.impressions)}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
