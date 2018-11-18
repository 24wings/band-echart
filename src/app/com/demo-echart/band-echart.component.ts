import { Component, OnInit, Input, ViewChild } from '@angular/core';
declare var echarts: any;
@Component({
  selector: 'band-echart',
  templateUrl: './band-echart.component.html',
  styleUrls: ['./band-echart.component.css']
})
export class BandEchartComponent implements OnInit {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @ViewChild('main') main
  @Input() result = {
    "result": {
      "simple_size": [10, 24, 48, 96],
      "cmax": [86.11162282, 86.80422013, 88.82742124, 89.5800514],
      "ci90": [
        [10.12079116, 9.884907884],
        [8.315755291, 8.157550947],
        [7.104273246, 6.998062628],
        [4.945397473, 4.892707625]
      ]
    }
  };


  @Input() color: string = 'red';
  @Input() areaColor: string = '#ccc'
  constructor() { }

  ngOnInit() {


    let data = this.result.result.cmax.map((val, i) => {
      return {
        value: val,
        x: this.result.result.simple_size[i],
        l: this.result.result.ci90[i][0],
        u: this.result.result.ci90[i][1]
      }
    });

    let max = Math.max(...this.result.result.simple_size);
    let length2 = Math.ceil(max / 50);
    let arr = new Array(length2);
    arr.fill('0');



    var myChart = echarts.init(this.main.nativeElement);

    let option = {
      title: {
        title: this.title,
        subtext: this.title,
        subtextStyle: { fontSize: 23, color: 'black' },
        bottom: true,
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        // data:['最高气温','最低气温']
      },
      toolbox: {
        show: false,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}

        }
      },
      xAxis: {
        gridIndex: 0,
        axisTick: 0,
        offset: 0,
        min: 0,
        axisLabel: {
          formatter: function (value, idx) {
            return value;
          }
        },

        //  markPoint: {
        //   data: arr.map((item, i) => (i + 1) * 50),

        // },
        type: 'category',
        boundaryGap: true,
        data: this.result.result.simple_size,
        splitNumber: 50,
        slider: 50,
      },
      yAxis: {
        name: this.subTitle,
        nameLocation: 'middle',
        nameTextStyle: { fontSize: 26 },
        nameGap: 25,
        gridIndex: 0,
        offset: 0,
        axisTick: 0,
        min: 0,
        type: 'value',
        axisLabel: {
          formatter: '{value} '
        },
        max: 150,
        splitLine: {
          show: false
        },
      },
      series: [
        {
          name: 'L',
          type: 'line',
          data: data.map(function (item, i) {
            return item.value - item.u;
          }),

          lineStyle: {
            normal: {
              opacity: 0
            }
          },
          stack: 'confidence-band',
          symbol: 'none'
        }, {
          name: 'U',
          type: 'line',
          data: data.map(function (item, i) {
            return item.u + item.l;
          }),
          areaStyle: {
            normal: {
              color: this.areaColor
            }

          },
          lineStyle: {
            normal: {
              opacity: 0
            }
          },


          stack: 'confidence-band',
          symbol: 'none',


        }, {
          type: 'line',
          data: data.map(function (item) {
            return item.value;
          }),
          hoverAnimation: false,
          itemStyle: {
            normal: {
              // opacity: 0,
              color: this.color,
            }
          },
          symbolSize: 10,

          symbol: 'emptyCircle',
          // showSymbol: true,
        },
        {
          name: '最低气温',
          type: 'line',
          markLine: {
            data: [
              {
                yAxis: 80
              },
              {
                yAxis: 125
              }
            ]
          }
        }
      ]
    };

    myChart.setOption(option);

  }

}
