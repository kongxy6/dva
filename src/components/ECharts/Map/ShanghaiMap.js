import React, { Component } from 'react';
import styles from '../Canvas.css';
import { connect } from 'dva';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/map';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import '../../../../node_modules/_echarts@4.2.1@echarts/map/js/province/shanghai';

class ShanghaiMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myChart: null,
      reDrawMark: 1
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.state.myChart = echarts.init(document.getElementById('shanghai'));
    let data = [
      { name: '黄浦区', value: 99 },
      { name: '徐汇区', value: 54 },
      { name: '长宁区', value: 42 },
      { name: '静安区', value: 43 },
      { name: '普陀区', value: 35 },
      { name: '虹口区', value: 76 },
      { name: '杨浦区', value: 93 },
      { name: '闵行区', value: 76 },
      { name: '宝山区', value: 87 },
      { name: '嘉定区', value: 56 },
      { name: '浦东新区', value: 49 },
      { name: '金山区', value: 39 },
      { name: '松江区', value: 90 },
      { name: '青浦区', value: 59 },
      { name: '奉贤区', value: 19 },
      { name: '崇明区', value: 29 }
    ];
    let geoCoordMap = {
      黄浦区: [121.490317, 31.222771],
      徐汇区: [121.43752, 31.179973],
      长宁区: [121.4222, 31.218123],
      静安区: [121.448224, 31.229003],
      普陀区: [121.392499, 31.241701],
      虹口区: [121.491832, 31.26097],
      杨浦区: [121.522797, 31.270755],
      闵行区: [121.375972, 31.111658],
      宝山区: [121.489934, 31.398896],
      嘉定区: [121.250333, 31.383524],
      浦东新区: [121.567706, 31.245944],
      金山区: [121.330736, 30.724697],
      松江区: [121.223543, 31.03047],
      青浦区: [121.113021, 31.151209],
      奉贤区: [121.458472, 30.912345],
      崇明区: [121.4, 31.62]
    };

    const normal = [
      {
        fromName: '嘉定区',
        toName: '奉贤区',
        coords: [[121.250333, 31.383524], [121.458472, 30.912345]],
        speed: 50
      }
    ];
    const down = [
      {
        fromName: '嘉定区',
        toName: '青浦区',
        coords: [[121.250333, 31.383524], [121.113021, 31.151209]],
        speed: 0
      }
    ];

    let convertData = function(data) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      console.log(res);
      return res;
    };
    // 绘制图表
    this.state.myChart.setOption({
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        formatter: function(params) {
          if (params.value) {
            return params.name + ' <br> ' + params.value[2];
          } else {
            return params.data.fromName + ' -> ' + params.data.toName;
          }
        }
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: [
          'pm2.5',
          'highLight',
          {
            name: 'line',
            icon: 'circle',
            textStyle: {
              color: 'red'
            }
          },
          {
            name: 'line-break',
            icon: 'circle',
            textStyle: {
              color: 'red'
            }
          }
        ]
      },
      geo: {
        map: '上海',
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'orange',
            borderWidth: 1,
            label: {
              show: false
            }
          },
          emphasis: {
            borderColor: '#49e1ff',
            borderWidth: 2,
            label: {
              show: false
            }
          }
        },
        zoom: 1.2,
        roam: false,
        zlevel: -1
      },
      series: [
        {
          name: 'pm2.5',
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 1,
          data: convertData(data),
          roam: false,
          symbolSize: function(val, params) {
            return val[2] / 8;
          },
          label: {
            normal: {
              formatter: function(params) {
                return params.name;
              },
              position: 'right',
              show: true
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#ddb926'
            }
          }
        },
        {
          name: 'highLight',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          symbolSize: function(val) {
            return val[2] / 8;
          },
          data: convertData(data),
          rippleEffect: {
            period: 4,
            scale: 2.5,
            brushType: 'stroke'
          },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: '#F4E925' //字体颜色
            },
            label: {
              show: true
            }
          }
        },
        {
          name: 'line',
          type: 'lines',
          coordinateSystem: 'geo',
          zlevel: 4,
          large: true,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.1,
            color: '#72fff8',
            symbol: 'arrow',
            symbolSize: 8,
            delay: 1000
          },
          lineStyle: {
            normal: {
              color: function(params) {
                console.log(params);
                let num = params.data.speed;
                if (num > 0) {
                  return '#0fff17';
                } else {
                  return '#FF171C';
                }
              },
              width: 2,
              opacity: 1.0,
              curveness: 0.15
            }
          },
          data: normal
        },
        {
          name: 'line-break',
          type: 'lines',
          coordinateSystem: 'geo',
          zlevel: 4,
          large: true,
          effect: {
            show: false,
            period: 6,
            trailLength: 0.1,
            color: '#72fff8',
            symbol: 'arrow',
            symbolSize: 8,
            delay: 1000
          },
          lineStyle: {
            normal: {
              color: function(params) {
                console.log(params);
                let num = params.data.speed;
                if (num > 0) {
                  return '#0fff17';
                } else {
                  return '#FF171C';
                }
              },
              width: 2,
              opacity: 1.0,
              curveness: 0.15
            }
          },
          data: down
        }
      ]
    });
    // 设置一个定时器
    this.timerID = setInterval(() => this.tick(), 5000);
  }

  tick = () => {
    const normal = [
      {
        fromName: '嘉定区',
        toName: '奉贤区',
        coords: [[121.250333, 31.383524], [121.458472, 30.912345]],
        speed: 50
      },
      {
        fromName: '嘉定区',
        toName: '崇明区',
        coords: [[121.250333, 31.383524], [121.4, 31.62]],
        speed: 50
      }
    ];
    const down = [
      {
        fromName: '嘉定区',
        toName: '青浦区',
        coords: [[121.250333, 31.383524], [121.113021, 31.151209]],
        speed: 0
      }
    ];
    const _normal = [
      {
        fromName: '嘉定区',
        toName: '奉贤区',
        coords: [[121.250333, 31.383524], [121.458472, 30.912345]],
        speed: 50
      },
      {
        fromName: '嘉定区',
        toName: '青浦区',
        coords: [[121.250333, 31.383524], [121.113021, 31.151209]],
        speed: 50
      }
    ];
    const _down = [
      {
        fromName: '嘉定区',
        toName: '崇明区',
        coords: [[121.250333, 31.383524], [121.4, 31.62]],
        speed: 0
      }
    ];
    this.state.myChart.setOption(
      {
        series: [
          {
            name: 'line',
            data: this.state.reDrawMark > 0 ? _normal : normal
          },
          {
            name: 'line-break',
            data: this.state.reDrawMark > 0 ? _down : down
          }
        ]
      },
      false
    );
    this.setState(function(preState) {
      if (preState.reDrawMark === 1) {
        return {
          reDrawMark: 0
        };
      } else {
        return {
          reDrawMark: 1
        };
      }
    });
  };

  render() {
    return <div id="shanghai" className={styles.chart} />;
  }
}

function mapStateToProps(state) {
  // 得到modal中的state将其赋值给该组件的属性
  return {
    ...state.user
  };
}

export default connect(mapStateToProps)(ShanghaiMap);
