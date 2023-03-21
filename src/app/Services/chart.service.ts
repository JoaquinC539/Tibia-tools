import { Injectable } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

    createLevelChart(levels:number[],damage:number[]){
      let levelChart:any
       levelChart = new Chart("levelChart", {
        type: 'line', //this denotes tha type of chart

        data: {// values on X-Axis
          labels: levels,
           datasets: [
            {
              label: "Average Damage of Whirlwind Throw (mod x1)",
              data: damage,
              backgroundColor: '#papayawhip',
              borderColor:'#c2185b',
              fill:false,
              tension:0.5
            },

          ]
        },
        options: {
          aspectRatio:3,
          scales:{
            y:{
              display:true,
              title:{
                display:true,
                text:"Damage",
                color:'#fff',
                font:{
                  size:18
                }
              }
            },
            x:{
              display:true,
              title:{
                display:true,
                text:"Levels",
                color:'#fff',
                font:{
                  size:18
                }
              }
            }
          }
        }

      });
      return levelChart;
  }
  createSkillChart(){
    let levelChart = new Chart("skillChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
         datasets: [
          {
            label: "Skill Damage",
            data: ['467','576', '572', '79', '92',
                 '574', '573', '576'],
            backgroundColor: '#c2185b',
            borderColor:'#c2185b',
            fill:false,
            tension:0.5
          },

        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
    return levelChart;
}
}
