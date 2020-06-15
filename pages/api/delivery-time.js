import {request} from "../../util/api"

export default async (req, res) => {
  await request(`delivery-time`)
    .then(response => response.json())
    .then(json=> {
      res.statusCode = 200
      res.json(json)
    })
    .catch(err=>{
      res.statusCode = 500
      res.json({message: err})
    })
}