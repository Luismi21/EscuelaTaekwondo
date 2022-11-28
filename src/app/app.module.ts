import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContenidoPrincipalComponent } from './contenido-principal/contenido-principal.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { AlumnDocentesComponent } from './alumn-docentes/alumn-docentes.component';
import { LoginComponent } from './login/login.component';
import { PanelAdminComponent } from './InterfazAlumnDocente/panel-admin/panel-admin.component';
import { PanelAlumnoComponent } from './InterfazAlumnDocente/panel-alumno/panel-alumno.component';
import { RegistrarAlumnosComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-alumnos-menu/registrar-alumnos.component';
import { RegistrarActividadesComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-actividades/registrar-actividades.component';
import { RegistrarNoticiasComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-noticias/registrar-noticias.component';
import { AsideListaAccesoComponent } from './InterfazAlumnDocente/aside-lista-acceso-docente/aside-lista-acceso.component';
import { AgregarAlumnoFormularioComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-alumnos-menu/agregar-alumno-formulario/agregar-alumno-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ContenidoPrincipalComponent,
    SobreNosotrosComponent,
    AlumnDocentesComponent,
    LoginComponent,
    PanelAdminComponent,
    PanelAlumnoComponent,
    RegistrarAlumnosComponent,
    RegistrarActividadesComponent,
    RegistrarNoticiasComponent,
    AsideListaAccesoComponent,
    AgregarAlumnoFormularioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
