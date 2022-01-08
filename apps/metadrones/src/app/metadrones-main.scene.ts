import { Component, OnDestroy, OnInit } from '@angular/core';
import hotkeys from 'hotkeys-js';
import { icon, latLng, Map, marker, tileLayer } from 'leaflet';

const droneMarker = marker([39.465985, -0.3838337], {
  icon: icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/icons/mdi/quadcopter.svg',
  }),
});

@Component({
  selector: 'cf-metadrones-main',
  template: `
    <div class="scene-content">
      <div
        style="width: 100%; height: 100%;"
        leaflet
        (leafletMapReady)="map = $event"
        [leafletOptions]="options"
      ></div>
    </div>
  `,
  styles: [
    `
      @import '~leaflet/dist/leaflet.css';
    `,
  ],
})
export class MetadronesMainScene implements OnInit, OnDestroy {
  /** selectedAvatar$ = this.selectedAvatarState.avatar$; **/

  map?: Map;

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 58,
        attribution: '...',
      }),
      droneMarker,
    ],
    zoom: 18,
    center: latLng(39.465985, -0.3838337),
  };

  ngOnInit() {
    hotkeys(
      'up',
      {
        keydown: true,
      },
      () => {
        const previousLatLng = droneMarker.getLatLng();
        droneMarker.setLatLng([
          previousLatLng.lat + 0.0002,
          previousLatLng.lng,
        ]);
        this.map?.setView(droneMarker.getLatLng(), this.map?.getZoom());
      }
    );
    hotkeys(
      'down',
      {
        keydown: true,
      },
      () => {
        const previousLatLng = droneMarker.getLatLng();
        droneMarker.setLatLng([
          previousLatLng.lat - 0.0002,
          previousLatLng.lng,
        ]);
        this.map?.setView(droneMarker.getLatLng(), this.map?.getZoom());
      }
    );
    hotkeys(
      'left',
      {
        keydown: true,
      },
      () => {
        const previousLatLng = droneMarker.getLatLng();
        droneMarker.setLatLng([
          previousLatLng.lat,
          previousLatLng.lng - 0.0002,
        ]);
        this.map?.setView(droneMarker.getLatLng(), this.map?.getZoom());
      }
    );
    hotkeys(
      'right',
      {
        keydown: true,
      },
      () => {
        const previousLatLng = droneMarker.getLatLng();
        droneMarker.setLatLng([
          previousLatLng.lat,
          previousLatLng.lng + 0.0002,
        ]);
        this.map?.setView(droneMarker.getLatLng(), this.map?.getZoom());
      }
    );
  }

  ngOnDestroy(): void {
    hotkeys.unbind('up');
    hotkeys.unbind('down');
    hotkeys.unbind('left');
    hotkeys.unbind('right');
  }

  constructor(/** private selectedAvatarState: SelectedAvatarState **/) {}
}
