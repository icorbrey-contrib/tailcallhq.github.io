import React, {PropsWithChildren, ReactElement} from "react"

type ContextProvider = (props: PropsWithChildren) => ReactElement
type ContextStateHook<T> = () => T
type UseContext<T> = () => T

export const createStatefulContext = function <T>(useContextState: ContextStateHook<T>) {
  const context = React.createContext({} as T)

  const useContext = () => React.useContext(context)
  const Provider = ({children}: PropsWithChildren) => {
    return <context.Provider value={useContextState()}>{children}</context.Provider>
  }

  return [useContext, Provider] as [UseContext<T>, ContextProvider]
}
