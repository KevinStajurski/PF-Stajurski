import { Injectable } from '@angular/core';
import { IStudent } from '../models/student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

  // students: IStudent[] = [
  //   { firstname: 'Kevin', lastname: 'Stajurski', id: 1, email: 'kevinstajurski@email.com', coursed: ['HTML-CSS', 'Javascript', 'React', 'React Native', 'NextJS'], studying: ['Angular'], role: 'user' },
  //   { firstname: 'Carlos', lastname: 'Perez', id: 2, email: 'carlosperez@email.com', coursed: ['HTML-CSS'], studying: ['Javascript'], role: 'user' },
  //   { firstname: 'Pedro', lastname: 'Gonzalez', id: 3, email: 'pedrogonzalez@email.com', coursed: [], studying: ['HTML-CSS'], role: 'user' },
  //   { firstname: 'Roberto', lastname: 'Garcia', id: 4, email: 'robertogarcia@email.com', coursed: ['HTML-CSS', 'Javascript'], studying: ['React'], role: 'user' }
  // ]

  addStudent(student: IStudent) {
    // this.students = [...this.students, student]
  }

  deleteStudent(id: number) {
    // this.students = this.students.filter((student) => student.id != id)
    // return this.students
  }

  editStudent() {
  }

  getStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>('http://localhost:3000/students')
  }

  // obs = new Observable((observer) => {
  //   observer.next(this.getStudents)
  //   observer.complete()
  // })

}