var earth;
var options;

var volcanoes_markers = ['Vezuvi', 'Sinabung Sumatra', 'Ubinas Peru']; 
var mountains_markers = ['Mount Everest', 'Mount Elbrus', 'Mount Aconcagua'];
var waterfalls_markers = ['Krimml Waterfalls', 'Tugela River Falls', 'Wallaman Falls', 'Yosemite Falls'];
var auroras_markers = ['Aurora'];
var iceberg_markers = ['IceBerg','IceBerg'];

var volcanoes_names = [];
var mountains_names = [];
var waterfalls_names = [];
var auroras_names = [];
var iceberg_names = [];

var volcanoes_coordinates = [
								[40.8167, 14.4333],
								[3.1700, 98.3920],
								[-16.3550, -70.9031]
							];
var mountains_coordinates = [
								[27.9881, 86.9253],
								[43.3550, 42.4392],
								[-32.6534, -70.0111]
							];
var waterfalls_coordinates = [
								[47.1981, 12.1714],
								[-28.7522, 28.8941],
								[-18.5922, 145.8014],
								[37.7550, -119.5973]
							];
var auroras_coordinates = [[70.0000, 18.0000]];
var iceberg_coordinates = [[89.9997, 0.0000],
							[-89.9997, 0.0000]];

							
var show_v = true;
var show_m = true;
var show_w = true;
var show_a = true;
var show_i = true;
var rotate_earth = true;

var add_volcano_names = true;
var add_mountain_names = true;
var add_waterfall_names = true;
var add_auroras_names = true;
var add_iceberg_names = true;

function show_volcanoes() {
	if(show_v == true) {
		show_v = false;
		
		for(var index in volcanoes_markers) {
			if(add_volcano_names == true) {
				volcanoes_names.push(volcanoes_markers[index]);
			}
			
			volcanoes_markers[index] = WE.marker([volcanoes_coordinates[index][0], volcanoes_coordinates[index][1]]).addTo(earth);
			volcanoes_markers[index].bindPopup("<h1>" +  volcanoes_names[index] +" </h1><button id='invBtn' value='Click'>Post</button>", 
												{maxWidth: 150, closeButton: true});	
            
		}
	} else {
		show_v = true;
		
		for(var index in volcanoes_markers) {
			volcanoes_markers[index].detach();	
		}
	}
	
	add_volcano_names = false;
}

function show_mountains() {
	if(show_m == true) {
		show_m = false;
		
		for(var index in mountains_markers) {
			if(add_mountain_names == true) {
				mountains_names.push(mountains_markers[index]);
			}
			
			mountains_markers[index] = WE.marker([mountains_coordinates[index][0], mountains_coordinates[index][1]]).addTo(earth);
			mountains_markers[index].bindPopup("<h1>" + mountains_names[index] + "</h1><p>(<span style='font-style: italic;'>Mountain</span>)</p>", 
												{maxWidth: 150, closeButton: true});	
		}
	} else {
		show_m = true;
		
		for(var index in mountains_markers) {
			mountains_markers[index].detach();	
		}
	}
	
	add_mountain_names = false;
}

function show_waterfalls() {
	if(show_w == true) {
		show_w = false;
		
		for(var index in waterfalls_markers) {
			if(add_waterfall_names == true) {
				waterfalls_names.push(waterfalls_markers[index]);
			}
			
			waterfalls_markers[index] = WE.marker([waterfalls_coordinates[index][0], waterfalls_coordinates[index][1]]).addTo(earth);
			waterfalls_markers[index].bindPopup("<h1>" + waterfalls_names[index] + "</h1><p>(<span style='font-style: italic;'>Waterfall</span>)</p>", 
												{maxWidth: 150, closeButton: true});	
		}
	} else {
		show_w = true;
		
		for(var index in waterfalls_markers) {
			waterfalls_markers[index].detach();	
		}
	}
	
	add_waterfall_names = false;
}

function show_auroras() {
	if(show_a == true) {
		show_a = false;
		
		for(var index in auroras_markers) {
			if(add_auroras_names == true) {
				auroras_names.push(auroras_markers[index]);
			}
			
			auroras_markers[index] = WE.marker([auroras_coordinates[index][0], auroras_coordinates[index][1]]).addTo(earth);
			auroras_markers[index].bindPopup("<h1>" + auroras_names[index] + "</h1><p>(<span style='font-style: italic;'>Auroras</span>)</p>", 
												{maxWidth: 150, closeButton: true});	
		}
	} else {
		show_a = true;
		
		for(var index in auroras_markers) {
			auroras_markers[index].detach();	
		}
	}
	
	add_auroras_names = false;
}

function show_iceberg() {
	if(show_i == true) {
		show_i = false;
		
		for(var index in iceberg_markers) {
			if(add_iceberg_names == true) {
				iceberg_names.push(iceberg_markers[index]);
			}
			
			iceberg_markers[index] = WE.marker([iceberg_coordinates[index][0], iceberg_coordinates[index][1]]).addTo(earth);
			iceberg_markers[index].bindPopup("<h1>" + iceberg_names[index] + "</h1><p>(<span style='font-style: italic;'>IceBerg</span>)</p>", 
												{maxWidth: 150, closeButton: true});	
		}
	} else {
		show_i = true;
		
		for(var index in iceberg_markers) {
			iceberg_markers[index].detach();	
		}
	}
	
	add_iceberg_names = false;
}

function disable_rotation()
{
		 rotate_earth = false;
		var before = null;
        requestAnimationFrame(function animate(now) {
            var c = earth.getPosition();
            var elapsed = before? now - before: 0;
            before = now;
            
			if(rotate_earth == true)
			{
			earth.setCenter([c[0], c[1] + 0.1*(elapsed/60)]);
            requestAnimationFrame(animate);
			}
        });
}

function enable_rotation()
{
	 rotate_earth = true;
	 
		var before = null;
        requestAnimationFrame(function animate(now) {
            var c = earth.getPosition();
            var elapsed = before? now - before: 0;
            before = now;
            
			if(rotate_earth == true)
			{
			earth.setCenter([c[0], c[1] + 0.05*(elapsed/60)]);
            requestAnimationFrame(animate);
			}
        });
}



function initialize() 
{
	options = {atmosphere: true, center: [0, 0], zoom: 2.3};
	earth = new WE.map('earth_div', options);
	WE.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
	  subdomains: '1234',
	  attribution: 'Tiles Courtesy of MapQuest'
	}).addTo(earth);
	var before = null;
        requestAnimationFrame(function animate(now) {
            var c = earth.getPosition();
            var elapsed = before? now - before: 0;
            before = now;
            earth.setCenter([c[0], c[1] + 0.1*(elapsed/60)]);
			if (rotate_earth == true)
            requestAnimationFrame(animate);
        });
}



