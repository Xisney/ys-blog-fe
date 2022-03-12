import { FC, useMemo } from 'react'
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { PieChart, PieSeriesOption } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import ReactEChartsCore from 'echarts-for-react/lib/core'

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
])

interface AboutPieChartProps {
  data: {
    value: number
    name: string
  }[]
}

const AboutPieChart: FC<AboutPieChartProps> = ({ data }) => {
  const pieOptions = useMemo<PieSeriesOption>(() => {
    return {
      title: {
        text: '文章分布',
        subtext: '分组数据',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }
  }, [data])

  return (
    <ReactEChartsCore
      option={pieOptions}
      style={{ width: '100%', height: 500 }}
      echarts={echarts}
    ></ReactEChartsCore>
  )
}

export default AboutPieChart
