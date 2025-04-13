import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { describe, it, expect } from "vitest";
import { User } from "./user"

describe("User", () => {
    it("should render the user", () => {
        const mockUser = {
            avatar_url: "https://avatars.githubusercontent.com/u/1234567?v=4",
            name: "Higor Santanna",
            bio: "Mascote oficial do GitHub"
        }

        render(<User {...mockUser}/>)

        const image = screen.getByAltText("Imagem do usuário")
        const name = screen.getByText("Higor Santanna")
        const bio = screen.getByText("Mascote oficial do GitHub")

        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute("src", mockUser.avatar_url)
        expect(name).toBeInTheDocument()
        expect(bio).toBeInTheDocument()
    })
})