
const PriorityQueue = require('./Priority Queue');
const Queue= require('./Queue');
const fs = require('fs');

const randomNumber=()=>{
    let  random=Math.floor(Math.random()*3);
    if(random===0){
     
    }else if(random===1){
        
    }
    else if(random===2){
        
    }
    return random
};



///////////////////// Global ///////////////////////////////////////////////////////////

const queue=new Queue();
const stack=[];
const priorityQueue=new PriorityQueue();
let random=randomNumber();
const structure=[stack,queue,priorityQueue];
let validValues=[1, 5, 10, 20, 50, 100]

////////////////////////////////////////////////////////////////////////////////


const magicBox=(...bills)=>{

    
    if(bills.length===0){
        if(stack.length===0 && queue.length===0 && priorityQueue.isEmpty===true){ // && priorityQueue.isEmpty
            
            return "there is no bills";
        }

        switch(random){

            case 0: if(stack.length===1){
                random=randomNumber();
                
                return stack.pop();
            }else{
                return stack.pop();
                
            }
           
            case 1: if(queue.length===1){
                random=randomNumber();
                return queue.dequeue();

            }else{
                return queue.dequeue();
            }

            case 2: 
            let bill = priorityQueue.dequeue().element;
            if(priorityQueue.isEmpty()==true){
                    random=randomNumber();
                }
                return bill;
            
                // return priorityQueue.dequeue().element;
            
            default:
                return false;
        
        
        }



    }
    else{

        let validBills=bills.filter(bill=>{
            return validValues.includes(bill)
        });
        if(validBills.length===0){
           
            return 'the operation invalid';
        } 


        switch(random){

            case 0: //stack
            
            for(let i=0; i<validBills.length;i++){
                stack.push(validBills[i])
            }
            
            break;

            case 1: //queue
           
            for(let i=0; i<validBills.length;i++){
                queue.enqueue(validBills[i]);
            }
            
            break;

            case 2: //priority queue
           

            for(let i=0; i<validBills.length;i++){
                // priorityQueue.enqueue(validBills[i],i) 
                 priorityQueue.enqueue(validBills[i],Math.floor(Math.random()*10))
            }
           
            break;


            default:return false;
            
        
        }
       
        

    }
  
}


let inpArr=[1,3,50,20,90,100,20,56];

for(let i=0;i<inpArr.length; i++){
magicBox(inpArr[i]);
}
let outArr=[];
for(let i=0;i<inpArr.length; i++){
    let bill=magicBox();
    if(bill!==undefined){
        console.log('Expelled bill id : ',bill);

        outArr.push(bill)
    }
   
}

whatDataStructureType(inpArr,outArr);


function whatDataStructureType(inputArr=[],outputArr=[]){

    if(inputArr.length===0||outputArr.length===0) {
        writeOnTheFile('!');
        return console.log("the operation invalid");
    }

    let validBills=inputArr.filter(bill=>{
        return validValues.includes(bill)
    });

    let reversedArr=[...outputArr];
    reversedArr.reverse();  
    
    
     if(arraysMatch(validBills,outputArr)){
        return writeOnTheFile('q')
     }
    
    else if(arraysMatch(validBills,reversedArr)){
        return writeOnTheFile('s')
     }
     else{
        return writeOnTheFile('?') // writeOnTheFile('p');
     }



}


function writeOnTheFile(content){
    fs.open('./Results.txt', 'a', 666, function( e, id ) {
        fs.write( id, content + "\n", null, 'utf8', function(){
         fs.close(id, function(){
         });
        });
       });
}


function arraysMatch (arr1, arr2) {

	if (arr1.length !== arr2.length) return false;

	
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;

};