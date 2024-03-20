const isFibonnacci = (num) => {
  let a = 0;
  let b = 1;

  while (a <= num) {
    if (a === num) {
      return true;
    }

    let temp = b;
    b += a;
    a = temp;
  }

  return false;
};

const main = () => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Digite um número para verificar se pertence à sequência de Fibonacci: ",
    (num) => {
      num = parseInt(num);
      if (isNaN(num)) {
        console.log("Por favor, digite um número válido.");
        readline.close();
        return;
      }
      if (isFibonnacci(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
      } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
      }
      readline.close();
    }
  );
};

main();
