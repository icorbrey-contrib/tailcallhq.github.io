import {useConfigNavigationHook} from "./ConfigNavigation"
import {renderHook, act} from "@testing-library/react"

describe(".useConfigNavigation()", () => {
  it("should register a new section", () => {
    const {result} = renderHook(() => useConfigNavigationHook())

    act(() => {
      result.current.registerSection("Section 1")
    })

    expect(result.current.sections).toStrictEqual(["Section 1"])
    expect(result.current.activeSection).toBe("Section 1")
  })

  it("should not register the same section twice", () => {
    const {result} = renderHook(() => useConfigNavigationHook())

    act(() => {
      result.current.registerSection("Section 1")
      result.current.registerSection("Section 1")
    })

    expect(result.current.sections).toStrictEqual(["Section 1"])
    expect(result.current.activeSection).toBe("Section 1")
  })

  it("should toggle section visibility", () => {
    const {result} = renderHook(() => useConfigNavigationHook())

    act(() => {
      result.current.registerSection("Section 1")
    })
    act(() => {
      result.current.registerSection("Section 2")
    })

    expect(result.current.activeSection).toBe("Section 1")

    act(() => {
      result.current.setActiveSection("Section 1")
    })

    expect(result.current.activeSection).toBe("Section 1")

    act(() => {
      result.current.setActiveSection("Section 2")
    })

    expect(result.current.activeSection).toBe("Section 2")
  })

  it("should not toggle visibility for unregistered section", () => {
    const {result} = renderHook(() => useConfigNavigationHook())

    act(() => {
      result.current.setActiveSection("Section 1")
    })

    expect(result.current.activeSection).toBeUndefined()
  })
})
