import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { TeacherResolver } from "./teacher.resolver";
import { TeacherService } from "./teacher.service";

@Module({
    providers: [PrismaService, TeacherResolver, TeacherService],
})

export class TeacherModule { }