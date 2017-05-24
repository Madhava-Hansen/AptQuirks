export default class MarkerManager {
  constructor(map) {
    this.map = map;
  }

  createMarkerFromApartment(apartment) {
    const { latitude, longitude } = apartment;
    const myLatLng = new google.maps.LatLng(latitude, longitude);
    const map = this.map;
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    })
  }
}
