import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";

describe("Rendering Login component", () => {
    it("should render the Login component", () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        screen.debug();
    });
    it("should render the heading", () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        const heading = screen.getByText(/Sign in to your account/i);
        expect(heading).toBeInTheDocument();
    });
    it("should render the email input field", () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        const emailInput = screen.getByLabelText(/Email Address/i);
        expect(emailInput).toBeInTheDocument();
    });
    it("should render the password input field", () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        const passwordInput = screen.getByLabelText(/Password/i);
        expect(passwordInput).toBeInTheDocument();
    });
    it("should render the submit button", () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        const submitButton = screen.getByRole("button", {name: /Sign In/i});
        expect(submitButton).toBeInTheDocument();
    });
    it("should render the 'Not a member?' text", () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        const notMemberText = screen.getByText(/Not a member?/i);
        expect(notMemberText).toBeInTheDocument();
    });
    it("should render the 'Register' link", () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        const registerLink = screen.getByRole("link", {name: /Register/i});
        expect(registerLink).toBeInTheDocument();
    });
    it("should navigate to the register page when the 'Register' link is clicked", () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        const registerLink = screen.getByRole("link", {name: /Register/i});
        expect(registerLink).toBeInTheDocument();
        registerLink.click();
        const registerPage = screen.getByText(/Register/i);
        expect(registerPage).toBeInTheDocument();
    });
});