import {useGoogleAnalytics} from "./useGoogleAnalytics"
import {renderHook} from "@testing-library/react"
import {useLocation} from "@docusaurus/router"
import ReactGA from "react-ga4"

jest.mock("@docusaurus/router")
jest.mock("react-ga4")

describe("useGoogleAnalytics", () => {
  const route = "/test-route"
  const title = "Test Page"

  beforeEach(() => {
    ;(useLocation as jest.Mock).mockReturnValue({
      pathname: route,
    })

    renderHook(() => useGoogleAnalytics(title))
  })

  it("should send a pageview event to Google Analytics", () => {
    expect(ReactGA.send).toHaveBeenCalledWith({
      hitType: "pageview",
      page: route,
      title,
    })
  })
})
