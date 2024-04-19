import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { NavComponent } from "./navbar/nav.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { SearchComponent } from "./search/search.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, SignUpComponent, NavComponent, HomePageComponent, SearchComponent]
})
export class AppComponent {
  title = 'entertainment-app';
}
