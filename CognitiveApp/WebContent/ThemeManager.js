/*
 * 5 Tones: Anger, Disgust, Fear, Joy, Sadness
 * 
 * http://www.optimisticspark.com/colour-mania/
 * 
 * Anger - Blue
 * Disgust - Brown
 * Fear - Orange
 * Joy - Yellow
 * Sadness - Red
 */

var changeTheme = function(letter) {
	$("[data-role=page]").attr("class", function(i, cl) {
		return cl.replace(/ui-page-theme-./g, "")
	}).page("option", "theme", letter)
		
	//console.log($("[data-role=page]").page("option", "theme"))
}

function setTheme(tone) {
	//alert(tone);
	
	if(tone === "Anger") {
		changeTheme("a");
	}
	else if(tone === "Disgust") {
		changeTheme("b");
	}
	else if(tone === "Fear") {
		changeTheme("c");
	}
	else if(tone === "Joy") {
		changeTheme("d");
	}
	else if(tone === "Sadness") {
		changeTheme("e");
	}
	else {
		changeTheme("f"); // Default theme
	}
}

function setBrightness(lux) {
	var filter = "brightness(" + getBrightness(lux) + "%)";
	
	$("#page").css('filter', filter)
				.css('webkitFilter', filter)
	  			.css('mozFilter', filter)
	  			.css('oFilter', filter)
	  			.css('msFilter', filter);
}

var brightnessCalibration = 0;

var setBrightnessCalibration = function(brightnessValue) {
	brightnessCalibration = brightnessValue;
}

// 100% baseline
var getBrightness = function(lux) {
	var maxP = 110; // Max brightness percentage
	var maxS = 20; // Base value from sensor, base value from a lighted room
	
	var minS = 10; // Min value from sensor
	
	if(lux < minS) {
		lux = minS;
	}
	
	var brightness = (lux * maxP) / maxS;
	
	if(brightness > maxP) {
		brightness = maxP;
	}
	
	return brightness + parseInt(brightnessCalibration);
}