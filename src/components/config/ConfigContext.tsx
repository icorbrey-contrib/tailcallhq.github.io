import {createStatefulContext} from "@site/src/utils/createStatefulContext"

export const useConfigHook = () => ({})

export const [useConfig, ConfigProvider] = createStatefulContext(useConfigHook)
