import { useEffect } from "react"
import { Grid, Paper } from "@material-ui/core"
import useSWR from "swr"
import { fetcher } from "../../../../util/helper/fetcher"
import { Skeleton } from "@material-ui/lab"
import styles from "./Choice.module.css"

const Choice = ({ id, name, price, imgPath, getters, setters }) => {
  const { data, error, isValidating } = useSWR(`/api/img${imgPath}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateOnReconnect: true
    })

  const {order, totalFee} = getters
  const {setOrder, setTotalFee} = setters
  
  useEffect(()=>{
    let sum = 0
    for(const key in order){
      const {price:p1, qty} = order[key]
      sum+=(p1*qty)
    }

    setTotalFee(sum)
  }, [order])

  return (
    <Grid item onClick={()=>{
      const newOrder = {
        ...order[id],
        qty: order[id].qty === 0 ? 1 : 0
      }
      setOrder({...order, [id]: newOrder})
    }}>
      {
        data ?
          <img src={data?.path} style={{ height: "205px", width: "205px" }} />
          :
          <Skeleton variant="rect" animation="wave" style={{ height: "205px", width: "205px" }} />
      }
      <Paper elevation={3} style={{ width: "100%" }}>
        <div className={`open-sans-light ${styles.choiceContainer}`}>
          <span>{name}</span>
          <span style={{float: "right"}}>₱{price}</span>
        </div>
      </Paper>
    </Grid>
  )
}

export default Choice