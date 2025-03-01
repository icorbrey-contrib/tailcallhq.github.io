import React, {PropsWithChildren} from "react"
import {InfoIcon} from "lucide-react"

export const ConfigTooltip = ({children}: PropsWithChildren) => (
  <div className="has-tooltip">
    <span className="tooltip rounded-xl shadow-xl p-4 bg-gray-200 mt-6 transition-opacity duration-300 text-content-small text-left max-w-96">
      {children}
    </span>
    <InfoIcon size={16} />
  </div>
)
