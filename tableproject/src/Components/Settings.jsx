import React, { useState } from "react";
import Button from "./Button";
import styles from "./Styles/settings.module.css";

function Settings({ active, setActive }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      {active && (
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
          <div className={styles.btnsdiv}>
            <button
              className={styles.btnclose}
              onClick={() => {
                setActive(false);
              }}
            >
              close
            </button>
            <button className={styles.btnapply}>Apply Changes</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
