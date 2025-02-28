import {useGoogleAnalytics} from "../utils/hooks/useGoogleAnalytics"
import {PageDescription, PageTitle} from "../constants/titles"
import HomePage from "../components/home"
import Layout from "@theme/Layout"
import React from "react"

const Home = () => {
  const isDevelopment = process.env.NODE_ENV === "development"

  useGoogleAnalytics("Home Page")

  return (
    <Layout title={PageTitle.HOME} description={PageDescription.HOME}>
      <HomePage />
      {!isDevelopment && (
        <img
          style={{height: 0, width: 0}}
          referrerPolicy="no-referrer-when-downgrade"
          src="https://static.scarf.sh/a.png?x-pxid=45ec365f-ab8a-4848-a6a9-bd4ffecfe72e"
          alt="pixel"
        />
      )}
    </Layout>
  )
}

export default Home
