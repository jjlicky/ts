class Employee {
    fullName: string;
    age: number;
    jobTitle: string;
    hourlyRate:number;
    workingHoursPerWeek: number;
    
    printEmployeeDetails = ():void => {
            console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 이다.`)
        }
}
//클라스 속에서 정의된 함수들은 클라스 내 정의된 변수들에게 접근가능
// -> 상대적으로 적은 매개변수를 가짐.

// 클라스 내에 정의된 변수 : property
// 클라스 내에 정의된 함수 : method

// Instance
let employee1 = new Employee();
employee1.fullName = '민수';
employee1.age = 28;
employee1.jobTitle = '주니어 웹개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();
