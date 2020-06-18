import { useEffect, useState } from 'react'
import useSWR from 'swr'
import moment from 'moment'
import { fetcher } from '../../../../util/helper/fetcher'
import styles from "./index.module.css"
import { Skeleton } from '@material-ui/lab'

const Information = () => {
  const { data: deliveryTime, error: errDelivery } = useSWR('/api/delivery-time', fetcher)
  const [stringDeliveryTime, setStringDeliveryTime] = useState("")
  useEffect(() => {
    if (deliveryTime)
      setStringDeliveryTime(
        deliveryTime ?
          `every 
        ${deliveryTime?.day}, 
        ${moment(deliveryTime?.from, "HH:mm:ss.SSS").format("hh:mma")} 
        to 
        ${moment(deliveryTime?.to, "HH:mm:ss.SSS").format("hh:mma")}`
          :
          ``
      )
  }, [deliveryTime])

  const { data: cutOffTime, error: errCutOff } = useSWR('/api/cut-off-time', fetcher)
  const [stringCutOffTime, setStringCutOffTime] = useState("")
  useEffect(() => {
    if (cutOffTime)
      setStringCutOffTime(
        cutOffTime ?
          `every 
        ${cutOffTime?.day}, 
        ${moment(cutOffTime?.time, "HH:mm:ss.SSS").format("hh:mma")}`
          :
          ``
      )
  }, [cutOffTime])

  return (
    <React.Fragment>
      <div style={{height: "25vh", width: "100%"}}/>
      <div>
        <div className={`raleway-medium ${styles.title}`}>
          the fry.o
      </div>
        <div className={`quicksand-light ${styles.tagline}`}>
          milk's favorite cookies
      </div>
        <div className={`quicksand-light ${styles.tagline}`}>
          —made better
      </div>
        <div style={{ height: "24px" }}></div>
        {
          stringDeliveryTime ?
            <div className={`open-sans ${styles.deliverycutoff}`}>
              delivery: {stringDeliveryTime}
            </div>
            :
            <Skeleton height={24} animation="wave" />
        }
        {
          stringCutOffTime ?
            <div className={`open-sans ${styles.deliverycutoff}`}>
              cut-off: {stringCutOffTime}
            </div>
            :
            <Skeleton height={24} animation="wave" />
        }
      </div>
    </React.Fragment>
  )
}

export default Information