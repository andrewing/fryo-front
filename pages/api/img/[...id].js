import { request } from "../../../util/api"

export default async (req, res) => {
  const { id } = req.query
  res.statusCode = 200
  res.json({path: `${process.env.BASE_URL}${id[0]}/${id[1]}`})
}