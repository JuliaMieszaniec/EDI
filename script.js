$(document).ready(function(){
    $.get("https://my.api.mockaroo.com/Students.json?key=d9e2a660", function(data){
      $('table').bootstrapTable({
      data: data
      });
      let male = 0;
      let female = 0;
      let arr = [];

        for (var person of data){
            if(person.gender == "Male"){
                male++;
            }else{
                female++;
            }
        }
      
        for (var agee of data){
           arr.push(agee.age);
           
        
           
        }
        

      var barColors = [
        "#b91d47",
        "#1e7145"
      ];
      var xValues = ["Male", "Female"];
      new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: [male,female]
          }]
        },
        options: {
          title: {
            display: true,
            text: "World Wide Wine Production 2018"
          }
        }
      });

Object.defineProperties(Array.prototype, {
    count: {
        value: function(value) {
            return this.filter(x => x==value).length;
        }
    }
});


      var x_Values = ["17", "18", "19", "20", "21",'22', '23', '24'];
let y_Values = [arr.count(17), arr.count(18), arr.count(19), arr.count(20), arr.count(21),arr.count(22),arr.count(23),arr.count(24)];
var barColors = ["red", "green","blue","orange",'black','pink','purple','grey'];
new Chart("secondChart", {
  type: "bar",
  data: {
    labels: x_Values,
    datasets: [{
      backgroundColor: barColors,
      data: y_Values
    }]
  },
  options: {
   
    title: {
      display: true,
      text: "World Wine Production 2018"
    },
  
  scales: {
    yAxes: [{ticks: {min: 2, max:25}}]
  }
}
});
    
    });
  });
  

