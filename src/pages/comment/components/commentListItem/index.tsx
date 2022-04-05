import { FC, useState } from 'react'
import Avatar from '../avatar'
import style from './style.module.less'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { MessageOutlined } from '@ant-design/icons'
import CommentInputArea from '../commentInputArea'

dayjs.extend(relativeTime)

interface CommentItem {
  avatar: string
  timestamp: string
  content: string
  nickname: string
  showReply?: boolean
  isAdmin?: boolean
}

interface CommentListItemProps extends CommentItem {
  childrenComments?: (CommentItem & { id: number })[]
  onReply?: () => void
  showReplyArea?: boolean
  id?: number
}

const CommentListItem: FC<CommentListItemProps> = ({
  avatar,
  nickname,
  isAdmin,
  timestamp,
  content,
  showReply,
  childrenComments,
  onReply,
  showReplyArea,
  id,
}) => {
  return (
    <div className={style['commentItem-wrapper']}>
      <Avatar src={avatar} />
      <div className="commentItem-info">
        <div className="commentItem-info-header">
          <div className="comment-creator">
            <span className="comment-nickname">{nickname}</span>
            {isAdmin && <span className="comment-adminLabel">站长</span>}
            <span className="comment-time">{dayjs(timestamp).toNow()}</span>
          </div>
          {showReply && (
            <MessageOutlined className="reply-icon" onClick={onReply} />
          )}
        </div>
        <div className="commentItem-info-bottom">{content}</div>
        {showReplyArea && (
          <>
            <h3 className="reply-title">{`回复给${nickname}:`}</h3>
            <CommentInputArea className="reply-commentArea" parentId={id} />
          </>
        )}
        {childrenComments?.map(({ id, ...rest }) => {
          return <CommentListItem {...rest} key={id} />
        })}
      </div>
    </div>
  )
}

export default CommentListItem
