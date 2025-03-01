import {createStatefulContext} from "../../utils/createStatefulContext"
import React, {PropsWithChildren, useEffect, useState} from "react"
import {ConfigAccordion} from "./ConfigAccordion"

export const useConfigNavigationHook = () => {
  const [sections, setSections] = useState([] as string[])
  const [activeSection, setActiveSection] = useState<string>()

  /**
   * Registers a new section if it is not already present in the sections list.
   */
  const registerSection = (section: string) => {
    setSections((x) => {
      if (x.includes(section)) {
        console.error(`Cannot add section "${section}" multiple times.`)
        return x
      }

      return [...x, section]
    })
    setActiveSection((activeSection) => activeSection ?? section)
  }

  /**
   * Toggles section visibilities. If the section being toggled is the active
   * section, closes that section. Otherwise, opens the desired section and
   * closes the active one.
   */
  const setActive = (section: string) => {
    if (!sections.includes(section)) {
      console.error(`Cannot toggle visibility for section "${section}", does not exist.`)
      return
    }

    setActiveSection(section)
  }

  return {
    setActiveSection: setActive,
    registerSection,
    activeSection,
    sections,
  }
}

const [useConfigNavigation, ConfigNavigationProvider] = createStatefulContext(useConfigNavigationHook)

export const ConfigNavigation = ({children}: PropsWithChildren) => {
  return (
    <ConfigNavigationProvider>
      <div className="h-[75vh] sm:h-[60vh] rounded-lg flex flex-col shadow-lg w-full sm:w-80">{children}</div>
    </ConfigNavigationProvider>
  )
}

type ConfigSectionProps = PropsWithChildren & {
  description: string
  title: string
}

const ConfigSection = ({children, title, description}: ConfigSectionProps) => {
  const navigation = useConfigNavigation()

  useEffect(() => {
    navigation.registerSection(title)
  }, [])

  const isOpen = navigation.activeSection === title

  const onToggleVisibility = () => {
    navigation.setActiveSection(title)
  }

  return (
    <ConfigAccordion
      {...{
        onToggleVisibility,
        description,
        isOpen,
        title,
      }}
    >
      {children}
    </ConfigAccordion>
  )
}

ConfigNavigation.Section = ConfigSection
