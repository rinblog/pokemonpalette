<?php
/*
Template Name: pokemon palette
*/
?>
<!DOCTYPE HTML>
<html lang="ja">

<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-142127635-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', 'UA-142127635-1');
	</script>

	<meta charset="UTF-8">
	<title>ポケモンパレット</title>
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<link href="https://rinblog.org/wp-content/themes/jin/pokemonpalette/css/style.css" type="text/css" rel="stylesheet" />
</head>

<body onload="readFirst()">
	<h1>ポケモンパレット</h1>

	<div class="container" id="input">
		<div class="select">
			<h2>名前を選択</h2>
			<select type="file" v-on:change="onFileChange" id="pullDownList" class="pulllist" name="imglist"></select>
		</div>

		<div class="results">
			<div class="result">
				<div class="mainimg" v-show="img">
					<img :src="img" />
				</div>
			</div>
			<div class="iconBorder">
				<div class="result2" id="html-content-holder">
					<div id="iconimg" class="maincolor" v-show="img" v-bind:style="{backgroundColor: iconColors.color0}" v-on:click="changeColor">
					</div>
					<div class="subcolor">
						<div class="color1" v-show="img" v-bind:style="{backgroundColor: iconColors.color1}" v-on:click="changeColor1"></div>
						<div class="color2" v-show="img" v-bind:style="{backgroundColor: iconColors.color2}" v-on:click="changeColor2"></div>
						<div class="color3" v-show="img" v-bind:style="{backgroundColor: iconColors.color3}" v-on:click="changeColor3"></div>
					</div>
				</div>
			</div>
		</div>

		<div class="result3">
			<div v-for="i in paletteColors" class="bgcolor" v-bind:style="{backgroundColor: i}"></div>
		</div>

		<div class="downloadBtn">
			<a href="#" id="btn-Preview-Image" class="circle_spread_btn">アイコンダウンロード</a>
			<a href="#" id="btn-Convert-Html2Image"></a>
			<div id="previewImage"></div>
		</div>
	</div>

	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/vibrant.js/1.0.0/Vibrant.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.0.1/color-thief.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/rgbaster@1.0.0/rgbaster.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
	<!--
	<script src="https://rinblog.org/wp-content/themes/jin/pokemonpalette/js/html2canvas.js"></script>
	-->
	<script src="https://rinblog.org/wp-content/themes/jin/pokemonpalette/js/getlist.js"></script>
	<script src="https://rinblog.org/wp-content/themes/jin/pokemonpalette/js/pokelist.js"></script>
	<script src="https://rinblog.org/wp-content/themes/jin/pokemonpalette/js/rgbcolor.js"></script>
	<script src="https://rinblog.org/wp-content/themes/jin/pokemonpalette/js/script.js"></script>
</body>

</html>