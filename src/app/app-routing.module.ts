import { Component, NgModule } from '@angular/core';
import { flush } from '@angular/core/testing';
import { NgSelectOption } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientApiComponent } from './components/http-client-api/http-client-api.component';
import { IfdirectiveExampleComponent } from './components/ifdirective-example/ifdirective-example.component';
import { LoginComponent } from './components/login/login.component';
import { NgClassPresentationComponent } from './components/ng-class-presentation/ng-class-presentation.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { PipingComponent } from './components/piping/piping.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { TodaAppComponent } from './components/toda-app/toda-app.component';
import { TwoWayNSingleBindingComponent } from './components/two-way-nsingle-binding/two-way-nsingle-binding.component';
import { VariablesComponent } from './components/variables/variables.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'addStudent',
        component: AddStudentComponent
      },
      {
        path: 'edit-student',
        component: EditStudentComponent
      },
      {
        path: 'studentList',
        component: StudentListComponent
      },
      {
        path: 'variables',
        component: VariablesComponent
      },
      {
        path: 'directive',
        component: DirectiveComponent
      },
      {
        path: 'binding',
        component: TwoWayNSingleBindingComponent
      },
      {
        path: 'ifdirective',
        component: IfdirectiveExampleComponent
      },
      {
        path: 'ngfordirective',
        component: NgforComponent
      },
      {
        path: 'ng-Class',
        component: NgClassComponent
      },
      {
        path: 'ngStyle',
        component: NgStyleComponent
      },
      {
        path: 'piping',
        component: PipingComponent
      },
      {
        path: 'httpClientApi',
        component: HttpClientApiComponent
      },
      {
        path: 'formvalidation',
        component: FormValidationComponent
      },
      {
        path: 'form/:formid',
        component: FormComponent
      }
      ,
      {
        path: 'ngClassPresentation',
        component: NgClassPresentationComponent
      },
      {
        path: 'reactiveForms',
        component: ReactiveFormsComponent
      },
      {
        path: 'todo',
        component: TodaAppComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
