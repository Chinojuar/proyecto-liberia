import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/web/servicios/libros.service';
import { Libro } from 'src/app/web/interfaces/Libro';

@Component({
  selector: 'app-vista-libros',
  templateUrl: './vista-libros.component.html',
  styleUrls: ['./vista-libros.component.scss']
})
export class VistaLibrosComponent implements OnInit {
editId : string | null = null;;
  libros:Libro[] = [];

  constructor(private libroService:LibrosService) { 
this.libroService.todosLibros().subscribe(data => this.libros = data)
  }

  ngOnInit(): void {
  }


  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  borrarLibro(libro:Libro){
console.log(libro.id);
  }

}
