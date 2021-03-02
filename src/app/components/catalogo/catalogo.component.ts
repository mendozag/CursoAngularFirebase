import { Component, OnInit } from "@angular/core";
import { ConexionService } from "../../services/conexion.service";
import { Producto } from "../../interfaces/producto";

export interface ProductoId extends Producto {
  id: string;
}

@Component({
  selector: "catalogo",
  templateUrl: "./catalogo.component.html"
})
export class Catalogo implements OnInit {
  productos: any;
  productoEditar: any = {
    nombre: "",
    marca: "",
    precio: ""
  };

  constructor(private _conexion: ConexionService) {
    this._conexion.listaProductos().subscribe(
      data => {
        this.productos = data;
        console.log("this.productos: ", this.productos);
      },
      err => console.log(err)
    );
  }

  ngOnInit() {}

  eliminar(producto: any) {
    this._conexion.deleteProducto(producto);
  }

  editar(producto: any) {
    this.productoEditar = producto;
    console.log("this.productoEditar: ", this.productoEditar);
  }

  agregarProductoEditado() {
    this._conexion.editProducto(this.productoEditar);
  }
}
