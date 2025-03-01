import {ConfigNavigation} from "./ConfigNavigation"
import CodeBlock from "@theme/CodeBlock"
import Section from "../shared/Section"
import React from "react"

export const ConfigPage = () => (
  <Section className="h-full flex-grow flex" innerClassName="flex flex-col">
    <h1 className="pb-8 pt-8 sm:pt-0">Configuration Generator</h1>
    <div className="flex-grow flex flex-col sm:flex-row justify-stretch gap-8">
      <ConfigNavigation>
        <ConfigNavigation.Section
          title="Server"
          description="Dictates how the server behaves and helps tune tailcall for all ingress requests. Features such as request batching, SSL, HTTP2 etc. can be configured here."
        >
          Kek
        </ConfigNavigation.Section>
        <ConfigNavigation.Section
          title="Upstream"
          description="Dictates how tailcall should handle upstream requests/responses. Tuning upstream can improve performance and reliability for connections."
        />
        <ConfigNavigation.Section title="Links" description="A list of all links in the schema." />
        <ConfigNavigation.Section title="Telemetry" description="Enable opentelemetry support" />
      </ConfigNavigation>
      <div className="flex-grow justify-stretch [&_>_div]:h-full [&_>_div_>_div:nth-child(2)]:h-full">
        <CodeBlock language="yaml">test: foo</CodeBlock>
      </div>
    </div>
  </Section>
)
