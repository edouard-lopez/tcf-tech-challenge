import { Controller, Get } from '@nestjs/common';
import { Question, questionsList } from './Question';

@Controller('questions')
export class QuestionsController {
  @Get()
  findAll(): Array<Question> {
    return questionsList;
  }
}
