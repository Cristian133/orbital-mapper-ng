import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElementSet } from '@models/celestrak.interface';
import { Group } from '@models/celestrak.type';

@Injectable({
  providedIn: 'root'
})
export class CelestrakService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://celestrak.org/NORAD/elements/gp.php';

  /** GET GROUP JSON */
  getElementSet$(group: Group, format='json'): Observable<ElementSet[]> {
    const url = `${this.baseUrl}?GROUP=${group}&FORMAT=${format}`

    return this.http.get<ElementSet[]>(url);
  }

}
