import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: any = {};

  constructor(
    private userService: UserService,
    private matSnack: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): Promise<boolean> | undefined {
    if (this.userService.isStaticLogged) {
      return this.router.navigateByUrl('/home');
    }

    // Adicione um retorno explícito se a condição acima não for atendida
    return Promise.resolve(false);
  }

  async login(): Promise<void> {
    const result = await this.userService.login(
      this.form.email,
      this.form.senha
    );
    console.log(result);
    if (result.success) {
      this.userService.configureLogin(result);
      this.router.navigateByUrl('/home');
    } else {
      this.matSnack.open('E-mail ou senha incorretos', undefined, {
        duration: 2000,
      });
    }
  }
}
