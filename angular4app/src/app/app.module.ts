import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';






@NgModule({
  declarations: [
    AppComponent,
    ProfileHeaderComponent,
    ProjectComponentComponent,
    MainComponent,
    FormComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
