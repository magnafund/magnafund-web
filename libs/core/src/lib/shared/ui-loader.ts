import { NgxUiLoaderConfig, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';

export class UiLoader {
  static load (): NgxUiLoaderConfig {
    return {
      bgsColor: '#000033',
      bgsPosition: POSITION.centerCenter,
      bgsSize: 70,
      bgsType: SPINNER.ballSpinClockwiseFadeRotating, // background spinner type
      fgsType: SPINNER.ballSpinClockwiseFadeRotating, // foreground spinner type
      pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
    };
  }
}
