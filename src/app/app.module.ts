import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { routing,
         appRoutingProviders } from './app.routes';
import { HomeComponent } from './home.component';
import { Auth } from "app/services/auth.service";
import { authHttpServiceFactory } from 'app/services/auth-http-service-factory.service'
import { AuthHttp } from "angular2-jwt/angular2-jwt";



@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [
    appRoutingProviders,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
