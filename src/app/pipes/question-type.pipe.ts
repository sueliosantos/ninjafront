import { Pipe, PipeTransform } from '@angular/core';
import { QuestaoService } from '../services/questao.service';

@Pipe({
  name: 'questionType',
})
export class QuestionTypePipe implements PipeTransform {
  transform(value: number): string {
    try {
      return (
        QuestaoService.getQuestionsType().find(
          (question) => question.value === value
        )?.label ?? ''
      );
    } catch (error) {
      return '';
    }
  }
}
