import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent {

  idToUpdate: any;
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

  updateUser() {
    if(!this.idToUpdate) {
      console.log("Ingrese un id valido");
      return;
    }

    for (const key in this.dataUser) {
      if (this.dataUser[key] == undefined || this.dataUser[key] == "") {
        console.log("Datos faltantes");
        return;
      }
    }

    this.userService.updateUser(this.idToUpdate, {user: this.dataUser}).subscribe((res: any) => {
      console.log(res);
      if(res.status == 200) {
        this.dataUser = res;
      }
      else {
        console.log(res.error)
      }
    });
  }
}
