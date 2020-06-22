import styles from "../index.module.css"
import { processLinkGdrive } from "../../../../util/helper/gdrive"

const Order = ({ link, name, price, qty }) => {
  return (
    <div className={styles.order}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          src={processLinkGdrive(link)}
          style={{
            height: "64px",
            width: "64px",
          }}
        />
        <div className={styles.orderDetails}>
          <div
            className="open-sans"
            style={{
              fontSize: "17px"
            }}
          >
            {name}
          </div>
          <div
            className="open-sans-light"
            style={{
              fontSize: "14px",
              color: "gray"
            }}
          >
            quantity: {qty}
          </div>
        </div>
      </div>
      <div>
        <div
          className="open-sans-light"
          style={{
            float: "right",
            fontSize: "14px",
          }}
        >
          ₱{price*qty}
        </div>
      </div>
    </div>
  )
}
export default Order