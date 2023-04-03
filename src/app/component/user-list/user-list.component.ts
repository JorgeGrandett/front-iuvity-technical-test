import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userData: any;

  constructor(
    private userService: UserService,
  ){}

  ngOnInit(): void {
  this.listUsers();
  }

  listUsers() {
    this.userService.getAll().subscribe((res: any) => {
      console.log(res);
      if(res.status == 200) {
        this.userData = res;
      }
      else {
        console.log(res.error);
      }
    })
  }

}
