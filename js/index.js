var earth;
var options;

var volcanoes_markers = ['Vezuvi', 'Etna', 'Sinabung Sumatra', 'Dukono Halmahera', 'Villarrica Central Chile', 'Sangay Ecuador', 'Ubinas Peru']; 
var mountains_markers = ['Mount Everest', 'Mount Elbrus', 'Mount Kilimanjaro', 'Mount Kosciuszko', 'Mount Aconcagua'];
var waterfalls_markers = ['Detian Waterfall', 'Krimml Waterfalls', 'Tugela River Falls', 'Wallaman Falls', 'Yosemite Falls'];

var volcanoes_names = [];
var mountains_names = [];
var waterfalls_names = [];

var volcanoes_coordinates = [
								[40.8167, 14.4333],
								[37.7550, 14.9950],
								[3.1700, 98.3920],
								[1.6995, 127.8781],
								[-39.4208, -71.9392],
								[-1.8333, -1.8333],
								[-16.3550, -70.9031]
							];
var mountains_coordinates = [
								[27.9881, 86.9253],
								[43.3550, 42.4392],
								[-3.0758, 37.3533],
								[-36.4560, 148.2633],
								[-32.6534, -70.0111]
							];
var waterfalls_coordinates = [
								[22.8564, 106.7220],
								[47.1981, 12.1714],
								[-28.7522, 28.8941],
								[-18.5922, 145.8014],
								[37.7550, -119.5973]
							];
var volcanoes_images = [];
var mountains_images = [];
var waterfalls_images = [];

var show_v = true;
var show_m = true;
var show_w = true;

var add_volcano_names = true;
var add_mountain_names = true;
var add_waterfall_names = true;

function show_volcanoes() {
	if(show_v == true) {
		show_v = false;
		
		for(var index in volcanoes_markers) {
			if(add_volcano_names == true) {
				volcanoes_names.push(volcanoes_markers[index]);
			}
			
			volcanoes_markers[index] = WE.marker([volcanoes_coordinates[index][0], volcanoes_coordinates[index][1]]).addTo(earth);
			volcanoes_markers[index].bindPopup("<h1>" + volcanoes_names[index] + "</h1><p>(<span style='font-style: italic;'>Volcano</span>)</p>", 
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

function initialize() {
	options = {atmosphere: true, center: [0, 0], zoom: 0};
	earth = new WE.map('earth_div', options);
	WE.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
	  subdomains: '1234',
	  attribution: 'Tiles Courtesy of MapQuest'
	}).addTo(earth);
}