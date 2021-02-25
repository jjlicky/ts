/* 함수의 타입명시
함수의 반환(return) 타입, 함수의 매개변수(parameter) */
function sendGreeting (message: string, userName: string): void {
    console.log (`${message}, ${userName}`);
}

sendGreeting('Hello', 'Mark');
// void -> 아무것도 반환하지 않는 함수의 반환 값으로만 사용될 수 있는 타입
// 매개변수(message, userName)와 argument('hello', 'mark') 수가 일치하지 않으면 에러
// 대신 매개변수 뒤에 ?를 붙이면 선택적 매개변수 가능
function sendGreeting2 (message: string, userName?: string
    ): void {
    console.log (`${message}, ${userName}`);
}

sendGreeting2('Hello');

// default parameter
function sendGreeting3 (message = 'Hello', userName = 'there'): void {
    console.log (`${message}, ${userName}`);
}

sendGreeting3();
sendGreeting3('Good morning');
sendGreeting3('Good afternoon', 'Jenny');

// arrow function

const sendGreeting4 = (message = 'Hello', userName = 'there'):
void => console.log(`${message}, ${userName}`);

sendGreeting4();
sendGreeting4('Good morning');
sendGreeting4('Good afternoon', 'Jenny');
