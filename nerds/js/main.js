// google maps api
$(function() {
  var mapOptions = {
    center: new google.maps.LatLng(45.039499, 38.969273),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: false,
    zoomControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    mapTypeControl: false,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  var image = 'img/map-point.png';
  var myLatLng = new google.maps.LatLng(45.038751, 38.973148);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
});


// Range-filter
$(function() {

  $(".range-filter__control").slider({
    min: 0,
    max: 19000,
    values: [0, 15000],
    range: true,
    slide: function(event, ui) {
      $(".range-filter__input--min").val(ui.values[0]);
      $(".range-filter__input--max").val(ui.values[1]);
    }
  });

  $(".range-filter__input").on("keyup", function() {
    var a = $(".range-filter__input--min").val();
    var b = $(".range-filter__input--max").val();

    if(parseInt(a) > parseInt(b)){
      a = b;
      $(".range-filter__input--min").val(a);
    }

    if (b > 19000) { 
      b = 19000; 
      $(".range-filter__input--max").val(19000)
    }

    if(parseInt(a) > parseInt(b)){
      b = a;
      $(".range-filter__input--max").val(b);
    }

    $(".range-filter__control").slider("values", 0, a);
    $(".range-filter__control").slider("values", 1, b);
  });

  $(".range-filter__input--min").val( $(".range-filter__control").slider("values", 0) );
  $(".range-filter__input--max").val( $(".range-filter__control").slider("values", 1) );

});