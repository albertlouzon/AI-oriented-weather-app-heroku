import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export let tepu = '4FbZkA9jG55iOqVkQiV_OyG7wmlD9RKLChMnd5BjQLP_'
export let ibmUrl = 'https://gateway-lon.watsonplatform.net/natural-language-understanding/api/v1/analyze'
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ModalComponent } from './modal/modal.component';
import { entity } from './metadata';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
const heroku = 'https://emotional-weather-server.herokuapp.com/'
const toleranceFactor = 10
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries = country_list;
  urls = {
    theGuardian: 'https://www.theguardian.com/world/'
  }
  finalDetail: {
    // score: number,
    // icon: string,
    // mainCategories: Array<{ score: number, label: string, listOfUrls: Array<{ url: string, score: number }> }>,
    // mainKeywords: Array<any>,
    // listOfAllUrls: Array<string>
  };
  entitiesKeys = []
  entitiesValues = []
  currentEntity: any = {};
  extremes = { max: [], min: [] }
  epicArticles : { max: any[], min: any[] }
  userInput = 'bitcoin';
  showDetails = false;
  dynamicStatus = 'Lets see what feedback I can get from ' + this.userInput;
  selected = '';
  dynamicBg = 'default'
  screenHeight = window.screen.height;
  loader = false
  tiles = [ 
    { text: 'Country title and weather description', cols: 4, rows: 3, color: '#3F51B5' },
    { text: 'Weather icon and temperature', cols: 4, rows: 2, color: '#3F51B5' },
    { text: 'Categories dropdows', cols: 4, rows: 3, color: '#DDBDF1' },
    { text: 'Entities dropdows', cols: 4, rows: 2, color: 'lightgrey' },
  ];
  weatherDescription = {}
  fetchAttempts = 0
   layoutWeb = this.breakpointObserver.observe([
    // Breakpoints.HandsetLandscape,
    // Breakpoints.HandsetPortrait,
    // Breakpoints.Handset,
    // Breakpoints.Tablet,
    // Breakpoints.TabletPortrait,
    Breakpoints.Web,
    Breakpoints.WebPortrait,
    // Breakpoints.TabletLandscape,
    Breakpoints.WebLandscape,
  ]);
  
  layoutSmall = this.breakpointObserver.observe([
    Breakpoints.HandsetLandscape,
    Breakpoints.HandsetPortrait,
    Breakpoints.Handset,
    Breakpoints.Tablet,
    Breakpoints.TabletPortrait,
    Breakpoints.TabletLandscape,
  ]);
  constructor(private http: HttpClient, private bottomSheet: MatBottomSheet, private breakpointObserver: BreakpointObserver) {
    this.layoutWeb.subscribe(result => {
      if(result.matches){
        console.log('web layout detected: ', result)
      }
    });
    this.layoutSmall.subscribe(result => {
      if(result.matches){
        console.log('small layout detected: ', result)
      }
    });
    console.log('height ', this.screenHeight)
  }
  changeGlobalScoreColor(score: number) {
    if (score > 0.3) {
      this.dynamicBg = "star-bg"
      this.tiles[1].color = "#FFC107"
    } else if (score > 0) {
      this.tiles[1].color = "#FFEB3B"
      this.dynamicBg = "wb_sunny-bg"

    }
    else if (score > -0.2) {
      this.tiles[1].color = "#FFF59D"
      this.dynamicBg = "wb_iridescent-bg"

    }
    else if (score > -0.4) {
      this.tiles[1].color = "#9E9E9E"
      this.dynamicBg = "filter_drama-bg"

    }
    else if (score > -0.5) {
      this.tiles[1].color = "#03A9F4"
      this.dynamicBg = "pool-bg"

    } else {
      this.tiles[1].color = "#F44336"
      this.dynamicBg = "ac_unit-bg"

    }
  }
  convertScoreToImage(score: number) {
    if (score > 0.45) {
      return "../assets/arcenciel.png"
    } else if (score > 0) {
      return "../assets/sun.png"
    }
    else if (score > -0.2) {
      return "../assets/sunCloud.png"
    }
    else if (score > -0.4) {
      return "../assets/cloud.png"
    }
    else if (score > -0.5) {
      return "../assets/rain.png"
    } else {
      return "../assets/ice.png"
    }
  }
  convertScoreToIcon(score: number) {
    if (score > 0.45) {
      return "star"
    } else if (score > 0) {
      return "wb_sunny"
    }
    else if (score > -0.2) {
      return "wb_iridescent"
    }
    else if (score > -0.4) {
      return "filter_drama"
    }
    else if (score > -0.5) {
      return "pool"
    } else {
      return "ac_unit"
    }
  }
  convertScoreToDescription(icon) {
    return this.weatherDescription[icon]
  }
  assignColorToEntity(entity) {
    if (this.finalDetail['entities'][entity].length > 3) {
      return 'accent'
    } else {
      return 'primary'
    }
  }
  REVERSEassignColorToEntity(entity) {
    if (this.finalDetail['entities'][entity].length > 3) {
      return 'primary'
    } else {
      return 'accent'
    }
  }

  convertTemperatureToColor(score: number){
    const temperature = Math.floor((score * 50) + toleranceFactor);
    if(temperature > 10) {
      return '#4CAF50'

    } else if(temperature > -15) {
      return '#F9A825'

    } else {
      return '#C62828'

    }
  }

  convertScoreToTemperature(score: number) {
    const temperature = Math.floor((score * 50) + toleranceFactor);
    return Math.trunc(temperature) + ' °C'
  }

  onChange(value) {
    this.userInput = value
  }
  onClickingEntity(ent) {
    // entity.words.length = 0
    this.currentEntity = this.finalDetail['entities'][ent];
    // console.log(this.currentEntity)
    entity.words = this.currentEntity
    this.bottomSheet.open(ModalComponent);

  }
  filterEntities() {
    for (const entity in this.finalDetail['entities']) {
      this.finalDetail['entities'][entity].sort(function (x, y) { return x.count > 1 ? -1 : y.count > 1 ? 1 : 0; });
      if (this.finalDetail['entities'][entity].length > 4) {
        this.finalDetail['entities'][entity].length = 4
      }
    }

    this.entitiesValues = Object.keys(this.finalDetail['entities']).map(key => this.finalDetail['entities'][key]);
    this.entitiesKeys = Object.keys(this.finalDetail['entities'])
  }
  filterExtremes() {
    const filteredMin = []
    const filteredMax = []
    const extremes = this.finalDetail['extremes']
    this.extremes.min = [this.finalDetail['extremes'][0],
    this.finalDetail['extremes'][1],
    // this.finalDetail['extremes'][2]
  ];

    this.extremes.max = [this.finalDetail['extremes'][extremes.length - 1],
    this.finalDetail['extremes'][extremes.length - 2],
    // this.finalDetail['extremes'][extremes.length - 3]
  ]

    this.extremes.min.forEach((score) => {
    const full_article = this.finalDetail['metadata'].find(full_article => full_article['sentiment']['document']['score'] === score)
    if(full_article) {
      filteredMin.push(full_article)
    }
    })

    
    this.extremes.max.forEach((score) => {
      const full_article = this.finalDetail['metadata'].find(full_article => full_article['sentiment']['document']['score'] === score)
      if(full_article) {
        filteredMax.push(full_article)
      }
      })
        console.log('love, ', {max:filteredMax, min:filteredMin})
    return {max:filteredMax, min:filteredMin}
  }

  onSelectCountry() {
    this.userInput = this.userInput.toLowerCase()
    this.dynamicBg = 'default'
    this.extremes = { min: [], max: [] }
    this.epicArticles = { max: [], min: [] }
    this.entitiesKeys = []
    this.entitiesValues = []
    this.weatherDescription = {
      star: `The weather is delightful. It could not be better. ${this.userInput} is in its best shape ever. Amazing !! `,
      wb_sunny: `Its sunny for  ${this.userInput}, that keep having good indicators and is sending good vibes around the globe`,
      wb_iridescent: `Spring weather. ${this.userInput} is surrounded with a delicate air , despite the little clouds that hide the sun`,
      filter_drama: `Cloudy...nothing alarming for ${this.userInput}  . Its quite calm. Some clouds are darkening the sun. Lets hope its not the clam that precedes the storm`,
      pool: `Fucking rain ! Rain everywhere. ${this.userInput}  has to swin to cross a single street. But at least its not freezing....not yet`,
      ac_unit: `OMG. ITS FREEZING !!! I CAN HARDLY TYPE ON THE KEYBOARD. Almost only negative vibes. Join your hands and pray for ${this.userInput}, if your frozen fingers havent fallen yet !!!`,
    }
    this.dynamicStatus = 'We are analyzing articles related to ' + this.userInput + ' ...'
    this.showDetails = false
    this.loader = true
    // console.log('sending link to server from config json...',c['sources'][this.fetchAttempts]['feedlink'])
    // console.log('selected keyword :', this.userInput)
    setTimeout(() => {
      this.dynamicStatus = 'Mmmmh, ' + this.userInput + ' is delicious. Let me enjoy it a bit more'
    }, 7000);

    setTimeout(() => {
      this.dynamicStatus = "First request today ? wait a bit ;)"
    }, 10000);
    setTimeout(() => {
      this.dynamicStatus = "Damn I give up. Gimme another word"
    }, 13000);
    this.http.post(`${heroku}${this.userInput}`, null
    ).subscribe((res) => {
      console.log('AU CALME', res)
      this.finalDetail = res
       this.filterEntities()
       this.epicArticles =  this.filterExtremes()
       console.log('epic articles:', this.epicArticles)
      this.changeGlobalScoreColor(this.finalDetail['score'])
      this.showDetails = true
      this.loader = false
      // this.fetchAttempts = 0
      // this.fetchLinksTemplate(res);
    }, error => {
      console.log('could not fetch rss feed', error, ' num of fetch attemps ', this.fetchAttempts)
      this.fetchAttempts++;
      // this.onSelectCountry(c)
      this.loader = false
    })
  }
  title = 'albert-louzon-meteos';
}