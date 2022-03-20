import { FC } from 'react'
import Avatar from '../avatar'
import style from './style.module.less'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { MessageOutlined } from '@ant-design/icons'

dayjs.extend(relativeTime)

interface CommentItem {
  avatar: string
  timestamp: number
  content: string
  nickname: string
  showReply?: boolean
  isAdmin?: boolean
}

interface CommentListItemProps extends CommentItem {
  childrenComments?: (CommentItem & { id: string })[]
}

const CommentListItem: FC<CommentListItemProps> = ({
  avatar,
  nickname,
  isAdmin,
  timestamp,
  content,
  showReply,
  childrenComments,
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
          {showReply && <MessageOutlined className="reply-icon" />}
        </div>
        <div className="commentItem-info-bottom">{content}</div>
        {childrenComments?.map(({ id, ...rest }) => {
          return <CommentListItem {...rest} key={id} />
        })}
      </div>
    </div>
  )
}

export default CommentListItem
