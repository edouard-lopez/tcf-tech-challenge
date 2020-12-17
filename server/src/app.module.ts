import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './categories/categories.controller';
import { QuestionsController } from './questions/questions.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, QuestionsController],
  providers: [AppService],
})
export class AppModule {}
