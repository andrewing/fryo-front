import { Paper, TextField } from "@material-ui/core"

const InputTemplate = ({label, placeholder, value, onChange}) => {
  const inputStyle = { width: "90%", padding: "25px", margin: "20px" }

  return (
    <Paper style={inputStyle} elevation={2} >
      <TextField
        style={{ width: "100%" }}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Paper>
  )
}

export default InputTemplate