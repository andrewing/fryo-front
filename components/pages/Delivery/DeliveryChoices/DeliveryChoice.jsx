import style from "./DeliveryChoice.module.css"

const DeliveryChoice = ({ id, name, price, helperText, setDeliveryFee, setDeliveryMethod, deliveryMethod }) => {

  return (
    <div
      id={id}
      className={`${style.choice} ${id === deliveryMethod?.id && style.selected}`}
      onClick={() => {
        setDeliveryFee(price)
        setDeliveryMethod({id, name, price, helperText})
      }}
    >
      <div className={`${style.text} open-sans-light`}>
        {name}{helperText ? `(${helperText})` : ""}
      </div>
    </div>
  )
}

export default DeliveryChoice