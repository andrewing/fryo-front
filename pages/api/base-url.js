import { FRONT_BASE_URL } from "../../util/api"

export default async (req, res) => {
  res.statusCode = 200
  res.json({baseUrl: FRONT_BASE_URL})
}