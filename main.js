let result=document.getElementById("result")
let botton =document.querySelectorAll("input[type='button']")

for(let i=0 ;i<botton.length;i++){
    botton[i].addEventListener("click",function(e){
        if(e.target.value === "="){
            result.value= eval(result.value);
        }
        else if(e.target.value==="Clear"){
            result.value="";
        }
        
        else if(e.target.value ==="Back"){
            ne=result.value.substring(0,result.value.length-1)
            result.value=ne;
        }
        else if(e.target.value ==="sqrt"){
            nesqrt=Math.sqrt(result.value)
            result.value=nesqrt
        }
        else if(e.target.value ==="round"){
            neround=Math.round(result.value)
            result.value=neround
        }
        else if(e.target.value ==="pow"){
            nepow=Math.pow(result.value,result.value)
            result.value=nepow
        }
        else{
            result.value+=this.value
        }
    })
}