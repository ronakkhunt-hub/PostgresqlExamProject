import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { PrismaService } from './prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './prisma/graphql-options';
import { TeacherModule } from './teacher/teacher.module';
import { QuestionModule } from './question/question.module';

@Module({
    imports: [
        GraphQLModule.forRootAsync({
            useClass: GraphqlOptions,
          }),
        StudentModule,
        TeacherModule,
        QuestionModule
    ],
    providers: [PrismaService],
})

export class MainModule{}