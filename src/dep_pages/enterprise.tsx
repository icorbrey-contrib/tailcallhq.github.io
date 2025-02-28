import {useGoogleAnalytics} from "../utils/hooks/useGoogleAnalytics"
import {PageDescription, PageTitle} from "../constants/titles"
import EnterprisePage from "../components/enterprise"
import Layout from "@theme/Layout"
import React from "react"

const Enterprise = () => {
  useGoogleAnalytics("Enterprise Page")

  return (
    <Layout title={PageTitle.ENTERPRISE} description={PageDescription.ENTERPRISE}>
      <EnterprisePage />
    </Layout>
  )
}

export default Enterprise
