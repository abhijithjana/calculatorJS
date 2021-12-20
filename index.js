function gethistory(){
    return document.getElementById("history").innerText;
}




function history(num){
  document.getElementById("history").innerText=num;
}


function getresult(){
    return document.getElementById("result").innerText;
}

function result(num){
  document.getElementById("result").innerText=num;
}




let oprator=document.getElementsByClassName("oprand");
for(let i=0; i<oprator.length;i++){
    oprator[i].addEventListener('click',function(){
        let History=gethistory();
       let Result=getresult();
       document.getElementById('result').style.color="black"; 
       if(this.id==='clear'){
           Result="";
           History="";
           history(History);
           result(Result);
       }
       else if(this.id==='backspace'){
        Result=Result.substring(0,Result.length-1);
        result(Result);
    }

    else if(Result===""){

    }
       else if(this.id==="ans"){
        History=History+Result
        history(History);
           Result=eval(gethistory());
           result(Result);
           History="";
           history(History);
       }
      
       else{
        let isOperator ="+-*/";
        
        console.log("1 "+History.length);
        
    
            History=History+Result+this.id;
            Result="";
            history(History);
            result(Result);
            
        
           
       }
    })
}


 

let number=document.getElementsByClassName("number");
for(let i=0; i<number.length;i++){
    number[i].addEventListener('click',function(){
       let History=gethistory();
       let Result=getresult();
           if(Result.length<11){

           if(this.id==='dot')
           Result=Result+'.';
           else
           Result=Result+this.id;
           result(Result);
           }
           else{
            
                 
                document.getElementById('result').style.color="red"; 
           
              
           }
       
    })
}



