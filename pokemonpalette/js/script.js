// 画像から色を抽出
var input = new Vue({
    el: '#input',
    data: {
        img: '',
        iconColors: {
            color0: '',
            color1: '',
            color2: '',
            color3: '',
        },
        paletteColors: []
    },
    methods: {
        onFileChange: function () {
            var colorlist = [];
            var chiceColor = document.getElementById('pullDownList');
            var img = document.createElement('img');
            img.setAttribute('src', './pokemonpalette/img/' + chiceColor.value + '.png')
            //img.setAttribute('src', './pokemonpalette/thumbnails/' + chiceColor.value + '.png')
            var vm = this;
            vm.img = './pokemonpalette/img/' + chiceColor.value + '.png';
            //vm.img = './pokemonpalette/thumbnails/' + chiceColor.value + '.png';

            img.addEventListener('load', function() {
                // vibrant
                console.log("vibrant");
                var vibrant = new Vibrant(img);
                var swatches = vibrant.swatches()
                for (var swatch in swatches)
                    if (swatches.hasOwnProperty(swatch) && swatches[swatch])
                        colorlist.push(swatches[swatch].getHex());
                // /vibrant

                // colorThief
                console.log("colorThief");
                var colorThief = new ColorThief();
                var color = colorThief.getColor(img);
                color = rgb2hex(color);
                if (colorlist.indexOf(color) === -1) {
                    colorlist.push(color);
                }
                // /colorThief
            });

            // rgbaster
            RGBaster.colors(img, {
                exclude: [ 'rgb(0,0,0)', 'rgb(255,255,255)' ],
                success: function(payload) {
                    console.log("rgbaster");
                    var dominant = new RGBColor(payload.dominant).toHex();
                    if (colorlist.indexOf(dominant) === -1) {
                        colorlist.unshift(dominant);
                    }
                    var secondary = new RGBColor(payload.secondary).toHex();
                    if (colorlist.indexOf(secondary) === -1) {
                        colorlist.push(secondary);
                    }
                    for (let i = 0; i < payload.palette.length; i++) {
                        var palette = new RGBColor(payload.palette[i]).toHex();
                        if (colorlist.indexOf(palette) === -1) {
                            colorlist.push(palette);
                        }
                    }
                    // /rgbaster

                    // colorlist
                    for (let i = 0; i < colorlist.length; i++) {
                        if (i == 0)
                            vm.iconColors.color0 = colorlist[0];
                        if (i == 1)
                            vm.iconColors.color1 = colorlist[1];
                        if (i == 2)
                            vm.iconColors.color2 = colorlist[2];
                        if (i == 3)
                            vm.iconColors.color3 = colorlist[3];
                    }

                    var paletteList = [];
                    for (let i = 0; i < 9; i++) {
                        paletteList.push(colorlist[i]);
                    }
                    vm.paletteColors = paletteList;
                    console.log("paletteColors: ", vm.paletteColors);
                    // /colorlist
                }
            });

            // rgb > hex
            function rgb2hex ( rgb ) {
                return "#" + rgb.map( function ( value ) {
                    return ( "0" + value.toString( 16 ) ).slice( -2 ) ;
                } ).join( "" ) ;
            }
        },
        changeColor: function() {
            var vm = this;
            var colors = vm.paletteColors;
            var nowcolor = vm.iconColors.color0;
            for (let i = 0; i < colors.length; i++) {
                if (colors[i] == nowcolor) {
                    if (i == colors.length-1) {
                        vm.iconColors.color0 = colors[0];
                    } else {
                        vm.iconColors.color0 = colors[i+1];
                    }
                }
            }
        },
        changeColor1: function() {
            var vm = this;
            var colors = vm.paletteColors;
            var nowcolor = vm.iconColors.color1;
            for (let i = 0; i < colors.length; i++) {
                if (colors[i] == nowcolor) {
                    if (i == colors.length-1) {
                        vm.iconColors.color1 = colors[0];
                    } else {
                        vm.iconColors.color1 = colors[i+1];
                    }
                }
            }
        },
        changeColor2: function() {
            var vm = this;
            var colors = vm.paletteColors;
            var nowcolor = vm.iconColors.color2;
            for (let i = 0; i < colors.length; i++) {
                if (colors[i] == nowcolor) {
                    if (i == colors.length-1) {
                        vm.iconColors.color2 = colors[0];
                    } else {
                        vm.iconColors.color2 = colors[i+1];
                    }
                }
            }
        },
        changeColor3: function() {
            var vm = this;
            var colors = vm.paletteColors;
            var nowcolor = vm.iconColors.color3;
            for (let i = 0; i < colors.length; i++) {
                if (colors[i] == nowcolor) {
                    if (i == colors.length-1) {
                        vm.iconColors.color3 = colors[0];
                    } else {
                        vm.iconColors.color3 = colors[i+1];
                    }
                }
            }
        }
    }
});


// 指定したidを画像にしてダウンロード
$(document).ready(function(){
    var element = $("#html-content-holder"); // global variable
    var getCanvas; // global variable
 
    $("#btn-Preview-Image").on('click', function () {
        html2canvas(element, {
            onrendered: function (canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
                $("#btn-Convert-Html2Image")[0].click();
            }
        });
    });

    $("#btn-Convert-Html2Image").on('click', function () {
        var imgageData = getCanvas.toDataURL("image/png");
        // Now browser starts downloading it instead of just showing it
        var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $("#btn-Convert-Html2Image").attr("download", "icon.png").attr("href", newData);
    });

});
