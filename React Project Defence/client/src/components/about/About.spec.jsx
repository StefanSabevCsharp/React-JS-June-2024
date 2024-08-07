import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import About from "./About";


describe("Rendering the About component", () => {
    it("should render the About component", () => {
        render(<About/>);
        screen.debug();
    });
});