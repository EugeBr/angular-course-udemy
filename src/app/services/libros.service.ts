import {Subject} from 'rxjs';

export class LibrosService {

    librosSubject = new Subject();

    private libros = ['Libro 1', 'Libro 2', 'Libro 3'];

    agregarLibro(libroNombre: string) {
        this.libros.push(libroNombre);
        this.librosSubject.next(libroNombre);
    }

    obtenerLibros() {
        return [...this.libros];
    }
}