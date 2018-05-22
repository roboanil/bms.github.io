(function ($) {
    // USE STRICT
    "use strict";

        $(document).ready(function () {

            
            var style = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
                ]
            }
            ];

            
            var locations = [
              [1,'<table ><tr><th cplspan="2">Boiler Information</th></tr><tr><td>Industry Name:</td><td>ITC LTD</td></tr><tr><td>Boiler Type:</td><td>Superheater</td></tr><tr><td>Installed Date:</td><td>2015-05-30</td></tr><tr><td>Warrenty Expires On:</td><td>2019-05-29</td></tr><tr><td cplspan="2" ><a href="./boiler-graph.html" style="text-align:center;">Performance Report</a></td></tr></table>', 17.7386225,83.1225035,'images/icons/map-marker.png'],
              [1,'<table ><tr><th cplspan="2">Boiler Information</th></tr><tr><td>Industry Name:</td><td>MRF LTD</td></tr><tr><td>Boiler Type:</td><td>Multi-tube boilers</td></tr><tr><td>Installed Date:</td><td>2015-05-30</td></tr><tr><td>Warrenty Expires On:</td><td>2019-05-29</td></tr><tr><td cplspan="2" ><a href="./boiler-graph.html" style="text-align:center;">Performance Report</a></td></tr></table>', 17.6674891,80.8793485, 'images/icons/map-marker.png'],
              [1,'<table ><tr><th cplspan="2">Boiler Information</th></tr><tr><td>Industry Name:</td><td>Larus Labs</td></tr><tr><td>Boiler Type:</td><td>Firetube boiler</td></tr><tr><td>Installed Date:</td><td>2015-05-30</td></tr><tr><td>Warrenty Expires On:</td><td>2019-05-29</td></tr><tr><td cplspan="2" ><a href="./boiler-graph.html" style="text-align:center;">Performance Report</a></td></tr></table>', 16.840453,80.2909541,'images/icons/map-marker.png'],
              [1,'<table ><tr><th cplspan="2">Boiler Information</th></tr><tr><td>Industry Name:</td><td>Asian Paints</td></tr><tr><td>Boiler Type:</td><td>Haycock and wagon top boilers</td></tr><tr><td>Installed Date:</td><td>2015-05-30</td></tr><tr><td>Warrenty Expires On:</td><td>2019-05-29</td></tr><tr><td cplspan="2" ><a href="./boiler-graph.html" style="text-align:center;">Performance Report</a></td></tr></table>', 17.4277019,78.3411366, 'images/icons/map-marker.png'],
              [4,'<table ><tr><th cplspan="2">Boiler Information</th></tr><tr><td>Industry Name:</td><td>MRF LTD</td></tr><tr><td>Boiler Type:</td><td>Firetube boilers</td></tr><tr><td>Installed Date:</td><td>2015-05-30</td></tr><tr><td>Service Due Date:</td><td>2018-05-25</td></tr><tr><td cplspan="2" ><a href="./boiler-graph.html" style="text-align:center;">Performance Report</a></td></tr></table>', 16.024641,78.0586343,'images/icons/serv.png'],
              [4,'<table ><tr><th cplspan="2">Boiler Information</th></tr><tr><td>Industry Name:</td><td>Asian Paints</td></tr><tr><td>Boiler Type:</td><td>Haycock and wagon top boilers</td></tr><tr><td>Installed Date:</td><td>2015-05-30</td></tr><tr><td>Service Due Date:</td><td>2018-05-29</td></tr><tr><td cplspan="2" ><a href="./boiler-graph.html" style="text-align:center;">Performance Report</a></td></tr></table>', 19.024641,79.0586343, 'images/icons/serv.png'],
              [3,'<table ><tr><th cplspan="2">Boiler Information</th></tr><tr><td>Industry Name:</td><td>MRF LTD</td></tr><tr><td>Boiler Type:</td><td>Multi-tube boilers</td></tr><tr><td>Down Since:</td><td>2015-05-11 05:45:15</td></tr><tr><td>Down Time</td><td>05:45 (HH:MM)</td></tr><tr><td>Status:</td><td>InProgress ( Service Engineer 1)</td></tr><tr><td cplspan="2" ><a href="./boiler-graph.html" style="text-align:center;">Performance Report</a></td></tr></table>', 15.024641,78.0586343, 'images/icons/comp.png'],
              [3,'<table ><tr><th cplspan="2">Boiler Information</th></tr><tr><td>Industry Name:</td><td>Larus Labs</td></tr><tr><td>Boiler Type:</td><td>Multi-tube boilers</td></tr><tr><td>Down Since:</td><td>2015-05-12 05:04:15</td></tr><tr><td>Down Time</td><td>15:45 (HH:MM)</td></tr><tr><td>Status:</td><td>InProgress ( Service Engineer 2)</td></tr><tr><td cplspan="2" ><a href="./boiler-graph.html" style="text-align:center;">Performance Report</a></td></tr></table>', 17.024641,79.0586343,'images/icons/comp.png'],
              [2,'<table ><tr><th cplspan="2">Service Engineer Information</th></tr><tr><td>Name:</td><td>Service Engineer 1</td></tr><tr><td>EMP Id:</td><td>5469875</td></tr><tr><td>Experience:</td><td>10 Years</td></tr><tr><td>Rating:</td><td>4.5/5</td></tr><tr><td>Re-raise of compliants:</td><td>0.95%</td></tr><tr><th cplspan="2">Next 7 days Schedule</th></tr><tr><td>Day 1</td><td>MRF LTD(compliant closing)</td></tr><tr><td>Day 2</td><td>Larus Labs( Scheduled Service)</td></tr><tr><td>Day 3</td><td>ITC LTD(Scheduled Service)</td></tr><tr><td>Day 4</td><td>Open</td></tr><tr><td>Day 5</td><td>Open</td></tr><tr><td>Day 6</td><td>Open</td></tr><tr><td>Day 7</td><td>ITC LTD(Scheduled Service)</td></tr></table>', 18.024641,82.0586343,'images/icons/worker.png'],
              [2,'<table ><tr><th cplspan="2">Service Engineer Information</th></tr><tr><td>Name:</td><td>Service Engineer 2</td></tr><tr><td>EMP Id:</td><td>5460075</td></tr><tr><td>Experience:</td><td>6 Years</td></tr><tr><td>Rating:</td><td>4.4/5</td></tr><tr><td>Re-raise of compliants:</td><td>1.95%</td></tr><tr><th cplspan="2">Next 7 days Schedule</th></tr><tr><td>Day 1</td><td>MRF LTD(compliant closing)</td></tr><tr><td>Day 2</td><td>Larus Labs( Scheduled Service)</td></tr><tr><td>Day 3</td><td>ITC LTD(Scheduled Service)</td></tr><tr><td>Day 4</td><td>Open</td></tr><tr><td>Day 5</td><td>Open</td></tr><tr><td>Day 6</td><td>Open</td></tr><tr><td>Day 7</td><td>ITC LTD(Scheduled Service)</td></tr></table>', 15.6930923,79.7959238,'images/icons/worker.png']
            ];

            
            displayDataOnGraph(locations,style);


            $(".dashBoardClick").click(function(){
                var type = $(this).attr("data-type");
                var newfilterData = [];

                for(var i=0;i<locations.length;i++)
                {
                    if (locations[i][0] == type)
                    {
                        newfilterData.push(locations[i]);
                    }
                }
                displayDataOnGraph(newfilterData,style);
            });

        });

})(jQuery);

function displayDataOnGraph(locations,style)
{
    var map = new google.maps.Map(document.getElementById('google_map'), {
                zoom: 6,
                scrollwheel: true,
                zoomControl: true,  
                disableDoubleClickZoom: true,
                navigationControl: true,
                mapTypeControl: false,
                scaleControl: false,
                draggable: true,
                styles: style,
                center: new google.maps.LatLng(locations[0][2], locations[0][3]),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][2], locations[i][3]),
            map: map,
            icon: locations[i][4]
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][1]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}