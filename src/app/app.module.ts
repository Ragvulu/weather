import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserformComponent } from './userform/userform.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomFilterPipePipe } from './user/custom-filter-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    HomePageComponent,
    UserComponent,
    UserformComponent,
    CustomFilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
