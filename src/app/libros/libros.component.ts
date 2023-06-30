import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros = [''];
  constructor(private librosService: LibrosService) { }
  private LibroSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros();
    this.LibroSubscription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  eliminarLibro(libro: string) {

  }

  guardarlibro(f: any) {
    if (f.value) {
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOndestroy() {
    this.LibroSubscription.unsubscribe();
  }
}
