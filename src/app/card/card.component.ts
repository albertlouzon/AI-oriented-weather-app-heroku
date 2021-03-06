import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styles: [`
  html,body {
    background: #f2f2f2;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 18px;
	font-family: Roboto, sans-serif;
}

/* DEFAULT */

.transition {
	-webkit-transition: .5s;
	-moz-transition: .5s;
	transition: .5s;
	-webkit-transition-timing-function: cubic-bezier(.4,0,.5,1);
	-moz-transition-timing-function: cubic-bezier(.4,0,.5,1);
	transition-timing-function: cubic-bezier(.4,0,.5,1);
}

.centred {
	-webkit-transform: translateX(-50%)translateY(-50%);
	-moz-transform: translateX(-50%)translateY(-50%);
	transform: translateX(-50%)translateY(-50%);
}

.clearfix {
	clear: both;
}

.container {
    text-align: center;
}

h1 {
    margin: 1em 0 2em;
    font-weight: 100;
    color: #999;
    position: relative;
}

h1:after {
    content: "";
    width: 100px;
    height: 1px;
    position: absolute;
    bottom: -1em;
    background-color: #ddd;
    left: 50%;
    margin-left: -50px;
}

circle,line,path {
	stroke-linecap: round;
	stroke: #fff;
	stroke-width: 10px;
}

/* CARD */



#new-york .col .weather-icon svg path, #new-york .col .weather-icon svg line {
    stroke: #BB5771;
}

.star , .star-bg{
  background-color:#FFC107;
  background-image: linear-gradient(#F2994A, #F2C94C);


}
.wb_sunny, .wb_sunny-bg {
  background-image: linear-gradient(#fceabb, #f8b500);

}
.wb_iridescent, .wb_iridescent-bg {
  background-image: linear-gradient(#CAC531, #F3F9A7);
}
.filter_drama, .filter_drama-bg {
  background-image: linear-gradient(#abbaab, #ffffff);
}
.pool, .pool-bg {
  background-image: linear-gradient(#86A8E7, #91EAE4);

}
.ac_unit, .ac_unit-bg {
  background-image: linear-gradient(#556270, #FF6B6B);

}
.card {
    background-color: #fff;
    width: 310px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    margin: 2em;
    display: inline-block;
}
@media screen and (min-width: 1000px) {
  .card {
    width: 100%;

  }

}


.card svg {
	display: inline-block;
	width: 100%;
	height: auto;
}

.card-header {
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    min-height: 200px;
    z-index: 1;
    text-align: left;
}

.left-side {
    float: left;
    width: 60%;
}

h2.city {
    font-size: 1.2em;
    font-weight: 300;
    margin: 0 0 20px;
    position: relative;
    color: black;
}

h2.city:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #fff;
    left: 0;
    bottom: -11px;
}

span.currently-weather {
    text-transform: uppercase;
    font-weight: 300;
    font-size: .8em;
}

.wind {
    font-size: .8em;
    font-weight: 300;
    line-height: 1em;
    margin-top: 5px;
}

span.wind-icon {
    display: inline-block;
    width: 20px;
    background: url(../img/wind.png) no-repeat center / contain;
    height: .8em;
    vertical-align: bottom;
    margin-right: 5px;
}

span.mph {
    font-size: .6em;
    margin-left: 3px;
    text-transform: uppercase;
    line-height: 1em;
}

span.temperature {
    font-size: 2em;
    font-weight: 100;
    margin-top: 1em;
    display: block;
    line-height: 1em;
}
	
.weather-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    width: 30%;
    transform: translateY(-50%);
}

.header-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-position: center;
    background-size: cover;
    opacity: .1;
    z-index: -1;
}

.col {
    float: left;
    width: 33.33%;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
}

span.day {
    display: block;
    font-weight: 300;
    color: #888;
    text-transform: uppercase;
}

.col .weather-icon {
    position: relative;
    width: 100%;
    right: 0;
    top: 0;
    transform: none;
    margin: 20px 0 0;
}

.col .weather-icon svg {
    width: 80%;
    height: auto;
}

.col:nth-child(2) {
    border-width: 0 1px 0 1px;
    border-style: solid;
    border-color: #f9f9f9;
}

#san-francisco .col .weather-icon svg path, #san-francisco .col .weather-icon svg line {
    stroke: #3D6AA2;
}
	
	/* SVG SUNNY */
	
		/* CIRCLE */
		
		#sunny circle {
			-webkit-animation: sunny_circle 2s forwards;
			-moz-animation: sunny_circle 2s forwards;
			animation: sunny_circle 2s forwards;
		}
		
		@-webkit-keyframes sunny_circle {
			0% {stroke-dasharray: 100;stroke-dashoffset: 470;}
			100% {stroke-dasharray: 470;stroke-dashoffset: 0;}
		}
		
		@-moz-keyframes sunny_circle {
			0% {stroke-dasharray: 100;stroke-dashoffset: 470;}
			100% {stroke-dasharray: 470;stroke-dashoffset: 0;}
		}
		
		@keyframes sunny_circle {
			0% {stroke-dasharray: 100;stroke-dashoffset: 470;}
			100% {stroke-dasharray: 470;stroke-dashoffset: 0;}
		}
		
		/* LINE */
		
		#sunny line {
			stroke-dasharray: 60;
			stroke-dashoffset: 60;
			-webkit-animation: .5s sunny_line 1s forwards;
			-moz-animation: .5s sunny_line 1s forwards;
			animation: .5s sunny_line 1s forwards;
		}
		
		@-webkit-keyframes sunny_line {
			0% {stroke-dasharray: 60;stroke-dashoffset: 60;}
			100% {stroke-dasharray: 60;stroke-dashoffset: 0;}
		}
		
		@-moz-keyframes sunny_line {
			0% {stroke-dasharray: 60;stroke-dashoffset: 60;}
			100% {stroke-dasharray: 60;stroke-dashoffset: 0;}
		}
		
		@keyframes sunny_line {
			0% {stroke-dasharray: 60;stroke-dashoffset: 60;}
			100% {stroke-dasharray: 60;stroke-dashoffset: 0;}
		}
		
	/* SVG PARTIALLY */
	
		/* CLOUD */
		
		#partially path:nth-child(1) {
			-webkit-animation: partially_cloud 2s forwards;
			-moz-animation: partially_cloud 2s forwards;
			animation: partially_cloud 2s forwards;
		}
		
		@-webkit-keyframes partially_cloud {
			0% {stroke-dasharray: 730;stroke-dashoffset: 730;}
			100% {stroke-dasharray: 730;stroke-dashoffset: 0;}
		}
		
		@-moz-keyframes partially_cloud {
			0% {stroke-dasharray: 730;stroke-dashoffset: 730;}
			100% {stroke-dasharray: 730;stroke-dashoffset: 0;}
		}
		
		@keyframes partially_cloud {
			0% {stroke-dasharray: 730;stroke-dashoffset: 730;}
			100% {stroke-dasharray: 730;stroke-dashoffset: 0;}
		}
		
		/* SUN */
		
		#partially path:nth-child(2) {
			stroke-dasharray: 240;
			stroke-dashoffset: 240;
			opacity: 0;
			-webkit-animation: 2s partially_sun 1s forwards;
			-moz-animation: 2s partially_sun 1s forwards;
			animation: 2s partially_sun 1s forwards;
		}
		
		@-webkit-keyframes partially_sun {
			0% {opacity: 0;}
			1% {stroke-dasharray: 240;stroke-dashoffset: 240;opacity: 1;}
			100% {stroke-dasharray: 240;stroke-dashoffset: 480;opacity: 1;}
		}
		
		@-moz-keyframes partially_sun {
			0% {opacity: 0;}
			1% {stroke-dasharray: 240;stroke-dashoffset: 240;opacity: 1;}
			100% {stroke-dasharray: 240;stroke-dashoffset: 480;opacity: 1;}
		}
		
		@keyframes partially_sun {
			0% {opacity: 0;}
			1% {stroke-dasharray: 240;stroke-dashoffset: 240;opacity: 1;}
			100% {stroke-dasharray: 240;stroke-dashoffset: 480;opacity: 1;}
		}

.credits {
    width: 100%;
    bottom: 0;
    left: 0;
    margin-top: 3em;
    text-decoration: none;
    font-weight: 300;
    color: #000;
    padding-bottom: 2em;
    text-align: center;
}

.credits a {
    text-decoration: none;
    color: #AD536B;
    display: inline-block;
    vertical-align: middle;
}

.credits a:hover {
    color: #366597;
}

.social img {
    max-width: 30px;
    max-height: 30px;
    margin: 0 .5em;
    opacity: .3;
}

.social img:hover {
    opacity: .8;
}

.social {
    display: inline-block;
    vertical-align: middle;
    margin-left: 1em;
    padding-left: 1em;
    border-left: 1px solid #ccc;
}
  `]
})
export class CardComponent {
  @Input() name : string = 'test'
  @Input() temperature : string;
  @Input() description : string;
  @Input() icon : string;
  @Input() max : any;
  @Input() min : any;
  @Input() bg : string;
  @Input() color : string;

  constructor() {

  }
}
