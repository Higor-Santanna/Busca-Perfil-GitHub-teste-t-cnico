import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { Button } from "./button"

describe("Button component", () => {
  it("chama onClick ao clicar", async () => {
    const mockOnClick = vi.fn()
    render(<Button onClick={mockOnClick} />)

    const button = screen.getByRole("button", { name: /Buscar usuário/i })
    await userEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
