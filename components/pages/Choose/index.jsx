import Title from "./Title"
import Choices from "./Choices"
const Choose = ({products, getters, setters}) => {
  return (
    <div style={{maxWidth:"750px", width: "90%"}}>
      <Title />
      <Choices products={products} getters={getters} setters={setters} /> 
    </div>
  )
}

export default Choose