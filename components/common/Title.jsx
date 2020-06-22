const Title = ({text, fontSize = "48px"}) => {
  return (
    <div
      className="raleway-medium"
      style={{
        fontSize,
        color: "#254b7e",
        lineHeight: "54px",
        fontWeight: 500
      }}
    >
      {text}
    </div>
  )
}

export default Title