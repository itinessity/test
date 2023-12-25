import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-music-item',
  templateUrl: './music.html',
  styleUrls: ['./music.css']
})
export class MusicComponent {
  audio: HTMLAudioElement;
  isActive: boolean;

  constructor() {
    this.audio = new Audio();
    this.audio.src = "../assets/other/ost.mp3";
    this.audio.load();
    this.isActive = false;
  }

  play()
  {
    if (!this.isActive) {
      this.audio.play();
      this.isActive = true;
    }
    else
    {
      this.audio.pause();
      this.isActive = false;
    }
  }

}
