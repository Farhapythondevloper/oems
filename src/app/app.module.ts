import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, } from '@angular/material/button';
import { MatListModule, } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { AdminsideComponent } from './components/admin/adminside/adminside.component';
import { UserdashboardComponent } from './components/user/userdashboard/userdashboard.component';
import { UsersideComponent } from './components/user/userside/userside.component';
import { AddCategoryComponent } from './components/admin/category/add-category/add-category.component';
import { ViewCategoryComponent } from './components/admin/category/view-category/view-category.component';
import { UpdateCategoryComponent } from './components/admin/category/update-category/update-category.component';
import { AdminWelcomeComponent } from './components/admin/admin-welcome/admin-welcome.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AllQuizesComponent } from './components/admin/category/all-quizes/all-quizes.component';
import { AddQuizesComponent } from './components/admin/category/add-quizes/add-quizes.component';
import { ViewQuestionsComponent } from './components/admin/category/view-questions/view-questions.component';
import { AddQuestionComponent } from './components/admin/category/add-questions/add-questions.component';
import { UpdateQuizComponent } from './components/admin/category/update-quiz/update-quiz.component';
import { UpdateQuestionComponent } from './components/admin/category/update-question/update-question.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { UserWelcomPageComponent } from './components/user/user-welcom-page/user-welcom-page.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { AuthinterceptorInterceptor } from './services/interceptor/authinterceptor.interceptor';
import { LoadquizesComponent } from './components/user/loadquizes/loadquizes.component';
import { InstructionsComponent } from './components/user/instructions/instructions.component';
import { SatrtExamComponent } from './components/user/satrt-exam/satrt-exam.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AdmindashboardComponent,
    AdminsideComponent,
    UserdashboardComponent,
    UsersideComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    UpdateCategoryComponent,
    AdminWelcomeComponent,
    AdminProfileComponent,
    AllQuizesComponent,
    AddQuizesComponent,
    ViewQuestionsComponent,
    AddQuestionComponent,
    UpdateQuizComponent,
    UpdateQuestionComponent,
    UserDashboardComponent,
    UserWelcomPageComponent,
    UserProfileComponent,
    LoadquizesComponent,
    InstructionsComponent,
    SatrtExamComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatProgressSpinnerModule


  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthinterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
