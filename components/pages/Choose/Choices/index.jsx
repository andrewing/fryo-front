import { Paper, Grid } from "@material-ui/core"
import styles from "./index.module.css"
import Choice from "./Choice"
import { useEffect } from "react"

const Choices = ({ products, getters, setters }) => {
  const { setAllInputInPageValid } = setters
  const { order } = getters

  useEffect(() => {
    let sum = 0
    let isEmpty = false
    for (const key in order) {
      isEmpty = order[key].qty === ""
      sum += order[key].qty
    }

    if (sum === 0) {
      setAllInputInPageValid({
        message: "Please choose a fry.o!",
        isValid: false
      })
    }else if(isEmpty){
      setAllInputInPageValid({
        message: "Please don't leave any fields blank!",
        isValid: false
      })
    }else{
      setAllInputInPageValid({
        message: "Thank you for choosing a fry.o",
        isValid: true
      })
    }
  }, [order])

  return (
    <div style={{ width: "100%" }}>
      <Paper elevation={3} className={styles.container} >
        <Grid container spacing={2} justify="center" >
          {
            products?.filter(item=>item.available).map(item =>
              <Choice
                name={item.name}
                key={item.id}
                id={item._id}
                available={item.available}
                price={item?.price}
                link={item?.link}
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