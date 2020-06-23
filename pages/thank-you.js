const { default: Title } = require("../components/common/Title")

const ThankYou = ({setters, getters}) => {
  const {name} = getters
  return (
    <React.Fragment>
      <div style={{height: "8vh"}} />
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Title text={`thank you, ${name}!`} />
        <div>
          We are now processing your order. A confirmation text along with the payment instruction will be sent within 24 hours.
        </div>
      </div>
    </React.Fragment>
  )
}

export default ThankYou