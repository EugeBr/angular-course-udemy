import { Component } from "@angular/core";

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html'
})

export class UsuarioComponent{

    usuarios = ['Luis', 'Fernando', 'Lucia']
    usuarioNombre = '';
    visible = false;

    constructor() {
        setTimeout(() => {
            this.visible = true;
        }, 3000);
    }

    addUser() {
        this.usuarios.push(this.usuarioNombre);
    }
}