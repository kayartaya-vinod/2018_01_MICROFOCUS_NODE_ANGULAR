import 'bootstrap-loader';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppComponent } from './components/my-app.component';
import { AppHeaderComponent } from './components/app-header.component';
import { AppFooterComponent } from './components/app-footer.component';
import { ViewContactComponent } from './components/view-contact.component';
import { TitlePipe } from './pipes/title.pipe';
import { AgePipe } from './pipes/age.pipe';
import { ContactListComponent } from './components/contact-list.component';
import { ContactService } from './service/contact-service';
import { HttpModule } from '@angular/http';
import { routesConfig } from './routes-config';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditContactComponent } from './components/edit-contact.component';
import { AddContactComponent } from './components/add-contact.component';

@NgModule({
    // all components, directives, pipes will be mentioned here
    declarations: [
        MyAppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        ViewContactComponent,
        TitlePipe,
        AgePipe,
        ContactListComponent,
        EditContactComponent,
        AddContactComponent
    ],

    // all modules that this module depends on will be mentioned here
    imports: [BrowserModule, HttpModule, FormsModule, 
        RouterModule.forRoot(routesConfig, { useHash: true })],

    // all injectables (service classes) will be listed here.
    providers: [ContactService],

    // mostly one component being used in the index.html is listed here
    bootstrap: [MyAppComponent]
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);