import { Card } from "antd"
import { Paper } from "@material-ui/core"
import DeliveryChoices from "./DeliveryChoices"
import style from "./index.module.css"
import { useEffect } from "react"

const Delivery = ({ setters, getters }) => {
  return (
    <React.Fragment>
      <div style={{ height: "20vh", width: "100%" }} />
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <Paper elevation={3} className={style.container}>
          <div
            className="open-sans"
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#333333",
            }}
          >
            Delivery Method:
        </div>
          <DeliveryChoices setters={setters} getters={getters} />
        </Paper>
      </div>
    </React.Fragment>
  )
}

export default Delivery