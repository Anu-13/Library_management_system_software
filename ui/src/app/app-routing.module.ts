import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddAdminsComponent } from './add-admin/add-admin.component';
import { BookComponent } from './book/book.component';
import { LoanComponent } from './loan/loan.component';
import { StudentComponent } from './student/student.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { HomeComponent } from './home/home.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AddStudentsComponent } from './add-students/add-students.component';

const routes: Routes = [
{
path: '',
component: HomeComponent,
},
{
path: 'add-books',
component: AddBooksComponent,
},
{
  path: 'add-loans',
  component: AddLoansComponent,
},
{
  path: 'add-students',
  component: AddStudentsComponent,
},
{
  path : 'books',
  component : BookComponent,
},
{
  path : 'admins',
  component : AdminComponent
},
{
  path : 'add-admin',
  component : AddAdminsComponent
},
{
  path : 'students',
  component : StudentComponent
},
{
  path : 'loans',
  component : LoanComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
