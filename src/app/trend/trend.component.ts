import { Component } from '@angular/core';
import { Images } from '../../data';

@Component({
  selector: 'app-trend',
  standalone: true,
  imports: [],
  templateUrl: './trend.component.html',
  styleUrl: './trend.component.css'
})
export class TrendComponent {
  BeyondEarth= Images[0];
  BottomGear=Images[1];
  Undiscovered=Images[2];
  Ninety=Images[3];
  DarkSide=Images[4];
  GreatLands= Images[5];
  Diary= Images[6];
  EarthUntouched = Images[7];
  LandBeyond=Images[8];
  DuringHunt= Images[9];
  AutoSpoort=Images[10];
  SameAnswer=Images[11];
  BelowEcho= Images[12];
  TheRockies= Images[13];
  Relentless=Images[14];
  Community=Images[15];
  VanLife=Images[16];
  Heiress=Images[17];
  

}
