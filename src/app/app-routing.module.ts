import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GameComponent} from "./game/game.component";
import {IntroComponent} from "./intro/intro.component";
import {ManualComponent} from "./manual/manual.component";
import {TheEndComponent} from "./the-end/the-end.component";
import {TradeComponent} from "./trade/trade.component";

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'manual',
    component: ManualComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'trade',
    component: TradeComponent
  },
  {
    path: 'the-end',
    component: TheEndComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
