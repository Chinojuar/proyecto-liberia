import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/Libro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

libro:Libro[] = [];

  constructor(private http:HttpClient) { }

  todosLibros():Observable<Libro[]> {
    return this.http.get<Libro[]>("http://localhost:9095/obtenerProductos");
  }
  
  traerLibro(id: number) {
    return this.http.get<Libro>("http://localhost:9095/obtenerProducto/id")
  }
  
  crearLibro(libro: Libro[]) {
    return this.http.put<Libro>("http://localhost:9095/guardarDtoProducto",libro);
  }
  
  actualizar(id: number, producto: Libro) {
    const url ="http://localhost:9095/actualizaProducto"
    return this.http.put<Libro>(`${url}/${id}`,producto);
  }
  
  borrar(id: number) {
    const url ="http://localhost:9095/borrarProducto"
    return this.http.delete<boolean>(`${url}/${id}`);
}
