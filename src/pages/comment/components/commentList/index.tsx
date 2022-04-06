import { CommentData } from '@src/api/comment'
import { FC, useEffect, useState } from 'react'
import CommentListItem from '../commentListItem'

interface CommentListProps {
  data: {
    parent: CommentData
    children: CommentData[]
  }[]
}

const CommentList: FC<CommentListProps> = ({ data }) => {
  const [showReplyIndex, setShowReplyIndex] = useState(-1)

  useEffect(() => {
    setShowReplyIndex(-1)
  }, [data])

  return (
    <div className="commentList-wrapper">
      {data.map(({ parent, children }, i) => {
        return (
          <CommentListItem
            avatar={parent.avatar}
            timestamp={parent.publishTime}
            content={parent.content}
            showReply
            nickname={parent.nickname}
            isAdmin={parent.isAdmin}
            id={parent.id}
            homepage={parent.homepage}
            childrenComments={children?.map(c => {
              return {
                avatar: c.avatar,
                timestamp: c.publishTime,
                content: c.content,
                nickname: c.nickname,
                isAdmin: c.isAdmin,
                id: c.id,
                homepage: c.homepage,
              }
            })}
            onReply={() => {
              if (i === showReplyIndex) {
                setShowReplyIndex(-1)
              } else {
                setShowReplyIndex(i)
              }
            }}
            showReplyArea={showReplyIndex === i}
            key={parent.id}
          />
        )
      })}
    </div>
  )
}

export default CommentList
