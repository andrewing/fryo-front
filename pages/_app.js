import { useState } from "react"
import Head from 'next/head'
import FormProgressBar from "../components/common/FormProgressBar"
import '../styles.css'
import 'antd/dist/antd.css';
import NavButton from "../components/common/NavButton";

export default function MyApp({ Component, pageProps }) {
  const [page, setPage] = useState(0)
  return (
    <React.Fragment>
      <Head>
        <title>fry.o</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <FormProgressBar page={page} total={5} />
      <Component {...pageProps} />
      <div style={{position: "absolute", width: "100%"}}>
        <NavButton page={page} setPage={setPage} total={5} />
      </div>
    </React.Fragment>
  )
}