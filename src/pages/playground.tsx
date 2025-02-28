import {useGoogleAnalytics} from "../utils/hooks/useGoogleAnalytics"
import {PageDescription, PageTitle} from "../constants/titles"
import PlaygroundPage from "../components/playground"
import Layout from "@theme/Layout"
import React from "react"

const Playground = () => {
  useGoogleAnalytics("Playground Page")

  return (
    <Layout title={PageTitle.PLAYGROUND} description={PageDescription.PLAYGROUND}>
      <PlaygroundPage />
    </Layout>
  )
}

export default Playground
