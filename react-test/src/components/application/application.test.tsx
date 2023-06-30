import { render, screen } from "@testing-library/react"
import { Application } from "./application";

describe("Application",()=>{
    test("renders correctly",()=>{
        render(<Application/>);
        const pageHeading=screen.getByRole('heading',{name:'Job Application Form'});
        expect(pageHeading).toBeInTheDocument();
        const sectionHeading=screen.getByRole('heading',{name:'Section 1'});
        expect(sectionHeading).toBeInTheDocument();
        const pageHeading1=screen.getByRole('heading',{level:1});
        expect(pageHeading1).toBeInTheDocument();
        const sectionHeading1=screen.getByRole('heading',{level:2});
        expect(sectionHeading1).toBeInTheDocument();
        const paragraphText=screen.getByText('All fields are mandatory');
        expect(paragraphText).toBeInTheDocument();
        const altText=screen.getByAltText('Image 1');
        expect(altText).toBeInTheDocument();
        const closeText=screen.getByTitle('close');
        expect(closeText).toBeInTheDocument();
        const nameElement=screen.getByRole("textbox",{name:"Name"});
        expect(nameElement).toBeInTheDocument();
        const nameElement2=screen.getByLabelText("Name",{selector:"input"});
        expect(nameElement2).toBeInTheDocument();
        const nameElement3=screen.getByPlaceholderText("fullname");
        expect(nameElement3).toBeInTheDocument();
        const nameElement4=screen.getByDisplayValue("Soumya");
        expect(nameElement4).toBeInTheDocument();
        const bioElement=screen.getByRole("textbox",{name:"Bio"});
        expect(bioElement).toBeInTheDocument();
        const jobLocationElement=screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();
        const termsElement=screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();
        const termsElement2=screen.getByLabelText("I agree to the terms and conditions");
        expect(termsElement2).toBeInTheDocument();
        const submitButtonElement=screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
        const customElement=screen.getByTestId("custom-element");
        expect(customElement).toBeInTheDocument();
    });
});