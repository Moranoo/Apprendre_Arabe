import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArabicLetterComponent } from './arabic-letter/arabic-letter.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: ArabicLetterComponent },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
