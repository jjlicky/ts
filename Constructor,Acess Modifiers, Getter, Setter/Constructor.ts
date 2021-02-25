// constructor
// class로부터 instance를 생성할때 호출, 객체의 초기화를 담당.
class Employee {
    private _fullName: string;
    age: number;
    jobTitle: string;
    hourlyRate:number;
    workingHoursPerWeek: number;

    constructor(fullName: string, age: number,jobTitle: string,
    hourlyRate:number, workingHoursPerWeek: number) {
        this._fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
    }
    
    get fullName () {
        return this._fullName;
    }
    
    set fullName (value: string) {
        this._fullName = value;
    }
    printEmployeeDetails = ():void => { //public이 default라고 생각하면됨.
            console.log(`${this._fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 이다.`)
        }
}

let employee1: Employee = new Employee('민수', 28, '주니어 개발자', 40, 35);

console.log(employee1.fullName); // ->fullName이 private이므로 에러발생함. (getter를 통해 접근.)

employee1.fullName = '헨리';
console.log(employee1.fullName);
// But, getter와 setter를 통해 접근가능.

employee1.printEmployeeDetails();

let employee2: Employee = new Employee('미나', 32, '프로젝트매니저', 55, 35);

// 선택적 매개변수는 반드시 필수 매개변수 뒤에 위치시켜야함!

// Access Modifiers(접근 제한자) -> class 외부로 부터의 접근을 통제


// constructor의 매개변수에 Aceess Modifiers 직접적용
// -> 훨씬 간단한 코드 구현
class Employee2 {

    constructor(
        private _fullName:string,
        private _age:number,
        private _jobTitle:string,
        private _hourlyRate: number,
        public workingHoursPerWeek: number) {

    }
    
    get fullName () {
        return this._fullName;
    }
    
    set fullName (value: string) {
        this._fullName = value;
    }
    printEmployeeDetails = ():void => { //public이 default라고 생각하면됨.
            console.log(`${this._fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 이다.`)
        }
}

