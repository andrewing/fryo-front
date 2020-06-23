import { useEffect, useState, useRef } from "react"
import { Grid, Paper, TextField } from "@material-ui/core"
import useSWR from "swr"
import { fetcher } from "../../../../util/helper/fetcher"
import { Skeleton } from "@material-ui/lab"
import styles from "./Choice.module.css"
import { processLinkGdrive } from "../../../../util/helper/gdrive"

const Choice = ({ id, name, price, link, getters, setters, available }) => {
  const [isImgLoading, setImgLoading] = useState(true)

  const choicePaper = useRef(null)

  const { order, orderFee } = getters
  const { setOrder, setOrderFee } = setters

  useEffect(() => {
    let sum = 0
    for (const key in order) {
      const { price: p1, qty } = order[key]
      sum += (p1 * qty)
    }

    setOrderFee(sum)
  }, [order])

  const handleClick = () => {
    const newOrder = {
      ...order[id],
      qty: order[id].qty === 0 ? 1 : 0
    }
    setOrder({ ...order, [id]: newOrder })
  }

  return (
    <Grid item>
      <div
        style={{
          height: "205px",
          width: "205px",
          overflow: "hidden"
        }}
      >
        <img
          src={processLinkGdrive(link)}
          onLoad={() => setImgLoading(false)}
          style={{
            height: "205px",
            width: "205px",
            display: isImgLoading && "none",
            cursor: available ? "pointer" : ""
          }}
          onClick={handleClick}
          onMouseDown={() => choicePaper.current.classList.add(styles.active)}
          onMouseUp={() => choicePaper.current.classList.remove(styles.active)}
          onMouseEnter={() => choicePaper.current.classList.add(styles.hover)}
          onMouseLeave={() => choicePaper.current.classList.remove(styles.hover)}
        />
        <Skeleton
          variant="rect"
          animation="wave"
          style={{
            height: "205px",
            width: "205px",
            display: !isImgLoading && "none"
          }}
        />
      </div>
      <Paper
        ref={choicePaper}
        elevation={3}
        className={`${styles.choice} ${(order[id].qty > 0 || order[id].qty === "") ? styles.selected : ""}`}
        style={{
          width: "100%",
          cursor: "pointer"
        }}
        onClick={handleClick}
      >
        <div className={`open-sans-light ${styles.choiceContainer}`}>
          <span>{name}</span>
          <span style={{ float: "right" }}>₱{price}</span>
        </div>
      </Paper>
      {
        order[id].qty > 0 || order[id].qty === ""
          ?
          <TextField
            className="open-sans-light"
            type="number"
            label="qty."
            style={{ width: "40px" }}
            size="small"
            value={order[id].qty}
            onChange={e => {
              if (e.target.value >= 1 || e.target.value === "") {
                const newOrder = {
                  ...order[id],
                  qty: e.target.value
                }
                setOrder({ ...order, [id]: newOrder })
              }
            }}
          />
          :
          <div style={{ height: "44px", width: "40px" }} />
      }
    </Grid>
  )
}

export default Choice