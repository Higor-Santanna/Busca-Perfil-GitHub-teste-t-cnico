import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { describe, it, expect } from "vitest";
import { Error } from "./error";

describe('Error', () => {
    it("should render the error", () => {
        render(<Error />)

        const errorFirstText = screen.getByText("Nenhum perfil foi encontrado com esse nome de usuário.")
        const errorSecondText = screen.getByText("Tente Novamente")

        expect(errorFirstText).toBeInTheDocument()
        expect(errorSecondText).toBeInTheDocument()
    })
})
