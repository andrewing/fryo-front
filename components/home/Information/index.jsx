import { useEffect, useState } from 'react'
import useSWR from 'swr'
import moment from 'moment'
import { BASE_URL } from '../../../util/api'
import { fetcher } from '../../../util/helper/fetcher'

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
    <div
      className="container"
      style={{
        height: "88vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div
          className="raleway"
          style={{
            fontSize: "48px",
            color: "#254b7e",
            lineHeight: "54px",
            fontWeight: 500
          }}
        >
          the fry.o
        </div>
        <div
          className="quicksand"
          style={{
            marginLeft: "60px",
            fontSize: "24px",
            color: "#ab3b30",
            lineHeight: "34px"
          }}
        >
          milk's favorite cookies
        </div>
        <div
          className="quicksand"
          style={{
            marginLeft: "60px",
            fontSize: "24px",
            color: "#ab3b30",
            lineHeight: "34px"
          }}
        >
          —made better
        </div>
        <div style={{ height: "24px" }}></div>
        <div
          className="open-sans"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "black",
            lineHeight: "24px"
          }}
        >
          delivery: {stringDeliveryTime ?? ""}
        </div>
        <div
          className="open-sans"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "black",
            lineHeight: "24px"
          }}
        >
          cut-off: {stringCutOffTime ?? ""}
        </div>
      </div>
    </div>
  )
}

export default Information