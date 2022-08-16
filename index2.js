var xValues = [50,60,70,80,90,100,];
var yValues = [8,7.5,8.5,8,7.5,10];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
     
        borderColor: "#c35aed",
        backgroundColor:"#ebf6fa",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:12}}],
    }
  }
});
