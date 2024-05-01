import inquirer from "inquirer";
let Calculators = await inquirer.prompt([
    {
        name: "Calculators",
        type: "list",
        choices: ["Simple Calculator", "Scientific Calculator"],
        message: "Select Calculator"
    },
]);
if (Calculators.Calculators === "Simple Calculator") {
    const simpleCalculatorInfo = await inquirer.prompt([
        {
            name: "firstNumber",
            type: "number",
            message: "Enter First Number"
        },
        {
            name: "secondNumber",
            type: "number",
            message: "Enter Second Number"
        },
        {
            name: "Operator",
            type: "list",
            choices: ["+", "-", "*", "/"],
            message: "Select one operator"
        }
    ]);
    if (simpleCalculatorInfo.Operator === "+") {
        console.log(Number(simpleCalculatorInfo.firstNumber) + Number(simpleCalculatorInfo.secondNumber));
    }
    else if (simpleCalculatorInfo.Operator === "-") {
        console.log(simpleCalculatorInfo.firstNumber - simpleCalculatorInfo.secondNumber);
    }
    else if (simpleCalculatorInfo.Operator === "*") {
        console.log(simpleCalculatorInfo.firstNumber * simpleCalculatorInfo.secondNumber);
    }
    else if (simpleCalculatorInfo.Operator === "/") {
        console.log(simpleCalculatorInfo.firstNumber / simpleCalculatorInfo.secondNumber);
    }
}
else {
    let scientificCalculatorInfo = await inquirer.prompt([{
            name: "firstNumber",
            type: "number",
            message: "Enter First Number"
        },
        {
            name: "secondNumber",
            type: "number",
            message: "Enter Second Number"
        },
        {
            name: "Operator",
            type: "list",
            choices: ["^", "√", "3√", "sin", "cos", "tan", "log"],
            message: "Select one operator of Scientific Calculator."
        }
    ]);
    if (scientificCalculatorInfo.Operator === "^") {
        console.log(scientificCalculatorInfo.firstNumber ** scientificCalculatorInfo.secondNumber);
    }
    else if (scientificCalculatorInfo.Operator === "√") {
        console.log(Math.sqrt(scientificCalculatorInfo.firstNumber));
    }
    else if (scientificCalculatorInfo.Operator === "3√") {
        console.log(scientificCalculatorInfo.firstNumber ** (1 / 3));
    }
    else if (scientificCalculatorInfo.Operator === "sin") {
        console.log(Math.sin(scientificCalculatorInfo.firstNumber));
    }
    else if (scientificCalculatorInfo.Operator === "tan") {
        console.log(Math.tan(scientificCalculatorInfo.firstNumber));
    }
    else if (scientificCalculatorInfo.Operator === "cos") {
        console.log(Math.cos(scientificCalculatorInfo.firstNumber));
    }
    else if (scientificCalculatorInfo.Operator === "log") {
        console.log(Math.log(scientificCalculatorInfo.firstNumber));
    }
}
