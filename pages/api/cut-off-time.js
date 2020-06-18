import { request } from "../../util/api"

export default async (req, res) => {
  const {statusCode, json} = await request(`cut-off-time`)
  res.statusCode = statusCode
  res.json(json)
}