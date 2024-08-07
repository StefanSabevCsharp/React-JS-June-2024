import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import About from "./About";


describe("Rendering the About component", () => {
    it("should render the About component", () => {
        render(<About/>);
        screen.debug();
    });
});

describe("Checking the content of the About component", () => {
    it("should render the heading", () => {
        render(<About/>);
        const heading = screen.getByText(/About Us/i);
        expect(heading).toBeInTheDocument();
    });

    it("should render the first paragraph", () => {
        render(<About/>);
        const firstParagraph = screen.getByText(/Our journey began with a simple idea/i);
        expect(firstParagraph).toBeInTheDocument();
    });

    it("should render the second paragraph", () => {
        render(<About/>);
        const secondParagraph = screen.getByText(/Dedicated to excellence, we strive to exceed expectations/i);
        expect(secondParagraph).toBeInTheDocument();
    });
    it("should render the image", () => {
        render(<About/>);
        const image = screen.getByAltText(/Company Image/i);
        expect(image).toBeInTheDocument();
    });
});