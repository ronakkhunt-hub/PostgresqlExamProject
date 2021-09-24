import { Resolver, Args, Mutation, Query } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { QuestionService } from "./question.service";

@Resolver()
export class QuestionResolver {
    constructor(private questionService: QuestionService) { }

    @Mutation('createQuestion')
    async createQuestion(@Args() args) {
        return await this.questionService.create(args.data);
    }

    @Query('findAllQuestion')
    async findAllQuestion(@Args() args) {
        return await this.questionService.findAll(args.filter);
    }

    @Query("findOneQuestion")
    async findOneQuestion(@Args() args) {
        return await this.questionService.findOne({ id: args.id });
    }

    @Mutation('updateQuestion')
    async updateQuestion(@Args() args) {
        return await this.questionService.update({ where: { id: args.id }, data: args.data });
    }

    @Mutation('deleteQuestion')
    async deleteQuestion(@Args() args) {
        return await this.questionService.delete({ id: args.id });
    }
}