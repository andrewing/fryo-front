import { Paper, Grid } from "@material-ui/core"
import useSWR from 'swr'
import styles from "./index.module.css"
import { fetcher } from "../../../../util/helper/fetcher"
import { useEffect } from "react"
import Choice from "./Choice"

const Choices = ({ products, getters, setters }) => {
  return (
    <div style={{ width: "100%" }}>
      <Paper elevation={3} className={styles.container} >
        <Grid container spacing={2} justify="center" >
          {
            products?.map(item =>
              <Choice
                name={item.name}
                key={item.id}
                id={item._id}
                price={item?.price}
                imgPath={item?.picture?.[0]?.url}
                getters={getters}
                setters={setters}
              />
            )
          }
        </Grid>
      </Paper>
      <div style={{ height: "100px" }} />
    </div>
  )
}

export default Choices