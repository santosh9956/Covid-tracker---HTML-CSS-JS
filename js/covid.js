'use strict'
const stateCase = document.getElementById('stateCase');
const allStateCount = document.querySelectorAll('.allState');

const activeCase = document.getElementById('activeCase');
const confirmedCase = document.getElementById('confirmedCase');
const recovered = document.getElementById('recovered');
stateCase.innerHTML = allStateCount.length ;
let totalState = allStateCount.length ;
let groupactive = []; 
let allStateList = [];
let groupConfirmed = [];
let groupRecover = [];


let san =  fetch('https://api.covid19india.org/state_district_wise.json').then(Response=>{
   return Response.json();
}).then(data=>{
let count = 0;
let allStActive = 0;
let allStConfirom = 0;
let allStRecovered = 0; 

for (let index in data) {
    count++
    allStateList.push(index);
   let district ;
    for (let state in data[index]) {
        district=state
        break  
    }
    let activeData = 0;
    let confirmedData = 0;
    let recoveredData = 0;
    for (let distic in data[index][district]) {
        let disticData = data[index][district][distic];
            activeData += disticData.active;
            confirmedData += disticData.confirmed;
            recoveredData += disticData.recovered;
    } 
    groupactive.push(activeData);
    groupConfirmed.push(confirmedData);
    groupRecover.push(recoveredData);
    allStActive += activeData;
    allStConfirom += confirmedData;
    allStRecovered += recoveredData;
    //   console.log(index);
}

activeCase.innerHTML = allStActive ;
confirmedCase.innerHTML = allStConfirom ;
recovered.innerHTML = allStRecovered ;
})

let sumGroupActive = 408326 ;
let sumGroupConfirmed = 31141976 ;
let sumGroupRecover = 30297939  ; 
for(let j=0 ; j<allStateCount.length ; j++){

    allStateCount[j].addEventListener('click' , function(){
        if(allStateCount[j].checked){
            console.log("this is checked box");
            totalState += 1;
            stateCase.innerHTML = totalState ;
            
            //  ------- for active case -- 
            activeCase.innerHTML = sumGroupActive + groupactive[j+1];
            sumGroupActive += groupactive[j+1] ;

            // ----for confirmed case -- 
            confirmedCase.innerHTML = sumGroupConfirmed + groupConfirmed[j+1];
            sumGroupConfirmed += groupConfirmed[j+1] ;

            // for recover case -------------
            recovered.innerHTML = sumGroupRecover + groupRecover[j+1];
            sumGroupRecover += groupRecover[j+1] ;
        }else{
            totalState -= 1 ;
            stateCase.innerHTML = totalState ;
            console.log(groupactive[j+1] , "fffff");

            // -----for active case ----- 
            activeCase.innerHTML = sumGroupActive - groupactive[j+1];
            sumGroupActive -= groupactive[j+1] ;

            // ----for confirmed case -- 
            confirmedCase.innerHTML = sumGroupConfirmed - groupConfirmed[j+1];
            sumGroupConfirmed -= groupConfirmed[j+1] ;

            // for recover case -------------
            recovered.innerHTML = sumGroupRecover - groupRecover[j+1];
            sumGroupRecover -= groupRecover[j+1] ;
        }
    })
} 
    
var options = {
    series: [{
    name: 'Active Case',
    data: groupactive
  },  {
    name: 'Recover Case',
    data: groupRecover
  }, {
    name: 'Confirmed Case',
    data: groupConfirmed
  },],
    chart: {
    type: 'bar',
    height: 800,
    stacked: true,
    dropShadow: {
      enabled: true,
      blur: 1,
      opacity: 0.25
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2,
  },
  title: {
    text: 'Covid report graph'
  },
  xaxis: {  
    categories:allStateList
  },
  yaxis: {
    title: {
      text: undefined
    },
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings
  
    }
  },    
  states: {
    hover: {
      filter: 'none'
    }
  },
  legend: {
    position: 'right',
    offsetY: 40
  }
  };
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();


const filter_button = document.querySelector('.filter_button');
const cross_button = document.querySelector('.cross_button');
const input_popup = document.querySelector('.input_section');


function addClass(a){
    a.classList.add('hide');
}

function removeClass(b){
    b.classList.remove('hide');
}

filter_button.addEventListener('click' ,function(){
    console.log("you clicked filter button");
    addClass(filter_button);
    removeClass(cross_button);
    input_popup.classList.add('block');

})

cross_button.addEventListener('click' ,function(){
    console.log("you clicked filter button");
    addClass(cross_button);
    removeClass(filter_button);
    input_popup.classList.remove('block');
})



















