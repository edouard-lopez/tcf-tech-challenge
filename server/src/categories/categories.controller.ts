import { Controller, Get } from '@nestjs/common';
import { questionsList } from '../questions/Question';
import { Category } from './Category';

@Controller('categories')
export class CategoriesController {
  @Get()
  findAll(): Array<Category> {
    const contactNFacturation: Category = {
      id: 1,
      name: 'Contact & facturation',
      questions: questionsList,
    };
    return [contactNFacturation];
  }
}
