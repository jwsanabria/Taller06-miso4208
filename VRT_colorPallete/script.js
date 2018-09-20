var numRandomColors = 5;

function randomPalette() {
    var gradeInterval = 1 / numRandomColors;

    var r, g, b;
    r = getRandom(0, 255);
    g = getRandom(0, 255);
    b = getRandom(0, 255);

    var hsl = rgbToHsl(r, g, b);
    var colorsHex = [];

    for (var i = 0; i < numRandomColors; i++) {
        hsl[0] = getNextHue(hsl[0], gradeInterval);
        var rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
        var hex = rgbToHex(rgb[0], rgb[1], rgb[2]).toUpperCase();
        colorsHex.push(hex);
    }

    generateRules(colorsHex);
}

function generateRules(colors) {
    var rules = [
        `.website-background{ color: ${colors[0]};}`,
        `.element-text{ color: ${colors[1]};}`,
        `.element-border{ border-color: ${colors[2]};}`,
        `.element-background{ background-color: ${colors[3]};}`,
        `.header{ color: ${colors[4]};}`
    ];
    for (var i = 0; i < colors.length; i++) {
        $(`#color${i + 1}`).css('background-color', colors[i]);
    }
    $("textarea#css-rules").val(rules.join('\r\n\n'));
}

function clear() {
    var colors = [
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF'
    ];
    generateRules(colors);
}

// Numeros aleatorios entre un minimo y un maximo, incluyendo los dos numeros
function getRandom(minimo, maximo) {
    min = Math.ceil(minimo);
    max = Math.floor(maximo);
    return Math.floor(Math.random() * (maximo - (minimo + 1)) + minimo);
}

function getNextHue(h, distance) {
    h += distance;
    h = h > 1 ? h - 1 : h;
    return h;
}


/**
 * 
 * @param {*} c 
 */
function convertToHex(c) {
    c = parseInt(c);
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

/**
 * Converts an RGB color value to Hexadecimal.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns hex to be an 8 digit hexadecimal number
 * 
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @returns String  hex     The hex representation    
 */
function rgbToHex(r, g, b) {
    var hex = "#" + convertToHex(r) + convertToHex(g) + convertToHex(b);
    return hex;
}