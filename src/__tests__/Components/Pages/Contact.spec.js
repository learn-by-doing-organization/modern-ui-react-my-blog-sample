import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { create } from 'react-test-renderer';

import Contact from "./../../../Components/Pages/Contact";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("Show the Contact Us page", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default title)", () => {
            const instance = create(<Contact />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    it("Show about page", () => {
        act(() => {
            render(<Contact />, container);
        });
        expect(container.querySelector("h1").textContent).toBe("Contact Project");
        expect(container.querySelector("p").textContent).toBe("In this page there are some contact to ask information or notify bug with the project.");
    });

    xit("Show form module to send message", () => {

    });

    xit("Form module cannot send if miss require fields", () => {

    });
});