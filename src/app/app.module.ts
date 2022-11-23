import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContenidoPrincipalComponent } from './contenido-principal/contenido-principal.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { AlumnDocentesComponent } from './alumn-docentes/alumn-docentes.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ContenidoPrincipalComponent,
    SobreNosotrosComponent,
    AlumnDocentesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
