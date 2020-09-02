var num1 = context.getVariable("cv.input.num1");
if (num1 == null) {
    num1 = 0;
}

var num2 = context.getVariable("cv.input.num2");
if (num2 == null) {
    num2 = 0;
}

var answer = parseInt(num1) + parseInt(num2);
context.setVariable("cv.output.answer", answer.toString());