import axios from 'axios'

const USER = 'takenet'
const LANGUAGE = 'C#'
const MAX_REPOSITORIES = 5

const github = axios.create({
  baseURL: `https://api.github.com/users/`,
})

/**
 * The Takeblip repositories in Github
 *
 * @returns {array} The repositories
 */
export async function fetchRespositories() {
  const { data } = await github.get(
    `${USER}/repos`,

    /**
     * The Github API accept those query params to sort
     * the repositories by the date it was created.
     */

    {
      params: {
        sort: 'created',
        direction: 'asc',
      },
    }
  )

  return data
}

/**
 * Takes a list of repositories and return the 5 first
 * C# repositories
 *
 * @param {array} repositories The repositories
 */
export function filterRepositories(repositories) {
  return repositories
    .filter((repository) => repository.language === LANGUAGE)
    .slice(0, MAX_REPOSITORIES)
}

/**
 * Takes a list of repositories and return a list
 * containing only the necessary properties for the
 * TakeBlip chatbot
 *
 * @param {array} repositories The repositories
 */
export function convertRepositories(repositories) {
  return repositories.map((repository) => ({
    header: {
      type: 'application/vnd.lime.media-link+json',
      value: {
        title: repository.name,
        text: repository.description,
        type: 'image/png',
        uri: repository.owner.avatar_url,
        aspectRatio: '1:1',
      },
    },
  }))
}
