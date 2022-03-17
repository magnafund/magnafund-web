import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderModule,
  PB_DIRECTION,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';

const uiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#ffffff',
  fgsColor: '#ffffff',
  pbColor: '#ffffff',
  bgsPosition: POSITION.centerCenter,
  overlayColor: 'rgba(30, 85, 36, 0.65)',
  bgsSize: 40,
  bgsType: SPINNER.fadingCircle, // background spinner type
  fgsType: SPINNER.fadingCircle, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 2, // progress bar thickness,
  bgsOpacity: 0.5,
  blur: 0.5,
  text: 'PLEASE WAIT...',
  textColor: '#ffffff',
  textPosition: 'center-center',
};

@NgModule({
  imports: [
    CommonModule,
    NgxUiLoaderModule.forRoot(uiLoaderConfig),
  ],
  exports:[NgxUiLoaderModule]
})
export class CoreModule {}
