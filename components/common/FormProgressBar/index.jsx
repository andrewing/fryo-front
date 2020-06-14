import { useState } from "react"
import { Steps } from "antd"
const { Step } = Steps

const FormProgressBar = ({ page, total }) => {
  return (
    <div style={{
      height: "5px",
      width: `${page/total < 1 ? page / total * 100 : 100}%`,
      backgroundColor: "#254b7e",
      transitionDuration: "0.5s",
      transitionProperty: "width",
      transitionTimingFunction: "ease"
    }}>

    </div>
  )
}

export default FormProgressBar