import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  providers: [PrismaService, StudentResolver, StudentService]
})
export class StudentModule { }
