//chart options
// APEC CHARTS
//apexcharts.com, ‘Apexcharts Reference', 2022. [Online]. Available: https://apexcharts.com/docs [Accessed: 23- Aug- 2022]
const options1 = {
    chart: {
        height: '100%',
        width:'100%',
        type:'bar',
        background:'#950300',
        foreColor: '#ffffff'
        
    
    },
    series:[{
        name:'Total Points',
        data: [258,178,173,158,156,146,76,58,46,41,22,19,16,16,12,11,5,4,3,0]
    }],
    xaxis:{
        categories:[
            'Max Verstappen ', 
            'Charles Leclerc', 
            'Sergio Perez', 
            'George Russell', 
            'Carlos Sainz', 
            'Lewis Hamilton',
            'Lando Norris',
            'Esteban Ocon',
            'Valtteri Bottas',
            'Fernando Alonso',
            'Kevin Magnussen',
            'Daniel Ricciardo',
            'Pierre Gasly',
            'Sebastian Vettel',
            'Mick Schumacher',
            'Yuki Tsunoda',
            'Lance Stroll',
            'Alex Albon',
            'Nicholas Latifi']
    },
    plotOptions:{
        bar: {
            horizontal: true
        }
    },
    fill:{
        colors: ['#e60000']
    },
    dataLabels: {
        enabled: false,
        style: {
            colors: ['#abdb00']
          }
    },
    title: {
        text: " 2022 Driver's Standings",
        align: 'center',
        marginn: 20,
        offsetY: 20,
        style: {
            fontSize: '25px'
        }
    }
}

//chart options2
const options2 = {
    chart: {
        height: '100%',
        width:'100%',
        type:'bar',
        background:'#950300',
        foreColor: '#ffffff'
        
    
    },
    series:[{
        name:'Total Points',
        data: [431,334,304,99,95,51,34,27,20,3]
    }],
    xaxis:{
        categories:[
            'Red Bull Racing RBPT',
            'Ferrari',
            'Mercedes',
            'Alpine Renault',
            'McLaren Mercedes',
            'Alfa Romeo Ferrari',
            'Haas Ferrari',
            'AlphaTauri RBPT',
            'Aston Martin Aramco Mercedes',
            'Williams Mercedes']
    },
    plotOptions:{
        bar: {
            horizontal: false
        }
    },
    fill:{
        colors: ['#e60000']
    },
    dataLabels: {
        enabled: false,
        style: {
            colors: ['#abdb00']
          }
    },
    title: {
        text: " 2022 Constructor's Championships",
        align: 'center',
        marginn: 20,
        offsetY: 20,
        style: {
            fontSize: '25px'
        }
    }
}


// init chart
const chart = new ApexCharts(document.querySelector('#chart1'), options1);

//render chart
chart.render();

//event method
document.querySelector('#button1').addEventListener('click', () => chart.updateOptions({
    chart: {
        height: '100%',
        width:'100%',
        type:'bar',
        background:'#950300',
        foreColor: '#ffffff'
        
    
    },
    series:[{
        name:'Total Points',
        data: [431,334,304,99,95,51,34,27,20,3]
    }],
    xaxis:{
        categories:[
            'Red Bull Racing',
            'Ferrari',
            'Mercedes',
            'Alpine Renault',
            'McLaren Mercedes',
            'Alfa Romeo Ferrari',
            'Haas Ferrari',
            'AlphaTauri RBPT',
            'Aston Martin',
            'Williams Mercedes']
    },
    plotOptions:{
        bar: {
            horizontal: false
        }
    },
    fill:{
        colors: ['#e60000']
    },
    dataLabels: {
        enabled: false,
        style: {
            colors: ['#abdb00']
          }
    },
    title: {
        text: " 2022 Team's Standings",
        align: 'center',
        marginn: 20,
        offsetY: 20,
        style: {
            fontSize: '25px'
        }
    }
}))

//event method
document.querySelector('#button2').addEventListener('click', () => chart.updateOptions({
    chart: {
        height: '100%',
        width:'100%',
        type:'bar',
        background:'#950300',
        foreColor: '#ffffff'
        
    
    },
    series:[{
        name:'Total Points',
        data: [258,178,173,158,156,146,76,58,46,41,22,19,16,16,12,11,5,4,3,0]
    }],
    xaxis:{
        categories:[
            'Max Verstappen ', 
            'Charles Leclerc', 
            'Sergio Perez', 
            'George Russell', 
            'Carlos Sainz', 
            'Lewis Hamilton',
            'Lando Norris',
            'Esteban Ocon',
            'Valtteri Bottas',
            'Fernando Alonso',
            'Kevin Magnussen',
            'Daniel Ricciardo',
            'Pierre Gasly',
            'Sebastian Vettel',
            'Mick Schumacher',
            'Yuki Tsunoda',
            'Lance Stroll',
            'Alex Albon',
            'Nicholas Latifi']
    },
    plotOptions:{
        bar: {
            horizontal: true
        }
    },
    fill:{
        colors: ['#e60000']
    },
    dataLabels: {
        enabled: false,
        style: {
            colors: ['#abdb00']
          }
    },
    title: {
        text: " 2022 Driver's Standings",
        align: 'center',
        marginn: 20,
        offsetY: 20,
        style: {
            fontSize: '25px'
        }
    }
}))

//////////////CHART 2/////////////////

var options3 = {
    chart: {
      type: 'donut',
      height: '100%',
      width: '100%',
      background:'#950300',
        foreColor: '#ffffff'
    },
    title: {
        text: "DNFs % per Team",
        align: 'center',
        marginn: 20,
        offsetY:0,
        style: {
            fontSize: '25px'
        }
    },
    plotOptions: {
        pie: {
            customScale:1,
            expandOnClick: true
        }
    },
    fill:{
        colors: ['#1500ff','#ff1100', '#00e1ff', '#ccff00', '#ffb700', '#1aff00', '#d2d2d9', '#dd00ff', '#007d17','#011c36'  ]
    },
    series: [5, 7, 1, 3, 2, 8, 6, 5, 2, 6],
    labels: ['Red Bull Racing',
            'Ferrari',
            'Mercedes',
            'Alpine Renault',
            'McLaren Mercedes',
            'Alfa Romeo Ferrari',
            'Haas Ferrari',
            'AlphaTauri RBPT',
            'Aston Martin',
            'Williams Mercedes'],
    dataLabels: {
        enabled: true
    },
    colors: ['#1500ff','#ff1100', '#00e1ff', '#ccff00', '#ffb700', '#1aff00', '#d2d2d9', '#dd00ff', '#007d17','#011c36'  ]

  }
  
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options3);
  
  chart2.render();

//////////CHART 3//////////
var options = {
    chart: {
      height: '100%',
      width:'100%',
      type: "line",
      stacked: false,
      
    },
    dataLabels: {
      enabled: true
    },
    colors: ["#FF1654", "#247BA0","black","green","blue"],
    series: [
      {
        name: "Max Verstappen",
        data: [0,25,25,59,85,110,125,150,175,181,208,233,258,258,258,258,258,258,258,258,258,258,258]
      },
      {
        name: "Charles Leclerc",
        data: [26,45,71,86,104,104,116,116,126,138,170,170,178,178,178,178,178,178,178,178,178,178,178]
      },
      {
        name: "Sergio Perez",
        data: [0,12,30,54,66,85,110,129,129,147,151,163,173,173,173,173,173,173,173,173,173,173,173]
      }, {
        name: "George Russell",
        data: [12,22,37,49,59,74,84,99,111,111,128,143,158,158,158,158,158,158,158,158,158,158,158]
      }
    ],
    stroke: {
      width: [4,4,4,4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: ['BRN',	'SAU',	'AUS',	'ITA',	'MIA',	'ESP',	'MON',	'AZB',	'CAN',	'GBR',	'AUT',	'FRA',	'HUN',	'BEL',	'NED',	'ITA2',	'RUS',	'SIN',	'JPN',	'USA',	'MEX',	'BRA',	'ARE']
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FF1654"
        },
        labels: {
          style: {
            colors: "#FF1654"
          }
        },
        title: {
          text: "Points",
          style: {
            color: "#FF1654"
          }
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    },
    title: {
        text: "Top 4 Driver's Progress",
        align: 'center',
        marginn: 20,
        offsetY: 10,
        style: {
            fontSize: '25px'
        }
    }
  };
  
  var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
  
  chart3.render();