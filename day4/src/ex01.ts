import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'bootstrap-loader';

@Component({
    selector: 'my-app',
    template: `<h1 class='well'>{{message}}</h1>
    <author></author>
    <box></box>
    <box></box>
    <box></box>`
})
class HelloWorldComponent {
    private message: string = 'Hello, world!';
}

@Component({
    selector: 'author',
    template: `<div class='alert alert-info'>
        <p>Name: {{name}}</p>
        <p>Email: {{email}}</p>
    </div>`
})
class AuthorComponent implements OnInit {
    private name: string;
    private email: string;

    ngOnInit(): void {
        this.name = 'Vinod';
        this.email = 'vinod@vinod.co';
    }
}

@Component({
    selector: 'box',
    template: `<div class='box'></div>`,
    styles: [
        `div.box {
            display: inline-block;
            width: 150px;
            height: 150px;
            border: 3px solid red;
        }`
    ]
})
class BoxComponent { }

@NgModule({
    declarations: [BoxComponent],
    exports: [BoxComponent]
})
class WidgetsModule { }




@NgModule({
    // components, directives, pipes
    declarations: [HelloWorldComponent, AuthorComponent],
    // injectables (services) 
    providers: [],
    // other modules that this one depends on
    imports: [BrowserModule, WidgetsModule],
    // one or components that are used in the index.html
    bootstrap: [HelloWorldComponent]
})
class MyModule { }

platformBrowserDynamic().bootstrapModule(MyModule);