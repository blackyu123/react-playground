import "babel-polyfill"
import React from "react"
import { render } from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./app"

document.addEventListener("DOMContentLoaded", () => {
  render(
    <App/>,
    document.getElementById("root"),
  )
})

