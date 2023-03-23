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
          aspectRatio:1.0,
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
        aspectRatio:1.0,
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
createMagicLevelChart(levels:number[],damageRune:number[],damageSecondary:number[],title1:string,title2:string){
  let levelChart:any
   levelChart = new Chart("levelChart", {
    type: 'line', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: levels,
       datasets: [
        {
          label: title1,
          data: damageRune,
          backgroundColor: '#papayawhip',
          borderColor:'#c2185b',
          fill:false,
          tension:0.5
        },
        {
          label: title2,
          data: damageSecondary,
          backgroundColor: '#papayawhip',
          borderColor:'#A24369',
          fill:false,
          tension:0.5
        },
      ]
    },
    options: {
      aspectRatio:1.0,
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
createMagicSkillChart(skill:number[],damageRune:number[],damageSecondary:number[],title1:string,title2:string){
  let levelChart:any
   levelChart = new Chart("skillChart", {
    type: 'line', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: skill,
       datasets: [
        {
          label: title1,
          data: damageRune,
          backgroundColor: '#papayawhip',
          borderColor:'#c2185b',
          fill:false,
          tension:0.5
        },
        {
          label: title2,
          data: damageSecondary,
          backgroundColor: '#papayawhip',
          borderColor:'#A24369',
          fill:false,
          tension:0.5
        },

      ]
    },
    options: {
      aspectRatio:1.0,
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
  createTrainingChart(skill:number[],gold:number[],title:string){
  let levelChart:any
   levelChart = new Chart("trainChart", {
    type: 'line', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: skill,
       datasets: [
        {
          label: title,
          data: gold,
          backgroundColor: '#papayawhip',
          borderColor:'#c2185b',
          fill:false,
          tension:0.5
        },

      ]
    },
    options: {
      aspectRatio:1,
      scales:{
        y:{
          display:true,
          title:{
            display:true,
            text:"Gold in kk's (millions)",
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
