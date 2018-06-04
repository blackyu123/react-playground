import { NewHtmlRequest, NewRequest, URLForEndpoint } from "./requests"

const ERROR_ACCESS_DENIED = {
  type:    "unauthorized",
  message: "Access is denied",
}

const ERROR_INVALID_RESPONSE = {
  type:    "invalid_response",
  message: "Couldn't understand server response.",
}

const ERROR_SERVER_UNREACHABLE = {
  type:    "could_not_contact_server",
  message: "Couldn't contact the server. Please check your internet connection and try again.",
}

const SERVER_FAILURE_JSON = {
  type:    "could_not_contact_server",
  message: "Couldn't contact the server. Please check your internet connection and try again.",
}

export default class DataSource {

  static get shared() {
    if (DataSource.instance === null || DataSource.instance === undefined) {
      DataSource.instance = new DataSource()
    }
    return DataSource.instance
  }

  async parseResponseAndHandleErrors(response) {
    // If not successful, throw JSON as response
    let responseStatusNumber = Number(response.status)
    if (responseStatusNumber >= 400 && responseStatusNumber <= 599) {
      throw await response.json()
    }

    // Parse response
    let json
    try {
      json = await response.json()
    } catch (err) {
      throw ERROR_INVALID_RESPONSE
    }

    // Handle empty JSON with prejudice
    if (json === null || json === undefined) {
      throw ERROR_INVALID_RESPONSE
    }

    return json
  }

  async getRedditThreads(endpoint = null) {
    // Build request

    const url = URLForEndpoint(`${endpoint}.json`)

    // Fetch
    let response
    try {
      response = await fetch(url)
    } catch (err) {
      throw ERROR_SERVER_UNREACHABLE
    }

    // Handle errors and return response
    return await this.parseResponseAndHandleErrors(response)
  }
}
