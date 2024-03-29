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
createPaladinMagicLevelChart(levels:number[],damageRune:number[],damageSecondary:number[],title1:string,title2:string){
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
createPaladinMagicSkillChart(skill:number[],damageRune:number[],damageSecondary:number[],title1:string,title2:string){
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
createMageMagicLevelChart(levels:number[],damageRune:number[],damageSD:number[],damageLWave:number[],damageSWave:number[],title1:string,title2:string,title3:string,title4:string){
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
          data: damageSD,
          backgroundColor: '#papayawhip',
          borderColor:'#A24369',
          fill:false,
          tension:0.5
        },
        {
          label: title3,
          data: damageLWave,
          backgroundColor: '#e58d46',
          borderColor:'#e58d46',
          fill:false,
          tension:0.5
        },
        {
          label: title4,
          data: damageSWave,
          backgroundColor: '#1f8cb5',
          borderColor:'#1f8cb5',
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
createMageMagicSkillChart(skill:number[],damageRune:number[],damageSD:number[],damageLWave:number[],damageSWave:number[],title1:string,title2:string,title3:string,title4:string){
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
          data: damageSD,
          backgroundColor: '#papayawhip',
          borderColor:'#A24369',
          fill:false,
          tension:0.5
        },
        {
          label: title3,
          data: damageLWave,
          backgroundColor: '#e58d46',
          borderColor:'#e58d46',
          fill:false,
          tension:0.5
        },
        {
          label: title4,
          data: damageSWave,
          backgroundColor: '#1f8cb5',
          borderColor:'#1f8cb5',
          fill:false,
          tension:0.5
        }

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
