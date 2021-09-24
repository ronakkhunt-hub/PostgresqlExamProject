import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { QuestionResolver } from './Question.resolver';
import { QuestionService } from './Question.service';

@Module({
  providers: [PrismaService, QuestionResolver, QuestionService]
})
export class QuestionModule { }