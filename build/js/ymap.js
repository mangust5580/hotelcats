ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 17,
      controls: []
    },{
      suppressMapOpenBlock: true
    },{
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(([59.938635, 30.323118]), {

    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-marker.png',
      iconImageSize: [64, 116],
      iconImageOffset: [-100, -200]
    });
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove("rulerControl");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("zoomControl");
  myMap.controls.remove("geolocationControl");
  myMap.controls.remove("routeEditor");
});

