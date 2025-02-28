import {useGoogleAnalytics} from "../utils/hooks/useGoogleAnalytics"
import {PageDescription, PageTitle} from "../constants/titles"
import AboutPage from "../components/about"
import Layout from "@theme/Layout"
import React from "react"

const About = () => {
  useGoogleAnalytics("About Page")

  return (
    <Layout title={PageTitle.ABOUT} description={PageDescription.ABOUT}>
      <AboutPage />
    </Layout>
  )
}

export default About
