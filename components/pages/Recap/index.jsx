import Title from "../../common/Title"
import Info from "./Info"
import Orders from "./Orders"
import { Button, CircularProgress } from "@material-ui/core"
import { fetcher } from "../../../util/helper/fetcher"
import useSWR from "swr"
import { orderToString } from "../../../util/helper/orderToString"
import { useState } from "react"

const Recap = ({ setters, getters, products }) => {
  const { name, contactNumber, address, order, totalFee, orderFee, deliveryFee, deliveryMethod } = getters
  const { data, error } = useSWR('/api/base-url', fetcher)
  const [isLoading, setLoading] = useState(false)

  return (
    <div style={{ maxWidth: "700px", width: "100%" }}>
      <Title text="recap" />
      <Info name={name} contactNumber={contactNumber} address={address} />
      <Orders order={order} totalFee={totalFee} orderFee={orderFee} deliveryFee={deliveryFee} />
      <div style={{
        margin: "10px auto",
        padding: "0px 17.5px"
      }}>
        <form action="https://formsubmit.co/the.fryo.ph@gmail.com" method="POST">
          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="contact number" value={contactNumber} />
          <input type="hidden" name="address" value={address} />
          <input type="hidden" name="delivery method" value={`${deliveryMethod.name}(${deliveryMethod.helperText})`} />
          <input type="hidden" name="order" value={orderToString(order)} />
          <input type="hidden" name="total fee" value={totalFee} />
          <input type="hidden" name="_next" value={`${data?.baseUrl}thank-you`} />
          <input type="hidden" name="_subject" value="New submission!" />
          <input type="text" name="_honey" style={{ display: "none " }} />
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="box" />
          <Button
            className=""
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "#254B7E",
              color: "white",
            }}
            variant="contained"
            type="submit"
            onClick={() => {
              localStorage.setItem("name", name)
              localStorage.setItem("contactNumber", contactNumber)
              setLoading(true)
            }}
          >
            {isLoading
              ?
              <CircularProgress style={{color: "white"}} size={25} />
              :
              "check out"
            }
          </Button>
        </form>
      </div>
      <div style={{ height: "100px" }} />

    </div>
  )
}

export default Recap