import { SampleDataService } from "./services/SampleDataService.js";

const AppTemplate = document.createElement("template");
AppTemplate.innerHTML = `
    <style>
        @import url('./src/appComponent.css')
    </style>
    <div class="app-component">
        <h1>App Component</h1>
        <child-one></child-one>
    </div>
`;

export class AppComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(AppTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        this.AddItems();
    }

    AddItems() {
        SampleDataService.addItem({ id: 1, value: "Item 1" });
        SampleDataService.addItem({ id: 2, value: "Item 2" });
    }

    disconnectedCallback() {}
}
