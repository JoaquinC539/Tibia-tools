import { Injectable } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

    createLevelChart(levels:number[],damage:number[],title:string){
      let levelChart:any
       levelChart = new Chart("levelChart", {
        type: 'line', //this denotes tha type of chart

        data: {// values on X-Axis
          labels: levels,
           datasets: [
            {
              label: title,
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
  createSkillChart(skill:number[],damage:number[],title:string){
    let levelChart:any
     levelChart = new Chart("skillChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: skill,
         datasets: [
          {
            label: title,
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
              text:"Skill level",
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
}
