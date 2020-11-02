export interface User{
    email: String
    password: String
}

export interface Group{
    id: Number
    group_level: String
    dance: Dance
}

export interface Dance{
    id: Number
    name: String
}

export interface Person{
    id: Number
    first_name: String
    second_name: String
    last_name: String
    birthday: Date
    sex: String
    e_mail: String
    phone_number: String
    role: String
}

export interface Lesson{
    id: Number
    begin: Date
    end: Date
    group: Group
    teacher: Person
    status: String
}

export interface Report{
    id: Number
    begin: Date
    end: Date
    length: Number
    group_level: String
    teacher_id: Number
    teacher: String
    dance: String
    status: String
}

export interface LessonRow{
    lesson_id: Number
    current_teacher_id: Number
    teacher_id: Number
}

export interface Event {
	id: string;
	start_date: string;
	end_date: string;
	text: string;	
}