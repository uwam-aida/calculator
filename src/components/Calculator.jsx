import React, {useState, useEffect} from "react";

export default function Calculator(){
   const [fNumber,setFirstNumber] = useState("");
   const [sNumber, setSecondNumber]=useState("");
   const[operation, setOperation]=useState("");
   const[result, setResult]=useState(null);
   const [error , setError]=useState("");

   const handleSubmit = (e)=>{
    e.preventDefault();

    const number1 = Number(fNumber);
    const number2 = Number(sNumber);

    if(isNaN(number1) || isNaN(number2)){
        setError('please enter valid number');
        setResult(null);
        return;
    } 
     
    setError('');
    let calculateResult;
switch (operation) {
    case 'addition':
    calculateResult = number1 + number2;
        break;
    case 'subtract':
        calculateResult = number1 - number2;
        break;
        case 'multiply':
            calculateResult = number1 * number2;
            break;
    case 'division':
        if(Number === 0){
            setError('can not divide by zero.');
            setResult(null);
        }
        calculateResult = number1 / number2;
        break;
    default:
        calculateResult = 0;
        setError("please select a valid operator");
}
setResult(calculateResult);
setError("");
   };

   useEffect(()=> {
    if (error){
    console.warn("Error occured:", error);
   }
},[error]);
   


   return(
    <div className="container:flex flex-col border rounded w-90 h-90">
<div className="flex flex-col px-6 py-6 justify-center items-center ">
        <h1 class="font-bold">Calculator</h1>
       
        <form onSubmit={handleSubmit} className="space-y-4">
        
           <input type="text"
            value={fNumber} 
            placeholder="Enter first number"
            onChange ={(e) =>setFirstNumber(e.target.value)}
            className="w-full p-2 border rounded"

            />
            <input type="text"
             value={sNumber}
             placeholder="Enter second number"
             onChange ={(e) =>setSecondNumber(e.target.value)}
             className="w-full p-2 border rounded"
             />
             <select
              value = {operation}
             onChange={(e) =>setOperation(e.target.value)}
             className="w-full p-2 border rounded">

                   <option value="">select operator</option>
                   <option value="addition">Addition(+)</option>
                   <option value="subtract">Subtract(-)</option>
                   <option value="division">Division(/)</option>
                   <option value="multiply">Multiply(*)</option>
                   
                </select>
                <button type="submit"
                className="w-50 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">calculate
                
                    </button>
         </form>
   {Error && 
   (<p className="text-red-500 mt-4 text-center">{Error}</p>)}
    
   {result !==null && !error &&(
    <div  className="mt-4 text-white py-3 px-2 bg-green-500 hover:bg-green-600 rounded"
    onClick={() => {
        setFirstNumber(result.toString());
        setSecondNumber("");
        setOperation("");
        setResult(null);
        setError("");
    }}
>
   Result:{result} 
   </div>
   )}
   </div>
   </div>
   );
}

    
    
