import { Router } from 'express'
import { fetchRespositories, filterRepositories, asCarousel } from './lib.js'

export const routes = Router()

routes.get('/', async (_, response) => {
  const output = await fetchRespositories()
    .then(filterRepositories)
    .then(asCarousel)

  return response.status(200).json(output)
})
