import { CommentData } from '@src/api/comment'
import { FC } from 'react'
import CommentListItem from '../commentListItem'

interface CommentListProps {
  data: {
    parent: CommentData
    children: CommentData[]
  }[]
}

const CommentList: FC<CommentListProps> = ({ data }) => {
  return (
    <div className="commentList-wrapper">
      {data.map(({ parent, children }) => {
        return (
          <CommentListItem
            avatar={parent.creator.avatar}
            timestamp={parent.publishTime}
            content={parent.content}
            showReply
            nickname={parent.creator.nickname}
            isAdmin={parent.creator.isAdmin}
            childrenComments={children?.map((c) => {
              return {
                avatar: c.creator.avatar,
                timestamp: c.publishTime,
                content: c.content,
                nickname: c.creator.nickname,
                isAdmin: c.creator.isAdmin,
                id: c.id,
              }
            })}
            key={parent.id}
          />
        )
      })}
    </div>
  )
}

export default CommentList
