//alert("hello map");
function init_map() {
          var myOptions = {
            zoom : 1,
            center : new google.maps.LatLng(40.7127837, -74.00594130000002),
            mapTypeId : google.maps.MapTypeId.SATELLITE
          };
          map = new google.maps.Map(document.getElementById('gmap_canvas'),
              myOptions);
          marker = new google.maps.Marker({
            map : map,
            position : new google.maps.LatLng(40.7127837,
                -74.00594130000002)
          });
          infowindow = new google.maps.InfoWindow({
            content : '<strong>Ky Sona</strong><br>Paris<br>'
          });
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
          });
          infowindow.open(map, marker);
      }
    google.maps.event.addDomListener(window, 'load', init_map);