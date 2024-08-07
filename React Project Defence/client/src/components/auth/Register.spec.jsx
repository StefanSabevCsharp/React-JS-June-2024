import { describe, it } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import Register from "./Register"
import Login from "./Login"
import { MemoryRouter, Route, Routes } from "react-router-dom"


describe("Register", () => {
    it("renders Register component", () => {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        )
        expect(screen.getByText("Register new account")).toBeInTheDocument()
    })
    it("renders email input field", () => {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        )
        const emailInput = screen.getByLabelText(/Email Address/i);
        expect(emailInput).toBeInTheDocument();
    });

    it("renders password input field", () => {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        )
        screen.debug();
        const passwordInput = document.getElementById("password");
        expect(passwordInput).toBeInTheDocument();

    });
    it("renders repeat password input field", () => {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        )
        const repeatPasswordInput = screen.getByLabelText(/Repeat Password/i);
        expect(repeatPasswordInput).toBeInTheDocument();
    });
    it("renders submit button", () => {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        )
        const submitButton = screen.getByRole("button", { name: /Sign in/i });
        expect(submitButton).toBeInTheDocument();
    });
    it("renders 'Already a member?' text", () => {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        )
        const alreadyMemberText = screen.getByText(/Already a member?/i);
        expect(alreadyMemberText).toBeInTheDocument();
    });
    it("clicking sign in link should navigate to login page", async () => {
        render(
            <MemoryRouter initialEntries={['/register']}>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </MemoryRouter>
        );

        const signInLink = screen.getByText(/Sign in here/i);
        expect(signInLink).toBeInTheDocument();
        fireEvent.click(signInLink);
        const loginText = await screen.findByText(/Sign in to your account/i);
        expect(loginText).toBeInTheDocument();
    });
});
