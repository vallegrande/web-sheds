import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Shed } from '../model/shed';  

@Injectable({
  providedIn: 'root'
})
export class ShedService {

  constructor(private http: HttpClient) { }

  // Método para obtener todos los "sheds"
  getAllSheds(): Observable<Shed[]> {
    const url = `${environment.apiUrl}`; // Usamos environment.apiUrl directamente
    return this.http.get<Shed[]>(url);
  }

  // Método para obtener un "shed" por su ID
  getShedById(id: number): Observable<Shed> {
    const url = `${environment.apiUrl}/${id}`; // Usamos environment.apiUrl con el ID
    return this.http.get<Shed>(url);
  }

  // Método para crear un nuevo "shed"
  createShed(shed: Shed): Observable<Shed> {
    const url = `${environment.apiUrl}/crear`; // Usamos environment.apiUrl con la ruta 'crear'
    return this.http.post<Shed>(url, shed);
  }

  // Método para actualizar un "shed" por su ID
  updateShed(id: number, shed: Shed): Observable<Shed> {
    const url = `${environment.apiUrl}/${id}`; // Usamos environment.apiUrl con el ID
    return this.http.put<Shed>(url, shed);
  }

  // Método para eliminar un "shed" por su ID
  deleteShed(id: number): Observable<void> {
    const url = `${environment.apiUrl}/${id}`; // Usamos environment.apiUrl con el ID
    return this.http.delete<void>(url);
  }

  // Método para obtener los "sheds" por su estado
  getShedsByStatus(status: string): Observable<Shed[]> {
    const url = `${environment.apiUrl}/status/${status}`; // Usamos environment.apiUrl con el estado
    return this.http.get<Shed[]>(url);
  }

  // Método para inactivar un "shed" por su ID
  inactivateShed(id: number): Observable<Shed> {
    const url = `${environment.apiUrl}/${id}/inactivate`; // Usamos environment.apiUrl con el ID
    return this.http.patch<Shed>(url, {});
  }

  // Método para activar un "shed" por su ID
  activateShed(id: number): Observable<Shed> {
    const url = `${environment.apiUrl}/${id}/activate`; // Usamos environment.apiUrl con el ID
    return this.http.patch<Shed>(url, {});
  }
}
