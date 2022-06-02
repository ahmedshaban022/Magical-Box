
const PriorityQueue = require('./Priority Queue');
const Queue= require('./Queue');
const fs = require('fs');

const randomNumber=()=>{
    return Math.floor(Math.random()*3)
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
            writeOnTheFile('!');
            return 'the operation invalid';
        } 


        switch(random){

            case 0: //stack
            writeOnTheFile('s');
            for(let i=0; i<validBills.length;i++){
                stack.push(validBills[i])
            }
            
            break;

            case 1: //queue
            writeOnTheFile('q');
            for(let i=0; i<validBills.length;i++){
                queue.enqueue(validBills[i]);
            }
            
            break;

            case 2: //priority queue
            writeOnTheFile('?'); //  writeOnTheFile('p');

            for(let i=0; i<validBills.length;i++){
                // priorityQueue.enqueue(validBills[i],i) 
                priorityQueue.enqueue(validBills[i],randomNumber())
            }
           
            break;


            default:return false;
            
        
        }
       
        

    }
    // return validBills;





}
for(let i=0;i<10; i++){
console.log(random,'Random');
magicBox(1);
magicBox(20,60,90);
magicBox(50,100);

console.log(magicBox());
console.log(magicBox());
console.log(magicBox());
console.log(magicBox());
console.log('****************************************************************');

}












// let fileData=fs.readFile('./Results.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data,'ee');
//     return data;
//   });
//   let content = 'Some content!';
//   if(fileData){
    //       content=fileData+"testssss"
    //   }else{
        //     content='cant read'
        //   }
        //   console.log(fileData,'sss');



        
function writeOnTheFile(content){

    // let fileData;
    // fs.readFile("./Results.txt", "utf-8", (err, data) => {
    //     if (err) { console.log(err) }
    //     fileData=data || "";
    // })
    // fs.writeFile('./Results.txt', `${fileData}\r\n${content}`, err => {
        fs.writeFile('./Results.txt', content, err => {
        if (err) {
            console.error(err);
        }

        
    });
}