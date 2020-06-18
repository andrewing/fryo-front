import { useState } from "react"
import Head from 'next/head'
import FormProgressBar from "../components/common/FormProgressBar"
import '../styles.css'
import NavButton from "../components/common/NavButton";

export default function MyApp({ Component, pageProps}) {
  const [page, setPage] = useState(0)

  let mappedProducts = {}
  const {products} = pageProps
  products?.forEach(item=>{
    mappedProducts = {
      ...mappedProducts, 
      [item.id]: {
        id: item.id,
        name: item.name,
        price: item.price,
        qty:0
      }
    }
  })

  const [order, setOrder] = useState(mappedProducts)
  const [deliveryMethod, setDeliveryMethod] = useState(null)
  const [totalFee, setTotalFee] = useState(0)
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  return (
    <React.Fragment>
      <Head>
        <title>fry.o</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <FormProgressBar page={page} total={5} />
      <Component
        {...pageProps}
        page={page}
        setters={{ setOrder, setTotalFee, setName, setContact, setAddress, setDeliveryMethod }}
        getters={{ order, totalFee, name, contact, address, deliveryMethod}}
      />
      <div style={{ position: "fixed", width: "100%", bottom: "30px" }}>
        <NavButton totalFee={totalFee} page={page} setPage={setPage} total={5} />
      </div>
    </React.Fragment>
  )
}