import {createStatefulContext} from "./createStatefulContext.tsx"
import {renderHook, act} from "@testing-library/react"
import React from "react"

const useCounter = () => {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(count + 1)
  return {count, increment}
}

describe("createStatefulContext", () => {
  let result: any

  beforeEach(() => {
    const [useCounterContext, CounterProvider] = createStatefulContext(useCounter)

    const wrapper = ({children}: {children: React.ReactNode}) => <CounterProvider>{children}</CounterProvider>

    result = renderHook(() => useCounterContext(), {wrapper}).result
  })

  it("should provide context value", () => {
    expect(result.current.count).toBe(0)
  })

  it("should update context value", () => {
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })
})
