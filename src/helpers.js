import axios from "axios";

export const isArmstrong = (num)=>{
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
}

export const isPrime = (n)=>{
  if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

export const isPerfect = (n)=>{
  // Early return for 1 as it's not considered a perfect number
  if (n <= 1) return false;

  let sum = 1; // 1 is a proper divisor of any number
  
  // Loop through numbers from 2 to the square root of n
  for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
          sum += i;
          if (i !== n / i) {
              sum += n / i;
          }
      }
  }

  // Check if the sum of divisors equals the number
  return sum === n;
}

export const getFunFact = async (n)=>{
  try{
    const funFact = await axios.get(`http://numbersapi.com/${n}/math`)
    return funFact
  }
  catch(err){
    console.log(err)
  }
}

export const isEven = (n) =>{
    return n % 2 === 0;
}

export const isOdd = (n) =>{
  return n % 2 !== 0;
}

export const sumDigits = (n)=>{
  return n.toString().split("").reduce((sum, d) => sum + Number(d), 0);
}




