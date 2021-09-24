import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';

@Resolver()
export class StudentResolver {
  constructor(private studentService: StudentService) { }

  @Mutation('createStudent')
  async createStudent(@Args() args) {
    const createUser = await this.studentService.create(args.data);
    return createUser;
  }

  @Query('getExamQuestion')
  async getExamQuestion() {
    const getLimitQuestion = await this.studentService.findQuestion();
    return getLimitQuestion;
  }

  @Query('findAllStudent')
  async findAllStudent(@Args() args) {
    return await this.studentService.findAll(args.filter);
  }

  @Query('findOneStudent')
  async findOneStudent(@Args() args) {
    return await this.studentService.findOne({ id: args.id });
  }

  @Mutation('updateStudent')
  async updateStudent(@Args() args) {
    return await this.studentService.update({ where: { id: args.id }, data: args.data });
  }

  @Mutation('deleteStudent')
  async deleteStudent(@Args() args) {
    return await this.studentService.delete({ id: args.id });
  }

  @Mutation('giveExam')
  async giveExam(@Args() args) {
    console.log(`args`, args)
    return await this.studentService.giveExam({ where: { id: args.id } }, args.data);
  }
}
