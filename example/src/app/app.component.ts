import { Component } from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'my-app',
  moduleId: 'src/app/app.component',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})
export class AppComponent {

  public slides = [
    'First slide',
    'Second slide',
    'Third slide'
  ];

  public config: SwiperConfigInterface = {

    keyboard: true,
    mousewheel: true,
    navigation: true,

  };

}
