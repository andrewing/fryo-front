export const BASE_URL = process.env.BASE_URL ?? "localhost:1337"

export const request = (path, options={}) => fetch(`${BASE_URL}${path}`, options)