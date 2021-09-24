import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt"
import { BadRequestException } from "@nestjs/common";

@Injectable()
export class TeacherService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.TeacherCreateInput) {
        const email = await data.email.toLowerCase();
        const emailExist = await this.prisma.teacher.findUnique({ where: { email: email } })
        if (emailExist) {
            throw new BadRequestException("Email Already Exist");
        }
        let password;
        if (data.password) {
            password = await bcrypt.hash(data.password, 10);
        }
        const createTeacher = await this.prisma.teacher.create({
            data: {
                ...data,
                email,
                password,
            }
        });
        return {
            message: 'Teacher Registered Successfully',
            data: createTeacher
        }
    }

    async findAll(
        skip?: number,
        take?: number,
        cursor?: Prisma.TeacherWhereUniqueInput,
        where?: Prisma.TeacherWhereInput,
        orderBy?: Prisma.TeacherOrderByInput
    ) {
        const findAllTeacher = await this.prisma.teacher.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
        return {
            message: 'Teachers Found',
            data: findAllTeacher
        }
    }

    async findOne(where: Prisma.TeacherWhereUniqueInput) {
        const findOneTeacher = await this.prisma.teacher.findUnique({
            where
        })
        return {
            message: 'Teacher Found',
            data: findOneTeacher
        }
    }

    async update(params: { where: Prisma.TeacherWhereUniqueInput, data: Prisma.TeacherUpdateInput }) {
        const { where, data } = params;

        delete data.password;
        const updateTeacher = await this.prisma.teacher.update({
            where,
            data: {
                ...data,
            }
        });
        return {
            message: 'Teacher Updated Successfully',
            data: updateTeacher
        }
    }

    async delete(where: Prisma.TeacherWhereUniqueInput) {
        const deleteTeacher = await this.prisma.teacher.delete({
            where: where
        })
    }
}