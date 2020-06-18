import Information from "./First/Information"
import Delivery from "./Delivery"
import Choose from "./Choose"

export const pages = props => [
  {
    name: "Home",
    component: <Information {...props} />
  },
  {
    name: "Choose",
    component: <Choose {...props} />
  },
  {
    name: "Delivery",
    component: <Delivery {...props} />
  }
]
