import { AppComponent } from "./appComponent.js";
import { ChildOneComponent } from "./components/childOneComponent.js";

export class AppModule {
    static defineElements() {
        window.customElements.define("app-root", AppComponent);
        window.customElements.define("child-one", ChildOneComponent);
    }
}
