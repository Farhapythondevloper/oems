// // import { Component, OnInit } from '@angular/core';
// // import { FormControl, FormGroup, Validators } from '@angular/forms';

// // @Component({
// //   selector: 'app-login',
// //   templateUrl: './login.component.html',
// //   styleUrls: ['./login.component.css']
// // })
// // export class LoginComponent implements OnInit{


// // loginData=new FormGroup({
  
// //   username:new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
// //   password:new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(40)])
// // });


// //   constructor(){ }
// //     ngOnInit(): void{}
      
    
// // sendLoginData(){
// //   console.log(this.loginData.value);
// // }
// // }


// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LoginService } from 'src/app/services/loginservice/login.service';
// import Swal from 'sweetalert2';
// // import { LoginService } from 'src/app/Services/loginService/login.service';
// // import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   loginForm:FormGroup= new FormGroup({
//     username: new FormControl(null, [Validators.required]),
//     password: new FormControl(null, [Validators.required])
//   })

//   constructor(private loginService:LoginService, private route:Router){}

//   submitLoginData(){
//     console.log(this.loginForm.value)

//     this.loginService.generateToken(this.loginForm.value).subscribe(
//       (res:any)=> {console.log(res)
//         this.loginService.setToken(res.token)
//         this.loginService.getCurrentUser().subscribe(
//           (res:any)=> {console.log(res)
//             this.loginService.setUser(res)


//             if(this.loginService.getUserRole() == "ADMIN"){
//               this.route.navigate(['admin-dash']);
//               this.loginService.loginStatusSubject.next(true);

//             }
//             else if (this.loginService.getUserRole() == "NORMAL"){
//               this.route.navigate(['user-dash']);
//               this.loginService.loginStatusSubject.next(true);
//             }


//           }
//         )
//       },
//       (err) =>{
//         Swal.fire({
//           title:'User Not Found',
//           text:'Invalid User',
//           icon:'error',
//           // timer: 3000
//         })
//       }
//     )

//   }

// }



import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { generate } from 'rxjs';
import { LoginService } from 'src/app/services/loginservice/login.service';
// import { LoginService } from 'src/app/Services/loginService/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup=new FormGroup({

    username:new FormControl(null, Validators.required),
    password:new FormControl(null, Validators.required)
  })

  constructor(private loginService:LoginService, private route:Router){}
    
  submitLoginData(){
    console.log(this.loginForm.value)

    //generate token 
    this.loginService.genrateToken(this.loginForm.value).subscribe(
      (res:any)=>{console.log(res)
      //setToken is used to set token in localstorage
      // this.loginService.setToken(res.token)
      this.loginService.loginUser(res.token)
      //getCurrentUser will get Current Loging user data
      this.loginService.getCurrentUser().subscribe(
        (res:any)=>{console.log(res)
        //responce will set in localstorage
        this.loginService.setUser(res)

        if(this.loginService.getUserRole()=="ADMIN"){
          this.route.navigate(['admin-dash']);
          this.loginService.loginStatusSubject.next(true)
        }
        else if(this.loginService.getUserRole()=="NORMAL"){
          this.route.navigate(['user-dash']);
          this.loginService.loginStatusSubject.next(true);
        }

        }
      )
      },
      (err)=>{
        Swal.fire({
          title:'User Not Found',
          text:'Invalid User',
          icon:'error',
          
        })
      }
    )

  }

}