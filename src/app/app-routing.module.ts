import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './components/user/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewCategoryComponent } from './components/admin/category/view-category/view-category.component';
import { AddCategoryComponent } from './components/admin/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/admin/category/update-category/update-category.component';
import { AdminWelcomeComponent } from './components/admin/admin-welcome/admin-welcome.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AllQuizesComponent } from './components/admin/category/all-quizes/all-quizes.component';
import { AddQuizesComponent } from './components/admin/category/add-quizes/add-quizes.component';
import { ViewQuestionsComponent } from './components/admin/category/view-questions/view-questions.component';
import { AddQuestionComponent } from './components/admin/category/add-questions/add-questions.component';
import { UpdateQuizComponent } from './components/admin/category/update-quiz/update-quiz.component';

import { AdminGuard } from './services/Admin-Guard/admin.guard';
import { UserWelcomPageComponent } from './components/user/user-welcom-page/user-welcom-page.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserGuard } from './services/User-Guard/user.guard';
import { LoadquizesComponent } from './components/user/loadquizes/loadquizes.component';
import { InstructionsComponent } from './components/user/instructions/instructions.component';
import { SatrtExamComponent } from './components/user/satrt-exam/satrt-exam.component';
import { UpdateQuestionComponent } from './components/admin/update-question/update-question.component';


const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'login',component:LoginComponent},
  { path: 'signup',component:SignupComponent},
  { path: 'allcategory',component:ViewCategoryComponent},
  { path: 'admin-dash',component:AdmindashboardComponent,
  canActivate: [AdminGuard],
  children: [{path: '',component:AdminWelcomeComponent},
             { path: 'profile',component:AdminProfileComponent},
             { path: 'allcategory',component:ViewCategoryComponent},
             {path: 'addcategory',component:AddCategoryComponent},
             {path: 'updatecategory/:id',component:UpdateCategoryComponent},
             {path: 'all-quizes',component:AllQuizesComponent},
             {path:'add-quiz',component:AddQuizesComponent},
             {path: 'view-question/:id/:title',component:ViewQuestionsComponent},
             {path:'add-question/:id/:title',component:AddQuestionComponent},
             {path:'update-question/:id/:title',component:UpdateQuestionComponent},
             {path:'update-quiz/:id',component: UpdateQuizComponent},
             
]
},
  
  { path: 'user-dash',component:UserdashboardComponent,
canActivate:[UserGuard],
children:[
  {path: '',component:UserWelcomPageComponent},
  {path: 'user-profile',component:UserProfileComponent},
  {path: ':category_id', component:LoadquizesComponent},
  {path: 'instructions/:quiz_id', component:InstructionsComponent}
]
},
  {path:'startexam/:quiz_id', component: SatrtExamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
