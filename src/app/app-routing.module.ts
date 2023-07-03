import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'libros', component: LibrosComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }