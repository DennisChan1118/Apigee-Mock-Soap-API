var num1 = context.getVariable("flow.input.num1");
if (num1 == null) {
    num1 = 0;
}

var num2 = context.getVariable("flow.input.num2");
if (num2 == null) {
    num2 = 0;
}

var answer = parseInt(num1) + parseInt(num2);
context.setVariable("flow.output.answer", answer.toString());