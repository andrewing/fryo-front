import useSWR from 'swr'
import { fetcher } from '../../../../util/helper/fetcher'
import DeliveryChoice from './DeliveryChoice'
import { Alert, Skeleton } from "@material-ui/lab"
import { Divider } from '@material-ui/core'
import { useEffect } from 'react'

const DeliveryChoices = ({ setters, getters }) => {
  const { data: deliveryChoices, error: errDeliveryChoice, isValidating } = useSWR('/api/deliveries', fetcher)
  const { setDeliveryFee, setDeliveryMethod, setAllInputInPageValid } = setters
  const { deliveryMethod } = getters

  useEffect(() => {
    if (!deliveryMethod)
      setAllInputInPageValid({
        message: "Please choose a delivery method!",
        isValid: false
      })
    else
      setAllInputInPageValid({
        message: "Thank you for choosing!",
        isValid: true
      })
  }, [deliveryMethod])

  return (
    <div>
      {
        !isValidating ?
          (deliveryChoices?.map(item =>
            <DeliveryChoice
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              helperText={item.helpertext}
              setDeliveryFee={setDeliveryFee}
              setDeliveryMethod={setDeliveryMethod}
              deliveryMethod={deliveryMethod}
            />
          ) || "")
          :
          (
            <React.Fragment>
              <Skeleton height={60} style={{ width: "100%" }} animation="wave" />
              <Skeleton height={60} style={{ width: "100%" }} animation="wave" />
            </React.Fragment>
          )
      }
      <Divider style={!deliveryMethod?.price ? { display: "none" } : { margin: "20px 0px" }} />
      <Alert severity="info" style={!deliveryMethod?.price ? { display: "none" } : {}}>
        Delivery fee: ₱{deliveryMethod?.price}
      </Alert>
    </div>
  )
}

export default DeliveryChoices