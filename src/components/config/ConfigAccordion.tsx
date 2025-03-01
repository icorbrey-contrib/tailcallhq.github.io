import React, {useRef, PropsWithChildren} from "react"
import {ConfigTooltip} from "./ConfigTooltip"
import {ChevronDown, ChevronUp} from "lucide-react"
import clsx from "clsx"

type AccordionProps = PropsWithChildren & {
  title: string
  description: string
  isOpen: boolean
  onToggleVisibility: () => void
}

export const ConfigAccordion = ({title, description, children, isOpen, onToggleVisibility}: AccordionProps) => {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <button onClick={onToggleVisibility} className="flex flex-row justify-between">
        <h2 className="flex flex-row m-0 text-title-tiny gap-1.5 items-baseline">
          {title}
          <ConfigTooltip>{description}</ConfigTooltip>
        </h2>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div
        className={clsx(
          "overflow-y-auto transition-all duration-150 ease-in-out h-full",
          isOpen ? "flex-grow max-h-full" : "flex-grow-[0.00001] max-h-0",
        )}
        ref={contentRef}
      >
        {children}
      </div>
    </>
  )
}
