console.log("Assignment");
// Very Easy
//1)
minConverter=function(x)
{
    console.log(x*60)
}
minConverter(5);

//2)
noChecker=function(x,y)
{
  if(x>=y)
  {
    let a=x/y;
    if(a%1==0)
    {
        console.log(true);
    }
    else{
        console.log(false);
    }
  }
}
noChecker(85,4);



// EASY
//1)
charCount=function(x,y)
{
    let count=0;
    for(let i=0;i<y.length;i++)
    {
        if(x==y[i])
        {
            count++;
        }
    }
    console.log(count);
}
charCount('b','big fat bubble');


//2) 
addUP=function(x){
    if(x>1 && x<1000)
    {
        let sum=0;
    for(let i=0;i<=x;i++)
    {
      sum=sum+i;
    }
    console.log(sum);
    }
    else{
        console.log('Not valid');
    }
}
addUP(600);


//3
replaceVolwel=function(y)
{
    y = y.replace('a',1); 
    y = y.replace('e',2); 
    y = y.replace('i',3); 
    y = y.replace('o',4); 
    y = y.replace('u',5);   
    console.log(y); 
}
replaceVolwel('chembur');




//Medium
//1)
function reverseInPlace(x,str) {
    var words = [];
    words = str.match(/\S+/g);
    var result = "";
    for (var i = 0; i < words.length; i++) {
        if(words[i].includes(x))
        {
            result += words[i].split('').reverse().join('') + " ";
        }
        else{
            result += words[i]+" ";
        }
     }
        
    
    return result
  }
  
  console.log(reverseInPlace('s',"word searches are super fun"))


//2
testJackpot =function(x)
{
    let count=0;
    for(let i=0;i<1;i++)
    {
        for(let j=1;j<x.length;j++)
        {
            if(x[i]==x[j])
            {
                count++;
            }
        }
    }
    if(count==(x.length-1))
    {
        console.log(true);
    }
    else{
        console.log(false);
    };
}
testJackpot(["&&", "&", "&&&", "&&&&"]);


//3
removeDups=function(x)
{
    let unique=[];
    x.forEach(element => {
        if(!unique.includes(element))
        {
            unique.push(element);
        }
    });
    console.log(unique);
}
removeDups(["John", "Taylor", "John"]);


//Hard
//1)
typeChecker=function(x){
    
   
       if(x==null)
       {
           console.log("null");
       }
       else if(Array.isArray(x)==true){
           console.log("Array");
       }
       else{
           console.log(typeof x);
       }
   
}
typeChecker(["1a", "a", "2b", "b"]);

//2
 numInstr=function (arr) 
 {
    var js=[];
    let unique=[];
    for(let i=0;i<arr.length;i++)
    {
      for(let j=0;j<10;j++)
        {
           if(arr[i].includes(j))
            {  
                
                js.push(arr[i]);
               
            }    
        }
     }
     js.forEach(element => {
        if(!unique.includes(element))
            {
                unique.push(element);
            }
        });
            console.log(unique);
}

  
  numInstr(["abc", "ab10c", "a10bc", "bcd"]) ;

 



