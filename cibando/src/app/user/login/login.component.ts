import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  loginError:string = "";
  user:any;
  constructor(private authService:AuthService, private router:Router, private messageService:MessageService) { }

  ngOnInit(): void {
  }
  onSubmit(credenziali:any){
    if(credenziali.email !== '' && credenziali.password !==''){
      this.authService.login(credenziali.email,credenziali.password).subscribe({
        next:(res) => {
          this.user = res;
          if(res){
            this.authService.saveStorage(res);
            this.messageService.add({severity:'success', summary:'Successo', detail:'Login efftuato con successo'});
            // this.router.navigate(['home'])
          } else {
            this.loginError= "Email o password errati"
            this.messageService.add({severity:'error', summary:'Errore', detail:'Email o password errati' , life:2000});
          }
        },
        error:(err) => {
          console.log(err);
          this.loginError = "Errore nel server" +err;
          this.messageService.add({severity:'error', summary:'Errore', detail:"Errore nel server" +err});
        }
      })
    }
  }
}
