import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {

  dataUser: any = {
    name: "",
    lastName: "",
    id: null,
    age: null,
    email: "",
    phone: null,
  }

  constructor(
    private userService: UserService,
  ){}

  createUser(){
    for (const key in this.dataUser) {
      if (this.dataUser[key] == undefined || this.dataUser[key] == "") {
        console.log("Datos faltantes");
        return;
      }
    }

    this.userService.createUser({user:this.dataUser}).subscribe((res: any) => {
      console.log(res);
      if(res.status == 200) {
        console.log("Usuario creado con exito")
      }
      else {
        console.log(res.error)
      }
    })
  }

}
