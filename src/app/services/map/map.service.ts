import {Injectable} from '@angular/core';
import {AsyncSubject, BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Map} from "mapbox-gl";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapDataSub = new BehaviorSubject<any>(null);
  mapData$ = this.mapDataSub.asObservable();

  map = new AsyncSubject<Map>();

  constructor(
    private http: HttpClient
  ) {
  }

  getData(file = 1): Observable<any> {
    return this.http.get<any>(`../../../assets/data.${file}.json`);
  }
}
