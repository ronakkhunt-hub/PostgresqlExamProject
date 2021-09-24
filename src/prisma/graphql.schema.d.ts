
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CommonFilterInput {
    skip?: number;
    take?: number;
    cursor?: Object;
    where?: Object;
    orderBy?: Object;
}

export class GiveExamInput {
    questionId?: string;
    correct?: string;
}

export class StudentInput {
    username: string;
    email: string;
    password: string;
}

export class UpdateStudentInput {
    username: string;
    email: string;
}

export class TeacherInput {
    username: string;
    email: string;
    password: string;
}

export class UpdateTeacherInput {
    username: string;
    email: string;
}

export class QuestionInput {
    question: string;
    choice1: string;
    choice2: string;
    choice3: string;
    choice4: string;
    correct: string;
}

export class UpdateQuestionInput {
    question: string;
    choice1: string;
    choice2: string;
    choice3: string;
    choice4: string;
    correct: string;
}

export abstract class IMutation {
    abstract createStudent(data: StudentInput): StudentResponse | Promise<StudentResponse>;
    abstract deleteStudent(id: string): StudentResponse | Promise<StudentResponse>;
    abstract updateStudent(id: string, data: UpdateStudentInput): StudentResponse | Promise<StudentResponse>;
    abstract giveExam(id: string, data?: GiveExamInput[]): ExamResponse | Promise<ExamResponse>;
    abstract createTeacher(data: TeacherInput): TeacherResponse | Promise<TeacherResponse>;
    abstract deleteTeacher(id: string): TeacherResponse | Promise<TeacherResponse>;
    abstract updateTeacher(id: string, data: UpdateTeacherInput): TeacherResponse | Promise<TeacherResponse>;
    abstract createQuestion(data: QuestionInput): QuestionResponse | Promise<QuestionResponse>;
    abstract deleteQuestion(id: string): QuestionResponse | Promise<QuestionResponse>;
    abstract updateQuestion(id: string, data: UpdateQuestionInput): QuestionResponse | Promise<QuestionResponse>;
}

export abstract class IQuery {
    abstract findAllStudent(filter?: CommonFilterInput): StudentResponse | Promise<StudentResponse>;
    abstract findOneStudent(id: string): StudentResponse | Promise<StudentResponse>;
    abstract getExamQuestion(filter?: CommonFilterInput): QuestionResponse | Promise<QuestionResponse>;
    abstract findAllTeacher(filter?: CommonFilterInput): TeacherResponse | Promise<TeacherResponse>;
    abstract findOneTeacher(id: string): TeacherResponse | Promise<TeacherResponse>;
    abstract findAllQuestion(filter?: CommonFilterInput): QuestionResponse | Promise<QuestionResponse>;
    abstract findOneQuestion(id: string): QuestionResponse | Promise<QuestionResponse>;
}

export class Student {
    id?: string;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    username?: string;
    email?: string;
}

export class Teacher {
    id?: string;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    username?: string;
    email?: string;
}

export class Question {
    id?: string;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    question?: string;
    choice1?: string;
    choice2?: string;
    choice3?: string;
    choice4?: string;
}

export class StudentResponse {
    message?: string;
    data?: Student;
}

export class TeacherResponse {
    message?: string;
    data?: Teacher;
}

export class QuestionResponse {
    message?: string;
    data?: Question;
}

export class ExamResponse {
    message?: string;
}

export type DateTime = any;
export type Object = any;
export type Null = any;
