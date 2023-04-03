import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-find',
  templateUrl: './user-find.component.html',
  styleUrls: ['./user-find.component.scss']
})
export class UserFindComponent {

  idToSearch: any;
  dataUser: any = {};

  constructor(
    private userService: UserService,
  ){}

  searchUser() {
    if(!this.idToSearch) {
      console.log("Ingrese un id valido");
      return;
    }
    this.userService.getById(this.idToSearch).subscribe((res: any) => {
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
