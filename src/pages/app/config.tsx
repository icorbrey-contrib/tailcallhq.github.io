import {useGoogleAnalytics} from "@site/src/utils/hooks/useGoogleAnalytics"
import {ConfigProvider} from "@site/src/components/config/ConfigContext"
import {PageDescription, PageTitle} from "@site/src/constants/titles"
import {ConfigPage} from "@site/src/components/config/ConfigPage"
import Layout from "@theme/Layout"
import React from "react"

const Config = () => {
  useGoogleAnalytics("Config Page")

  return (
    <Layout title={PageTitle.CONFIG} description={PageDescription.CONFIG}>
      <ConfigProvider>
        <ConfigPage />
      </ConfigProvider>
    </Layout>
  )
}

export default Config
