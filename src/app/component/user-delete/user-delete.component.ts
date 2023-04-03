import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent {

  idToDelete: any;

  constructor(
    private userService: UserService,
  ){}

  deleteUser(){
    if(!this.idToDelete) {
      console.log("Ingrese un id valido");
      return;
    }
    this.userService.deleteUser(this.idToDelete).subscribe((res: any) => {
      console.log(res);
      if(res.status == 200) {
        console.log();
      }
      else {
        console.log(res.error)
      }
    });
  }
}
