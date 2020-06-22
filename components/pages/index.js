import Information from "./First/Information"
import Delivery from "./Delivery"
import Choose from "./Choose"
import CustomerInfo from "./CustomerInfo"
import Recap from "./Recap"

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
  },
  {
    name: "Customer Info",
    component: <CustomerInfo {...props} />
  },
  {
    name: "Receipt",
    component: <Recap {...props} />
  }
]
