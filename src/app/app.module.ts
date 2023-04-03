import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserFindComponent } from './component/user-find/user-find.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserCreateComponent } from './component/user-create/user-create.component';
import { UserUpdateComponent } from './component/user-update/user-update.component';
import { UserDeleteComponent } from './component/user-delete/user-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFindComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
