import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libros = ['Matematica 1', 'Algoritmos 2', 'Java 3'];

  eliminarLibro(libro: string) {
    this.libros = this.libros.filter( p => p !== libro)
  }

  guardarlibro(f: any) {
    if(f.value) {
      this.libros.push(f.value.nombreLibro);
    }
  }
}
