import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-plejer',
  templateUrl: './video-plejer.component.html',
  styleUrls: ['./video-plejer.component.scss']
})
export class VideoPlejerComponent implements OnInit, OnChanges {

  @Input() snimci: string[];

  private ytUrlPrefiks: string = 'https://www.youtube.com/embed/';
  bezbjedniUrloviSnimaka: Array<SafeResourceUrl>;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.snimci) {
      this.bezbjedniUrloviSnimaka = this.snimci.map(snimak => this.domSanitizer.bypassSecurityTrustResourceUrl(this.ytUrlPrefiks + snimak));
    }
    else {
      this.bezbjedniUrloviSnimaka = this.snimci;
    }
    
  }

}
