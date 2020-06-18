import { request } from "../../util/api"

export default async (req, res) => {
  const {statusCode, json} = await request(`products`)
  res.statusCode = statusCode
  res.json(json)
}