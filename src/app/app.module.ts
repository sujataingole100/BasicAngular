import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { VariablesComponent } from './components/variables/variables.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { TwoWayNSingleBindingComponent } from './components/two-way-nsingle-binding/two-way-nsingle-binding.component';
import { IfdirectiveExampleComponent } from './components/ifdirective-example/ifdirective-example.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { PipingComponent } from './components/piping/piping.component';
import { HttpClientApiComponent } from './components/http-client-api/http-client-api.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { FormComponent } from './components/form/form.component';
import { NgClassPresentationComponent } from './components/ng-class-presentation/ng-class-presentation.component';
import { ReusablecomponentComponent } from './components/reusablecomponent/reusablecomponent.component';
import { ReusableBtnComponent } from './components/reusable-btn/reusable-btn.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TodaAppComponent } from './components/toda-app/toda-app.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { HighlightDirective } from './directive/highlight.directive';
import { AdminaccessDirective } from './directive/adminaccess.directive';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { CustomInterceptor } from './services/custom.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent,
    VariablesComponent,
    DirectiveComponent,
    TwoWayNSingleBindingComponent,
    IfdirectiveExampleComponent,
    NgforComponent,
    NgClassComponent,
    NgStyleComponent,
    PipingComponent,
    HttpClientApiComponent,
    FormValidationComponent,
    FormComponent,
    NgClassPresentationComponent,
    ReusablecomponentComponent,
    ReusableBtnComponent,
    ReactiveFormsComponent,
    TodaAppComponent,
    HighlightDirective,
    AdminaccessDirective,
    LoginComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, CalendarModule, BrowserAnimationsModule, ColorPickerModule,DropdownModule, RouterModule],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:CustomInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
