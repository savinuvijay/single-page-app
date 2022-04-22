import { SampleDataService } from "../services/SampleDataService.js";

const childOneTemplate = document.createElement("template");
childOneTemplate.innerHTML = `
    <style>
        @import url('./src/components/childOneComponent.css')
    </style>
    <div class="child">
        <h2>Child One</h2>
    </div>
`;

export class ChildOneComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(childOneTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        this.getItems();
    }

    getItems() {
        let item = SampleDataService.getItem(1);
        console.log("Child One: ", item);
    }

    disconnectedCallback() {}
}
