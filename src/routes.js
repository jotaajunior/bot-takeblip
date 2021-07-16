import { Router } from 'express'
import {
  fetchRespositories,
  filterRepositories,
  convertRepositories,
} from './lib.js'

export const routes = Router()

routes.get('/', async (_, response) => {
  const repositories = await fetchRespositories()
    .then(filterRepositories)
    .then(convertRepositories)

  return response.status(200).json(repositories)
})
