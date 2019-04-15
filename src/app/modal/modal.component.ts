import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';
import { entity } from '../metadata';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  entity: Array<{
    title:string,
    count: number,
    article: Array<{url:string, score:number}>
  }>;
  constructor(private bottomSheetRef: MatBottomSheetRef) {}
  ngOnInit(){
    this.entity = entity.words
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
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
}
