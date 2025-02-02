import  {isArmstrong, isPrime, isPerfect, isEven, isOdd, sumDigits, getFunFact} from "./helpers.js";

const classify = async (num)=>{
  const properties = [];
  if(isArmstrong(num) && isEven(num)){
    properties.push("armstrong", "even");
  }
  if(isArmstrong(num) && isOdd(num)){
    properties.push("armstrong", "odd");
  }
  if(!isArmstrong(num) && isOdd(num)){
    properties.push("odd");
  }
  if(!isArmstrong(num) && isEven(num)){
    properties.push("even");
  }

  const result = await getFunFact(num);
  const funFact = result.data;

  const data = {
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties: properties,
    digit_sum: sumDigits(num),
    fun_fact: funFact
  }
 

  return  data;
}



export default classify

