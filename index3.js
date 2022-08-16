var xValues = [50,60,70,80,90,100,];
var yValues = [7,7.5,7.2,8,7.5,9];

new Chart("myChart3", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
     
        borderColor: "#de5aed",
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
