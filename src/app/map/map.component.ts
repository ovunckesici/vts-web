import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Map, NavigationControl} from "mapbox-gl";
import {MapService} from "../services/map/map.service";
import {switchMap} from "rxjs/operators";
import {combineLatest, map, Observable, of} from "rxjs";
// @ts-ignore
import {ScatterplotLayer} from '@deck.gl/layers';
// @ts-ignore
import {MapboxLayer} from '@deck.gl/mapbox';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('mapEl', {static: true})
  mapEl!: ElementRef<HTMLDivElement>;

  private map!: Map;

  constructor(private mapSrv: MapService) {
  }

  ngOnInit(): void {
    //
  }

  ngAfterViewInit(): void {
    this.mapSrv.mapData$
      .pipe(
        switchMap(d => combineLatest(of(d), this.mapSrv.map)),
        map(([data, glMap]) => {
          return this.setLayers(glMap, data)
        })
      )
      .subscribe()

    this.mapSrv.getData(1)
      .subscribe(d => this.mapSrv.mapDataSub.next(d))

    this.map = new Map({
      container: this.mapEl.nativeElement,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: {lng: -102.380979, lat: 35.877742},
      zoom: 4,
      pitch: 20,
      attributionControl: false
    });

    this.map.addControl(
      new NavigationControl({
        showZoom: true,
        showCompass: true,
        visualizePitch: true,
      }),
      'top-right'
    );

    this.mapSrv.map.next(this.map);

    this.map.on('load', () => {
      console.log('map loaded');
      this.mapSrv.map.complete();
    });
  }

  setLayers(m: Map, data: any): Observable<Map> {
    const layer = m.getLayer('scatter')
    if (!!layer) {
      m.removeLayer('scatter')
    }
    console.log('setting layers')
    const scatter = new MapboxLayer({
      id: 'scatter',
      type: ScatterplotLayer,
      data,
      // @ts-ignore
      source: 'scatter',
      opacity: 0.8,
      filled: true,
      radiusMinPixels: 2,
      radiusMaxPixels: 5,
      // @ts-ignore
      getPosition: d => [d.longitude, d.latitude],
      // @ts-ignore
      getFillColor: d =>
        d.n_killed > 0 ? [200, 0, 40, 150] : [255, 140, 0, 100],
      pickable: true,
      // @ts-ignore
      onHover: ({object, x, y}) => {
        if (!!object) {
          console.log(object, x, y);
        }
      }
    });
    m.addLayer(scatter);
    return of(m);
  }

  loadData() {
    this.mapSrv.getData(2)
      .subscribe(d => this.mapSrv.mapDataSub.next(d));
  }

  ngOnDestroy() {
    this.mapSrv.map.subscribe(glMap => {
      glMap.removeLayer('scatter');
    });
  }
}
