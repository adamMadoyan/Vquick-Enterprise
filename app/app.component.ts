import {Component} from "angular2/core";
import {LoginComponent} from "./login/login.component";

@Component({
    selector: 'vquick-app',
    template: `<login></login>`,
    directives: [LoginComponent]
})
export class AppComponent {
}