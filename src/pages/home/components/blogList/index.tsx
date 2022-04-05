import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { FC, useMemo, useRef, useState } from 'react'
import ListCard from '../listCard'
import Pagination from '../pagination'

interface BlogListProps {
  data: {
    title: string
    tags: { label: string; id: number }[]
    group: { label: string; id: number }
    publishTime: string
    viewCount: number
    id: number
    description: string
  }[]
}

const pageSize = 10

const BlogList: FC<BlogListProps> = ({ data }) => {
  const navigate = useNavigate()

  const handleClickBlog = (id: number) => {
    navigate(`blog/${id}`)
  }

  const [currentPage, setCurrentPage] = useState(1)

  const articleList = useMemo(() => {
    return data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  }, [currentPage])

  return (
    <div className="home-card-list">
      {articleList.map(v => {
        return (
          <ListCard
            title={v.title}
            des={v.description}
            viewCount={v.viewCount}
            timeString={dayjs(v.publishTime).format('YYYY[年]M[月]D[日]')}
            tags={v.tags.map(v => v.label)}
            key={v.id}
            onClick={() => {
              handleClickBlog(v.id)
            }}
          />
        )
      })}
      <Pagination
        onChange={page => {
          setCurrentPage(page)
        }}
        total={data.length}
        pageSize={pageSize}
      />
    </div>
  )
}

export default BlogList
