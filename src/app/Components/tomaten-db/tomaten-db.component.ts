import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import tomaten from '../../db/tomaten.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tomaten-db',
  imports: [CommonModule],
  templateUrl: './tomaten-db.component.html',
  styleUrls: ['./tomaten-db.component.scss']
})
export class TomatenDBComponent implements OnInit, AfterViewInit {
  tomatenDaten: any[] = [];
  expandedIndex: number = 0; // Standardmäßig erstes Element

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    // Tomaten laden, die nicht hidden = true sind
    this.tomatenDaten = tomaten.filter(tomaten => !tomaten.hidden);
    console.log(this.tomatenDaten);
  }

  ngAfterViewInit(): void {}

  toggleAccordion(index: number): void {
    // Wenn der Benutzer ein anderes Element auswählt
    this.expandedIndex = this.expandedIndex === index ? -1 : index;
  }
}
