import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Error } from "./error";

describe('Error', async () => {
    it("should render the error", async () => {
        render(<Error />)

        const error = screen.getByText("Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente")

        expect(error).toBeInTheDocument();
    })
})
