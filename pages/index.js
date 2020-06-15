import Head from 'next/head'
import moment from 'moment'
import { Typography } from 'antd'
import Information from '../components/home/Information'

const { Title } = Typography

const Home = ({page}) => {
  return (
    <div>
      <Information/>
    </div>
  )
}

// export async function getStaticProps() {
//   const deliveryTime = await fetch("http://localhost:1337/delivery-time").then(res => res.json())
//   const cutOffTime = await fetch("http://localhost:1337/cut-off-time").then(res => res.json())
//   const stringDeliveryTime = deliveryTime ? `every ${deliveryTime?.day}, ${moment(deliveryTime?.from, "HH:mm:ss.SSS").format("hh:mma")} to ${moment(deliveryTime?.to, "HH:mm:ss.SSS").format("hh:mma")}` : ``
//   const stringCutOffTime = cutOffTime ? `every ${cutOffTime?.day}, ${moment(cutOffTime?.time, "HH:mm:ss.SSS").format("hh:mma")}` : ``
//   return {
//     props: {
//       stringDeliveryTime,
//       stringCutOffTime
//     }
//   }
// }

export default Home