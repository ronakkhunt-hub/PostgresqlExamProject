import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentService {
      constructor(private prisma: PrismaService) { }

      async create(data: Prisma.StudentCreateInput) {
            const email = data.email.toLowerCase();
            const exist = await this.prisma.student.findUnique({ where: { email: email } });
            if (exist) {
                  throw new BadRequestException('Email Already Exist');
            }
            let password
            if (data.password) {
                  password = await bcrypt.hash(data.password, 10);
            }

            const createUser = await this.prisma.student.create({
                  data: {
                        ...data,
                        email,
                        password,
                  },
            });
            return {
                  message: 'User Registered Successfully',
                  data: createUser
            }
      }

      async findAll(params: {
            skip?: number,
            take?: number,
            cursor?: Prisma.StudentWhereUniqueInput;
            where?: Prisma.StudentWhereInput;
            orderBy?: Prisma.StudentOrderByInput;
      }) {
            const { skip, take, cursor, orderBy, where } = params;
            const FindAllUser = await this.prisma.student.findMany({
                  skip,
                  take,
                  cursor,
                  orderBy,
                  where
            });

            return {
                  message: 'Users Found',
                  data: FindAllUser
            }
      }

      async findOne(
            itemWhereUniqueInput: Prisma.StudentWhereUniqueInput,
      ) {
            const findOneUser = await this.prisma.student.findUnique({
                  where: itemWhereUniqueInput,
            });
            return {
                  message: 'User Found',
                  data: findOneUser
            }
      }


      async update(params: { where: Prisma.StudentWhereUniqueInput, data: Prisma.StudentUpdateInput }) {
            const { where, data } = params;

            const update = await this.prisma.student.update({
                  where,
                  data: data
            });
            return {
                  message: 'User Updated Successfully',
                  data: update
            }
      }

      async delete(data: Prisma.StudentWhereUniqueInput) {
            const deleteUser = await this.prisma.student.delete({ where: { id: data.id } });
            if (!deleteUser) {
                  throw new BadRequestException('User Not Found');
            }
            return {
                  message: 'User Deleted Successfully',
                  data: deleteUser
            }
      }

      async RandomQues() {
            const Result = await this.prisma.question.findMany();
            let currentIndex = Result.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex -= 1;
                  temporaryValue = Result[currentIndex];
                  Result[currentIndex] = Result[randomIndex];
                  Result[randomIndex] = temporaryValue;
            }
            return Result;
      }

      async findQuestion() {
            const examQuestion = await this.RandomQues();
            console.log(examQuestion);
            return {
                  message: "Question",
                  data: examQuestion
            }
      }

      async giveExam(where: any, data:any) {
            const answers = data;
            let Marks = 0;
            for (let i = 0; i < answers.length; i++) {

                  let Id = answers[i].questionId;
                  let Submitted = answers[i].correct

                  const Question = await this.prisma.question.findUnique({ where: { id: Id } })
                  if (Submitted === Question.correct) {
                        Marks++;
                  } else {
                  }
            }

            const pastexam = JSON.stringify(Marks);
            const FindUser = await this.prisma.student.update({
                  ...where,
                  data:{
                        pastexam: pastexam 
                  }
            });
            return {
                  message: `${Marks} Correct answers Out Of ${answers.length}`,
            }
      }
}
