import { Paper } from "@material-ui/core"
import Title from "../../common/Title"
import styles from "./index.module.css"

const Info = ({name, contactNumber, address}) => {
  return (
    <Paper elevation={3} className={styles.container} >
      <div>
        <Title text="your details:" fontSize="24px" />
        <div className="open-sans-light">
          <b>name:</b> {name}
        </div>
        <div className="open-sans-light">
          <b>contact:</b> {contactNumber}
        </div>
        {
          address &&
          <div className="open-sans-light">
            <b>address:</b> {address}
          </div>
        }
      </div>
    </Paper>
  )

}

export default Info