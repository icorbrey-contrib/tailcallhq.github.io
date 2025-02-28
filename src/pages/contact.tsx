import {useGoogleAnalytics} from "../utils/hooks/useGoogleAnalytics"
import {PageDescription, PageTitle} from "../constants/titles"
import ContactPage from "../components/contact"
import Layout from "@theme/Layout"
import React from "react"

const Contact = () => {
  useGoogleAnalytics("Contact Page")

  return (
    <Layout title={PageTitle.CONTACT} description={PageDescription.CONTACT}>
      <ContactPage />
    </Layout>
  )
}

export default Contact
