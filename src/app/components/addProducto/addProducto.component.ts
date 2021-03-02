import { Component, OnInit } from "@angular/core";
import { ConexionService } from "../../services/conexion.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "addProducto",
  templateUrl: "./addProducto.component.html"
})
export class AddProducto implements OnInit {
  producto: any = {
    nombre: "",
    marca: "",
    precio: "",
    uid: ""
  };

  constructor(private _conexion: ConexionService, public _authS: AuthService) {
    console.log();
  }

  ngOnInit() {}

  agregar() {
    this.producto.uid = this._authS.usuario.uid;
    this._conexion.addProducto(this.producto);
  }
}
