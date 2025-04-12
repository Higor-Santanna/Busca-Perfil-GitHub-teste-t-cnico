import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { Search } from "./search"

describe("Search component", () => {
  it("chama onChange com o valor digitado", async () => {
    const mockOnChange = vi.fn()
    render(<Search onChange={mockOnChange} />)

    const input = screen.getByPlaceholderText("Digite um usuário do Git")
    await userEvent.type(input, "searchTeste")

    expect(mockOnChange).toHaveBeenCalledTimes("searchTeste".length)
    expect(mockOnChange).toHaveBeenLastCalledWith("searchTeste")
  })
})
