//1. Տրված է տող։ Տպել տողի մեջ մտնող բոլոր փոքրատառերը։
function findSmallestStr(str){
    let arr = []
    for(let char of str.replace(/\s/g, "")){
       if(char === char.toLowerCase()) {
           arr.push(char);
       }
    }
    return arr.join('');
}
findSmallestStr('Big teXt')
//2.Տրված է ամբողջ թվերի հաջորդականություն։ Տպել այդ հաջորդականության դրական և կենտ տարրերի քանակը։
function evenOdd(num){
    let odd = 0;
    let even = 0;
    num += '';
    num = num.split('').forEach(function(num,val){
        val % 2 === 0?even++:odd++;})
    
    return `odd = ${odd}  even = ${even}`
}
evenOdd(2245515)
//3.Տրված է իրական թվերի հաջորդականություն։ Տպել այդ հաջորդականության մեծագույն տարրը և նրա կարգահամարը (index)։
function getMaxVal(num){
    if(typeof(num) === 'number' && num === num){
        num += ''.split('');
        let index, max = +num[0];
        for (let i = 1;i <= num.length;i++){
              if(+num[i] > max){
                   max = +num[i];
                  index = i;
              }
        }
      return `number ${max} in ${index} index`;  
    }
    return false;
}
getMaxVal(126374829)
//4.Գրել ֆունկցիա, որն արգումենտում ստանում է տող և վերադարձնում այդ տողի երկարությունը։
function getStringLength(str){
    if(typeof(str) === 'string'){
    return str.length;
    }
    return false;
}getStringLength("Picsart")
//5.Տրված զանգվածի համար հաշվել զանգվածի էլեմենտների միջին թվաբանականը։

function getAverage(arr){
    return arr.reduce(function(aggr,val){
        return aggr += val / arr.length;
    },0)
}
getAverage([4,4,4,8])

//6.Տրված զանգվածի համար հաշվել զանգվածի էլեմենտների միջին թվաբանականը։

function positiveNegative(arr){
   if(Array.isArray(arr) === true){
     for(let i = 0;i <= arr.length;i++){
         if(typeof(arr[i]) === 'number' && isNaN(arr[i]) !== true){
             return arr.sort().reverse();
         }else{
             return false;
         }
     }
   }
   return false;
}
positiveNegative([78,33,-2,0,44])
//7.Գրել ծրագիր, որը էկրանին կտպի զանգվածում ամենաշատը հանդիպած թիվը։
function getMostFound(arr){
    let obj = {};
    for(let num of arr){
        if(obj[num]){
            ++obj[num];
        }
        else{
            obj[num] = 1;
        }
    }
    return Object.keys(obj).reduce(function(aggr,val){
        return obj[aggr] > obj[val] ? aggr : val;
    },0)
    
}
getMostFound([1,1,1,1,4,4,4,23,2,23,4,5,4])