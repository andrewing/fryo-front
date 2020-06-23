import { useState, useEffect } from "react"
import Head from 'next/head'
import FormProgressBar from "../components/common/FormProgressBar"
import '../styles.css'
import NavButton from "../components/common/NavButton";
import { pages } from "../components/pages"
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const [page, setPage] = useState(0)
  const [allInputInPageValid, setAllInputInPageValid] = useState({ message: "", isValid: true })
  const [isOpenSnackbar, setOpenSnackbar] = useState(false)
  const router = useRouter()

  let mappedProducts = {}
  const { products } = pageProps
  products?.forEach(item => {
    mappedProducts = {
      ...mappedProducts,
      [item.id]: {
        id: item.id,
        link: item.link,
        name: item.name,
        price: item.price,
        qty: 0
      }
    }
  })

  

  const [order, setOrder] = useState(mappedProducts)
  const [deliveryMethod, setDeliveryMethod] = useState(null)
  const [orderFee, setOrderFee] = useState(0)
  const [deliveryFee, setDeliveryFee] = useState(0)
  const [totalFee, setTotalFee] = useState(0)
  const [name, setName] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [address, setAddress] = useState("")

  useEffect(()=>{
    setContactNumber(localStorage.getItem("contactNumber") || "")
    setName(localStorage.getItem("name") || "")
  }, [])

  useEffect(() => {
    setTotalFee(orderFee + deliveryFee)
  }, [orderFee, deliveryFee])

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false)
  }

  return (
    <React.Fragment>
      <Head>
        <title>fry.o</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="fryo" />
        <meta name="author" content="Andrew Ing" />
        <meta name="keywords" content="fryo" />
        <link rel="icon" href="/fry.o blue.png" />
        <link rel="apple-touch-icon" href="/fry.o blue.png" />
      </Head>
      <FormProgressBar page={page} total={pages().length} />
      <Component
        {...pageProps}
        page={page}
        setters={{
          setOrder,
          setTotalFee,
          setName,
          setContactNumber,
          setAddress,
          setDeliveryMethod,
          setOrderFee,
          setDeliveryFee,
          setAllInputInPageValid,
          setOpenSnackbar,
          setPage
        }}
        getters={{
          order,
          totalFee,
          name,
          contactNumber,
          address,
          deliveryMethod,
          orderFee,
          deliveryFee,
          allInputInPageValid,
          isOpenSnackbar,
          page
        }}
      />
      
      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={allInputInPageValid.isValid ? "success" : "error"}>
          {allInputInPageValid.message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  )
}