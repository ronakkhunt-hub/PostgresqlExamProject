import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class QuestionService {
   constructor(private prisma: PrismaService) { }

   async create(data: Prisma.QuestionCreateInput) {
      const createQuestion = await this.prisma.question.create({
         data
      });
      return {
         message: 'Question Created Successfully',
         data: createQuestion
      }
   }

   async findAll(
      skip?: number,
      take?: number,
      cursor?: Prisma.QuestionWhereUniqueInput,
      where?: Prisma.QuestionWhereInput,
      orderBy?: Prisma.QuestionOrderByInput
   ) {
      const findAllQuestion = await this.prisma.question.findMany({
         skip,
         take,
         cursor,
         where,
         orderBy
      });
      console.log("FindAll Question",findAllQuestion);
      
      return {
         message: 'Questions Found',
         data: findAllQuestion
      }
   }

   async findOne(where: Prisma.QuestionWhereUniqueInput) {
      const findOneQuestion = this.prisma.question.findUnique({
         where,
      });
      return {
         message: 'Question Found',
         data: findOneQuestion
      }
   }

   async update(params: { where: Prisma.QuestionWhereUniqueInput, data: Prisma.QuestionUpdateInput }) {
      const { where, data } = params;
      const updateQuestion = await this.prisma.question.update({
         where,
         data: data
      })
      return {
         message: "Question Updated Successfully",
         data: updateQuestion
      }
   }

   async delete(where: Prisma.QuestionWhereUniqueInput) {
      const deleteQuestion = await this.prisma.question.delete({
         where: where
      });
      return {
         message: "Question Deleted Successfully",
         data: deleteQuestion
      }
   }
}