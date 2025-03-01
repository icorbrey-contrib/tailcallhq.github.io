import {render, fireEvent} from "@testing-library/react"
import {ConfigAccordion} from "./ConfigAccordion"
import React from "react"

describe("Accordion", () => {
  let onToggleVisibility: jest.Mock

  const renderAccordion = (isOpen: boolean = true) => {
    return render(
      <ConfigAccordion title="Test Title" description="Test Description" {...{isOpen, onToggleVisibility}}>
        Content
      </ConfigAccordion>,
    )
  }

  beforeEach(() => {
    onToggleVisibility = jest.fn()
  })

  it("renders the title", () => {
    const result = renderAccordion()
    expect(result.getByText("Test Title")).toBeInTheDocument()
  })

  it("renders the description", () => {
    const result = renderAccordion()
    expect(result.getByText("Test Description")).toBeInTheDocument()
  })

  it("shows content when open", () => {
    const result = renderAccordion()
    expect(result.queryByText("Content")).toHaveClass("flex-grow")
  })

  it("hides content when closed", () => {
    const result = renderAccordion(false)
    expect(result.queryByText("Content")).not.toHaveClass("flex-grow")
  })

  it("toggles visibility when pressed", () => {
    const result = renderAccordion(false)
    const button = result.getByText("Test Title")

    expect(onToggleVisibility).not.toHaveBeenCalled()

    fireEvent.click(button)
    expect(onToggleVisibility).toHaveBeenCalled()
  })
})
