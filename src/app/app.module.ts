import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal-barMenu/principal.component';
import { ContenidoPrincipalComponent } from './contenido-principal-noticias/contenido-principal.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { AlumnDocentesComponent } from './admin-alumn-docentes-menu/alumn-docentes.component';
import { LoginComponent } from './login-admin/login.component';
import { PanelAdminComponent } from './InterfazAlumnDocente/panel-admin-Bienvenida/panel-admin.component';
//import { PanelAlumnoComponent } from './InterfazAlumnDocente/panel-alumno/panel-alumno.component';
import { RegistrarAlumnosComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-alumnos-menu/registrar-alumnos.component';
import { RegistrarActividadesComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-actividades-menu/registrar-actividades.component';
import { RegistrarNoticiasComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-noticias-menu/registrar-noticias.component';
import { AsideListaAccesoComponent } from './InterfazAlumnDocente/aside-lista-acceso-admin/aside-lista-acceso.component';
import { AgregarAlumnoFormularioComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-alumnos-menu/agregar-alumno-formulario/agregar-alumno-formulario.component';
import { FormAgregarAlumnoComponent } from './InterfazAlumnDocente/FormulariosRegistro/form-agregar-alumno/form-agregar-alumno.component';
import { TableVerAlumnosComponent } from './InterfazAlumnDocente/FormulariosRegistro/table-ver-alumnos/table-ver-alumnos.component';
import { FormAgregarActividadesComponent } from './InterfazAlumnDocente/FormulariosRegistro/form-agregar-actividades/form-agregar-actividades.component';
import { TableVerActividadesComponent } from './InterfazAlumnDocente/FormulariosRegistro/table-ver-actividades/table-ver-actividades.component';
import { FormAgregarNoticiasComponent } from './InterfazAlumnDocente/FormulariosRegistro/form-agregar-noticias/form-agregar-noticias.component';
import { TableVerNoticiasComponent } from './InterfazAlumnDocente/FormulariosRegistro/table-ver-noticias/table-ver-noticias.component';
import { LoginDocenteComponent } from './login-docente/login-docente.component';
import { AsideListaAccesoDocenteComponent } from './InterfazAlumnDocente/aside-lista-acceso-docente/aside-lista-acceso-docente.component';
import { FormAgregarAlumnoDocenteComponent } from './InterfazAlumnDocente/formulario-registro-docente/form-agregar-alumno-docente/form-agregar-alumno-docente.component';
import { TableVerAlumnoDocenteComponent } from './InterfazAlumnDocente/formulario-registro-docente/table-ver-alumno-docente/table-ver-alumno-docente.component';
import { RegistrarAlumnosDocenteMenuComponent } from './InterfazAlumnDocente/RegistrarMenuDocentes/registrar-alumnos-docente-menu/registrar-alumnos-docente-menu.component';
import { RegistrarActividadesDocenteMenuComponent } from './InterfazAlumnDocente/RegistrarMenuDocentes/registrar-actividades-docente-menu/registrar-actividades-docente-menu.component';
import { FormAgregarActividadesDocenteComponent } from './InterfazAlumnDocente/formulario-registro-docente/form-agregar-actividades-docente/form-agregar-actividades-docente.component';
import { TableVerActividadesDocenteComponent } from './InterfazAlumnDocente/formulario-registro-docente/table-ver-actividades-docente/table-ver-actividades-docente.component';
import { LoginAlumnosComponent } from './login-alumnos/login-alumnos.component';
import { MiPerfilComponent } from './InterfazAlumnDocente/RAlumnosMenu/mi-perfil/mi-perfil.component';
import { MisCalificacionesComponent } from './InterfazAlumnDocente/RAlumnosMenu/mis-calificaciones/mis-calificaciones.component';
import { AsidePerfilAlumnoComponent } from './InterfazAlumnDocente/aside-perfil-alumno/aside-perfil-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ContenidoPrincipalComponent,
    SobreNosotrosComponent,
    AlumnDocentesComponent,
    LoginComponent,
    PanelAdminComponent,
    // PanelAlumnoComponent,
    RegistrarAlumnosComponent,
    RegistrarActividadesComponent,
    RegistrarNoticiasComponent,
    AsideListaAccesoComponent,
    AgregarAlumnoFormularioComponent,
    
    FormAgregarAlumnoComponent,
    
    TableVerAlumnosComponent,
    FormAgregarActividadesComponent,
    TableVerActividadesComponent,
    FormAgregarNoticiasComponent,
    TableVerNoticiasComponent,
    LoginDocenteComponent,
    AsideListaAccesoDocenteComponent,
    FormAgregarAlumnoDocenteComponent,
    TableVerAlumnoDocenteComponent,
    RegistrarAlumnosDocenteMenuComponent,
    RegistrarActividadesDocenteMenuComponent,
    FormAgregarActividadesDocenteComponent,
    TableVerActividadesDocenteComponent,
    LoginAlumnosComponent,
    MiPerfilComponent,
    MisCalificacionesComponent,
    AsidePerfilAlumnoComponent,
  //  FormularioRegistroDocenteComponent,

    
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
