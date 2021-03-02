import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
  public app_name: string = "HouseShop";
  public isLogged: boolean = false;

  constructor(public _authS: AuthService) {}

  ngOnInit() {}
}
