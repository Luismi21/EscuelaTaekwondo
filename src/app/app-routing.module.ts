import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AlumnDocentesComponent } from './admin-alumn-docentes-menu/alumn-docentes.component';
import { ContenidoPrincipalComponent } from './contenido-principal-noticias/contenido-principal.component';
import { FormAgregarActividadesComponent } from './InterfazAlumnDocente/FormulariosRegistro/form-agregar-actividades/form-agregar-actividades.component';
import { FormAgregarAlumnoComponent } from './InterfazAlumnDocente/FormulariosRegistro/form-agregar-alumno/form-agregar-alumno.component';
import { FormAgregarNoticiasComponent } from './InterfazAlumnDocente/FormulariosRegistro/form-agregar-noticias/form-agregar-noticias.component';
import { TableVerActividadesComponent } from './InterfazAlumnDocente/FormulariosRegistro/table-ver-actividades/table-ver-actividades.component';
import { TableVerAlumnosComponent } from './InterfazAlumnDocente/FormulariosRegistro/table-ver-alumnos/table-ver-alumnos.component';
import { TableVerNoticiasComponent } from './InterfazAlumnDocente/FormulariosRegistro/table-ver-noticias/table-ver-noticias.component';
import { PanelAdminComponent } from './InterfazAlumnDocente/panel-admin-Bienvenida/panel-admin.component';

import { RegistrarActividadesComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-actividades-menu/registrar-actividades.component';
import { RegistrarAlumnosComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-alumnos-menu/registrar-alumnos.component';
import { RegistrarNoticiasComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-noticias-menu/registrar-noticias.component';
import { LoginComponent } from './login-admin/login.component';
import { LoginDocenteComponent } from './login-docente/login-docente.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { FormAgregarAlumnoDocenteComponent } from './InterfazAlumnDocente/formulario-registro-docente/form-agregar-alumno-docente/form-agregar-alumno-docente.component';
import { RegistrarAlumnosDocenteMenuComponent } from './InterfazAlumnDocente/RegistrarMenuDocentes/registrar-alumnos-docente-menu/registrar-alumnos-docente-menu.component';
import { TableVerAlumnoDocenteComponent } from './InterfazAlumnDocente/formulario-registro-docente/table-ver-alumno-docente/table-ver-alumno-docente.component';
import { RegistrarActividadesDocenteMenuComponent } from './InterfazAlumnDocente/RegistrarMenuDocentes/registrar-actividades-docente-menu/registrar-actividades-docente-menu.component';
import { FormAgregarActividadesDocenteComponent } from './InterfazAlumnDocente/formulario-registro-docente/form-agregar-actividades-docente/form-agregar-actividades-docente.component';
import { TableVerActividadesDocenteComponent } from './InterfazAlumnDocente/formulario-registro-docente/table-ver-actividades-docente/table-ver-actividades-docente.component';
import { LoginAlumnosComponent } from './login-alumnos/login-alumnos.component';
import { MiPerfilComponent } from './InterfazAlumnDocente/RAlumnosMenu/mi-perfil/mi-perfil.component';
import { MisCalificacionesComponent } from './InterfazAlumnDocente/RAlumnosMenu/mis-calificaciones/mis-calificaciones.component';

const routes: Routes = [
  { path: '', component: ContenidoPrincipalComponent, pathMatch: 'full' },
  { path: 'sobreNosotros', component: SobreNosotrosComponent },
  { path: 'AlumnoDocente', component: AlumnDocentesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginDocente', component: LoginDocenteComponent },
  { path: 'PanelAdmin', component: PanelAdminComponent },
  { path: 'RegistrarAlumno', component: RegistrarAlumnosComponent },
  { path: 'RegistroActividades', component: RegistrarActividadesComponent },
  { path: 'RegistrarNoticias', component: RegistrarNoticiasComponent },
  { path: 'FormSgregarAlumno', component: FormAgregarAlumnoComponent },
  { path: 'FormVerAlumno', component: TableVerAlumnosComponent },
  { path: 'FormagregarAct', component: FormAgregarActividadesComponent },
  { path: 'FormVerActividad', component: TableVerActividadesComponent },
  { path: 'FormAgregarNoticias', component: FormAgregarNoticiasComponent },
  { path: 'FormVerNoticias', component: TableVerNoticiasComponent },
  //agregar docentes
  {
    path: 'FormAgregarAlumnoDocente',
    component: FormAgregarAlumnoDocenteComponent,
  },
  { path: 'AgregarAlumno', component: RegistrarAlumnosDocenteMenuComponent },
  { path: 'TableVerAlumno', component: TableVerAlumnoDocenteComponent },
  {
    path: 'AgregarActividades',
    component: RegistrarActividadesDocenteMenuComponent,
  },
  {
    path: 'AgregarActividadesDocentes',
    component: FormAgregarActividadesDocenteComponent,
  },
  {
    path: 'TablaVerActividadesDocentes',
    component: TableVerActividadesDocenteComponent,
  },
  //alumno
  { path: 'LoginAlumno', component: LoginAlumnosComponent },
  { path: 'MiPerfil', component: MiPerfilComponent },
  { path: 'Calificaciones', component: MisCalificacionesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
