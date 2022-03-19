import { getCommentData } from '@src/api/comment'
import PageTitle from '@src/components/pageTitle'
import BaseContainer from '../components/baseContainer'
import CommentInputArea from './components/commentInputArea'
import style from './style.module.less'

const Comment = () => {
  return (
    <BaseContainer
      getData={getCommentData}
      className={style['comment-container']}
    >
      {() => {
        return (
          <>
            <PageTitle title="留言板" />
            <div className="comment-mainArea">
              <div className="comment-header">
                欢迎来到 <span style={{ color: 'pink' }}>YS</span> 的博客
                <br />
                你可以在这里留言交流
                <br />
                来看看吧~
              </div>
              <div className="comment-division" />
              <CommentInputArea />
            </div>
          </>
        )
      }}
    </BaseContainer>
  )
}

export default Comment
