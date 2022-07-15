import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { TimerPageComponent } from './pages/Timer/timer-page/timer-page.component';
import { FormsModule } from '@angular/forms';
import { StopWatchPageComponent } from './pages/StopWatch/stop-watch-page/stop-watch-page.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';

@NgModule({
  declarations: [AppComponent, TimerPageComponent, StopWatchPageComponent, SelectBoxComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
