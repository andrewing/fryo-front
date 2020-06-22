import { Paper, List, ListItem, Divider } from "@material-ui/core"
import Title from "../../../common/Title"
import styles from "../index.module.css"
import Order from "./Order"

const listOrder = order => {
  let orders = []
  for (const key in order) {
    if (order[key].qty)
      orders = [
        ...orders,
        (
          <React.Fragment>
            <ListItem>
              <Order {...order[key]} />
            </ListItem>
            <Divider />
          </React.Fragment>
        )
      ]
  }
  return orders
}

const Orders = ({ order, orderFee, totalFee, deliveryFee }) => {

  return (
    <Paper elevation={3} className={styles.container} >
      <Title text="your order:" fontSize="24px" />
      <List style={{
        width: "100%"
      }}>
        {listOrder(order)}
        {
          deliveryFee ?
            <React.Fragment>
              <ListItem>
                <div
                  className="open-sans-light"
                  style={{
                    width: "100%",
                    textAlign: "right",
                    fontSize: "14px"
                  }}
                >
                  subtotal: ₱{orderFee}
                </div>
              </ListItem>
              <ListItem>
                <div
                  className="open-sans-light"
                  style={{
                    width: "100%",
                    textAlign: "right",
                    fontSize: "14px"
                  }}
                >
                  (delivery fee) +₱{deliveryFee}
                </div>
              </ListItem>
              <Divider />
            </React.Fragment>
            :
            ""
        }

        <ListItem>

          <div
            className="open-sans"
            style={{
              width: "100%",
              textAlign: "right",
              fontSize: "16px",
            }}
          >
            total: ₱{totalFee}
          </div>
        </ListItem>
      </List>

    </Paper>
  )
}

export default Orders