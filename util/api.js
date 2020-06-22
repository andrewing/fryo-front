export const BASE_URL = process.env.BASE_URL ?? "localhost:1337"
export const FRONT_BASE_URL = process.env.FRONT_BASE_URL ?? "localhost:3000"

export const request = (path, options={}) => {
  return fetch(`${BASE_URL}${path}`, options)
    .then(r=>r.json())
    .then(json=> ({
      statusCode: 200,
      json
    }))
    .catch(err=>({
      statusCode: 500,
      json: {message: err}
    }))
}