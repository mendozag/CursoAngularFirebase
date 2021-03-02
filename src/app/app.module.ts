import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FormsModule } from "@angular/forms";
//componentes
import { AppComponent } from "./app.component";
import { AddProducto } from "./components/addProducto/addProducto.component";
import { Catalogo } from "./components/catalogo/catalogo.component";
import { ConexionService } from "./services/conexion.service";
import { HomeComponent } from "./components/home/home.component";
import { AdministracionComponent } from "./components/administracion/administracion.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { routing, appRoutingProviders } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    AddProducto,
    Catalogo,
    HomeComponent,
    AdministracionComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    routing
  ],
  providers: [ConexionService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
