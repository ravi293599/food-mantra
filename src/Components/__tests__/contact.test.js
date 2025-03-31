import { render,screen } from "@testing-library/react"
import Contact from "../../Pages/Contact"
import '@testing-library/jest-dom'

describe("Contact Us page test cases",()=>{
    it("should load the contact page", () =>{
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    it("should load button inside form", ()=>{
        render(<Contact/>);
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
    })
})