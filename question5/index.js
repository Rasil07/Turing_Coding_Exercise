// This solution doesnot account for numbers greater and equal to 10

function to_decimal(base, base_number) {
  let num_len = base_number.length;
  let val = 0;
  for (let i = 0; i < num_len; i++) {
    const power = Math.pow(base, num_len - (i + 1));
    val += power * base_number[i];
  }
  return val;
}

function from_decimal(base, decimal_number) {
  let remainders = "";

  function getRemainders(number) {
    const rem = number % base;
    ``;
    const quotient = (number - rem) / base;

    if (quotient > base) {
      remainders = rem + remainders;
      getRemainders(quotient);
    } else {
      remainders = `${quotient}` + `${rem}` + remainders;
    }
  }
  getRemainders(decimal_number);
  return remainders;
}

function main() {
  const base = 7;
  const base_number = [5, 1, 6, 0, 3, 6, 2];
  console.log(`Given number in base ${base} is ${base_number.join("")}`);

  const decimal_number = to_decimal(base, base_number);
  console.log(`Converted decimal number is ${decimal_number}`);

  const base_number_recover = from_decimal(base, decimal_number);
  console.log(`Recovered number in base ${base} is ${base_number_recover}`);

  const correct = base_number.join("") === base_number_recover;
  console.log(`Is the code working correctly? ${correct}`);
}

main();
