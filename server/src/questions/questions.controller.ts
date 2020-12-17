import { Controller, Get, Param } from '@nestjs/common';
import { Question, questionsList } from './Question';

@Controller('questions')
export class QuestionsController {
  @Get()
  findAll(): Array<Question> {
    return questionsList;
  }

  @Get(':id')
  findOne(@Param() params): Question {
    return questionsList.find(q => q.id == params.id)
  }

}
