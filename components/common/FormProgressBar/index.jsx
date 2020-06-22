import { useState } from "react"

const FormProgressBar = ({ page, total }) => {
  (page, total)
  return (
    <div style={{
      position: "fixed",
      top: 0,
      height: "5px",
      width: `${page/(total-1) < 1 ? page / (total-1) * 100 : 100}%`,
      backgroundColor: page+1 === total ? "#4f7942": "#254b7e",
      transitionDuration: "0.5s",
      transitionProperty: "width",
      transitionTimingFunction: "ease"
    }}>

    </div>
  )
}

export default FormProgressBar