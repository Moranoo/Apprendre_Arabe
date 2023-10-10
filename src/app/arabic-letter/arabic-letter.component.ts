import { Component, OnInit } from '@angular/core';
import { LETTERS_DATA } from '../letters-data';
import { Router } from '@angular/router';

interface Letter {
  name: string;
  description: string;
  image: string;
  sound: string;
  examples: {
    isolated: string;
    beginning: string;
    middle: string;
    end: string;
  };
}

@Component({
  selector: 'app-arabic-letter',
  templateUrl: './arabic-letter.component.html',
  styleUrls: ['./arabic-letter.component.css']
})
export class ArabicLetterComponent implements OnInit {
  letters: Letter[] = LETTERS_DATA;
  letterRows: Letter[][] = [];
  selectedLetter: Letter | null = null;

  constructor(private router: Router) { }

  navigateToQuiz(): void {
    this.router.navigate(['/quiz']);
  }
  
  ngOnInit() {
    // Créez des lignes de lettres avec 4 lettres par ligne
    for (let i = 0; i < this.letters.length; i += 4) {
      this.letterRows.push(this.letters.slice(i, i + 4));
    }
  }

  showDetails(letter: Letter): void {
    this.selectedLetter = this.selectedLetter === letter ? null : letter;
  }
}
