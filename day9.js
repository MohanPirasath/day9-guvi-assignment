let req = new XMLHttpRequest();
req.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
req.send();
req.onload=function(){
    var data =JSON.parse(req.response);
     // A.Get all the countries from Asia continent /region using Filter function
     var countries=data.filter((Element)=>Element.region=="Asia");
     console.log("countries in asia : ");console.log(countries);
    
  //  B.Get all the countries with a population of less than 2 lakhs using Filter function.
  var populationless=data.filter((Element)=>Element.population<200000);
console.log("counties with a population of less than 2lakhs : ");console.log(populationless);
// C.Print the following details name, capital, flag using forEach function.
Object.keys(data).forEach((ele)=>{
   console.log(`name : ${data[ele].name}  Capital:  ${data[ele].capital} Flag:  ${data[ele].flag}`);
  });

// D.Print the total population of countries using reduce function.
var totalpopulation=data.reduce((acc,value,index,arr)=>{
  return (acc + value.population)
  },0)
  console.log("total population : "+ totalpopulation);

// E.Print the country which uses US Dollars as currency.
var Dollars=[];
for(var i=0;i<data.length;i++){
    if(data[i].currencies[0].code=="USD"){
        Dollars.push('name: '+data[i].name+ '  currencys: '+ data[i].currencies[0].code);
    }
}console.log(Dollars);
}
