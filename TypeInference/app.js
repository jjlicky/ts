{
    function logName(name) {
        console.log(name);
    }
}
logName('Jack');
var a = 5;
a = 10; // 자동으로 변수의 타입을 추론하기때문에 a에 string저장 불가능.
var student = {
    name: 'Jake',
    course: 'Getting Started with TypeScript',
    codingIQ: 80,
    code: function () {
        console.log('brain is working hard');
    }
};
function calculateCodingIQ(lostPoints) {
    return 100 - lostPoints;
} // -연산만보고도 lostPoinsts가 숫자임을 추론.
