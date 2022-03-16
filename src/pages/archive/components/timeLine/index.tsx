import { FC } from 'react'
import { ArchiveData } from '@src/api/archive'
import style from './style.module.less'

interface TimeLineProps {
  data: ArchiveData[]
}

const colors = ['#F1962E', '#00A4EB', '#F08375', '#896BAE']

const TimeLine: FC<TimeLineProps> = ({ data }) => {
  return (
    <ul className={style['timeline-container']}>
      {data.map((v, i) => {
        const color = colors[i % 4]
        return (
          <li key={i} className="timeline-item">
            <h3 className="timeline-title" style={{ color: color }}>
              {v.archiveTime}
            </h3>
            <ul className="timeItem-wrapper">
              {v.articles.map(({ id, timeStamp, title }) => {
                return (
                  <li key={id}>
                    <div className="timeItem-time">{`${new Date(
                      +timeStamp
                    ).getDate()}日`}</div>
                    <div className="timeItem-line" />
                    <div
                      className="timeItem-dot"
                      style={{ borderColor: color }}
                    />
                    <div className="timeItem-title">
                      {title}
                      <div
                        className="title-bottom"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

export default TimeLine