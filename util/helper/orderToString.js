export const orderToString = order => {
  let str = "║"
  for(const key in order){
    if(order[key].qty)
      str += `${order[key].name}: x${order[key].qty} ║`
  }
  return str
}