import { Mutation, Query, Args, Resolver } from "@nestjs/graphql";
import { TeacherService } from "./teacher.service";

@Resolver()
export class TeacherResolver {
    constructor(private teacherService: TeacherService) { }

    @Mutation('createTeacher')
    async createTeacher(@Args() args) {
        return await this.teacherService.create(args.data);
    }

    @Query('findAllTeacher')
    async findAllTeacher(@Args() args) {
        return await this.teacherService.findAll(args.filter);
    }

    @Query('findOneTeacher')
    async findOneTeacher(@Args() args) {
        return await this.teacherService.findOne({ id: args.id });
    }

    @Mutation('updateTeacher')
    async updateTeacher(@Args() args) {
        return await this.teacherService.update({ where: { id: args.id }, data: args.data });
    }

    @Mutation('deleteTeacher')
    async deleteTeacher(@Args() args) {
        return await this.teacherService.delete({ id: args.id });
    }
}