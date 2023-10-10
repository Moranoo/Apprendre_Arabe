import { Component, ChangeDetectorRef } from '@angular/core';
import { LETTERS_DATA } from '../letters-data'; // Assurez-vous que le chemin est correct
import { Router } from '@angular/router';

interface Letter {
  name: string;
  description: string;
  // ... autres propriétés
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  letters: Letter[] = LETTERS_DATA;
  selectedLetter: Letter | null = null;
  userAnswer: string = '';
  attempts: number = 0;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.selectRandomLetter();
  }
  navigateToLetters(): void {
    this.router.navigate(['/']);
  }

  selectRandomLetter(): void {
    const randomIndex = Math.floor(Math.random() * this.letters.length);
    this.selectedLetter = this.letters[randomIndex];
  }

  flashMessage: string = '';
  flashMessageType: string = ''; // 'success' ou 'danger'
  

  checkAnswer(): void {
    if (this.userAnswer === this.selectedLetter?.name) {
      // Bonne réponse
      this.showFlashMessage('Bravo !', 'success');
      this.moveToNextQuestion();
    } else {
      // Mauvaise réponse
      this.attempts++;
      if (this.attempts < 2) {
        this.showFlashMessage('Erreur dernière chance !', 'danger');
      } else {
        this.showFlashMessage('Raté question suivante !', 'danger');
        this.moveToNextQuestion();
      }
    }
  }
  showFlashMessage(message: string, type: string): void {
    this.flashMessage = message;
    this.flashMessageType = type;
    this.cdr.detectChanges(); 
    setTimeout(() => {
      this.flashMessage = '';
      this.flashMessageType = '';
    }, 3000);
  }

  moveToNextQuestion(): void {
    this.attempts = 0;
    this.userAnswer = '';
    this.selectRandomLetter();
  }
}
