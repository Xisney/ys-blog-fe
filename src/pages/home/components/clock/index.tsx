import * as echarts from 'echarts/core'
import { GaugeChart, GaugeSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { useEffect, useRef } from 'react'
import ReactEChartsCore from 'echarts-for-react/lib/core'

echarts.use([GaugeChart, CanvasRenderer])

const option: echarts.ComposeOption<GaugeSeriesOption> = {
  series: [
    {
      name: 'hour',
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 12,
      splitNumber: 12,
      clockwise: true,
      axisLine: {
        lineStyle: {
          width: 4,
          color: [[1, 'rgba(0,0,0,0.7)']],
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 8,
        },
      },
      splitLine: {
        lineStyle: {
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 3,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
        },
      },
      axisLabel: {
        fontSize: 24,
        distance: 20,
        formatter: function (value) {
          if (value === 0) {
            return ''
          }
          return value + ''
        },
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 12,
        length: '55%',
        offsetCenter: [0, '8%'],
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4,
        },
      },
      detail: {
        show: false,
      },
      title: {
        offsetCenter: [0, '30%'],
      },
      data: [
        {
          value: 0,
        },
      ],
    },
    {
      name: 'minute',
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 60,
      clockwise: true,
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 8,
        length: '70%',
        offsetCenter: [0, '8%'],
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4,
        },
      },
      anchor: {
        show: true,
        size: 20,
        showAbove: false,
        itemStyle: {
          borderWidth: 15,
          borderColor: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4,
        },
      },
      detail: {
        show: false,
      },
      title: {
        offsetCenter: ['0%', '-40%'],
      },
      data: [
        {
          value: 0,
        },
      ],
    },
    {
      name: 'second',
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 60,
      animationEasingUpdate: 'bounceOut',
      clockwise: true,
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 4,
        length: '85%',
        offsetCenter: [0, '8%'],
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4,
        },
      },
      anchor: {
        show: true,
        size: 15,
        showAbove: true,
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4,
        },
      },
      detail: {
        show: false,
      },
      title: {
        offsetCenter: ['0%', '-40%'],
      },
      data: [
        {
          value: 0,
        },
      ],
    },
  ],
}

const Clock = () => {
  const domRef = useRef<ReactEChartsCore>(null)

  useEffect(() => {
    const chartIns = domRef.current?.getEchartsInstance()!
    chartIns.setOption(option)
    const timer = setInterval(function () {
      var date = new Date()
      var second = date.getSeconds()
      var minute = date.getMinutes() + second / 60
      var hour = (date.getHours() % 12) + minute / 60

      option.animationDurationUpdate = 300
      chartIns.setOption({
        series: [
          {
            name: 'hour',
            animation: hour !== 0,
            data: [{ value: hour }],
          },
          {
            name: 'minute',
            animation: minute !== 0,
            data: [{ value: minute }],
          },
          {
            animation: second !== 0,
            name: 'second',
            data: [{ value: second }],
          },
        ],
      })
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={option}
      notMerge={true}
      lazyUpdate={true}
      ref={domRef}
      style={{
        width: 440,
        height: 440,
        transform: 'translate(-25%, -25%) scale(.5)',
      }}
    />
  )
}

export default Clock
