import {useLocation} from "@docusaurus/router"
import {useEffect} from "react"
import ReactGA from "react-ga4"

export const useGoogleAnalytics = (title: string) => {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({
      page: location.pathname,
      hitType: "pageview",
      title,
    })
  }, [])
}
