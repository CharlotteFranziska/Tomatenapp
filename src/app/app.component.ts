// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { HeaderComponent } from './Components/header/header.component';
import { WeatherComponent } from './Components/weather/weather.component';
import { TodoComponent } from './Components/todo-app/todo.component';
import { TomatenDBComponent } from './Components/tomaten-db/tomaten-db.component';
import { provideHttpClient } from '@angular/common/http';
import { WeatherService } from './Services/weather.service';
import { CountdownComponent } from './Components/countdown/countdown.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    WeatherComponent,
    TodoComponent, 
    TomatenDBComponent,
    CountdownComponent,
    FormsModule
  ],
  providers: [
    WeatherService,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tomatenapp';
}