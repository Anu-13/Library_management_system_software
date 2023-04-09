import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { LoanComponent } from './loan/loan.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AddAdminsComponent } from './add-admin/add-admin.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddStudentsComponent } from './add-students/add-students.component';
import { AddLoansComponent } from './add-loans/add-loans.component'

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AdminComponent,
    StudentComponent,
    LoanComponent,
    SidenavComponent,
    HomeComponent,
    AddAdminsComponent,
    AddBooksComponent,
    AddStudentsComponent,
    AddLoansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
