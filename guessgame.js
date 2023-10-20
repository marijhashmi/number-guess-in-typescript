import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnimation from "chalk-animation";
const num = Math.floor(Math.random() * 10);
const ans = await inquirer.prompt([{
        type: "number",
        name: 'userguess',
        message: ' Guess the number btw 1 to 10: '
    }
]);
console.log(chalk.green(`Your guess number is ${ans.userguess} \nAnd The actuall number is ${num}`));
if (ans.userguess == num) {
    console.log(chalk.blue("\nYou win!\n"));
}
else {
    let rainbow = chalkAnimation.rainbow("Try Luck Next Time. ");
}
