//read data from json
import data1 from './Students.json' assert{type: 'json'};
import data2 from './Students1.json' assert{type: 'json'};
import data3 from './Students2.json' assert{type: 'json'};

function all(t){
    $(document).ready(function(){
        document.getElementById('charts').style.visibility = "visible";
        document.getElementById('table').style.visibility = "visible";

        //reset table
        $('table').bootstrapTable('destroy')
        //create table
        $('table').bootstrapTable({
            data: t
        });
        //counting people for cir chart
        let male = 0;
        let female = 0;

        for (var person of t){
            if(person.gender == "Male"){
                male++;
            }else{
                female++;
            }
        }
        
        //Circle chart
        var barColors = [
            "#b91d47",
            "#1e7145"
        ];
        const config =  {   type: "pie",
        data: {
            labels: ["Male", "Female"],
            datasets: [{
                backgroundColor: barColors,
                data: [male,female]
            }]
        },
        options: {
            title: {
                display: true,
                text: "Number of students in each gender"
            }
        }}
        var genders = ["Male", "Female"];
        var ctr = document.getElementById('firstChart');
        var myCha = new Chart(ctr, config);
        
        
        //Helpful function for counting particular value in array
        Object.defineProperties(Array.prototype, {
            count: {
                value: function(value) {
                    return this.filter(x => x==value).length;
                },
                configurable:true
            }
        });

        //Counting number of persons in each age
        let arr = [];

        for (var agee of t){
            arr.push(agee.age); 
         }
        //Linear chart
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
                text: "Number of student of each age"
                },
            
            scales: {
                yAxes: [{ticks: {min: 2, max:25}}]
            }
            }
        });
        

        
       
    });
}
document.getElementById("fr").onclick = function() {all(data1)};
document.getElementById("sec").onclick = function() {all(data2)};
document.getElementById("thr").onclick = function() {all(data3)};


 


