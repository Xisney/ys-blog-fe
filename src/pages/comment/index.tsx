import { RequestCommentData, getCommentData } from '@src/api/comment'
import NoData from '@src/components/noData'
import PageTitle from '@src/components/pageTitle'
import BaseContainer from '../components/baseContainer'
import CommentInputArea from './components/commentInputArea'
import CommentList from './components/commentList'
import { CommentCtx } from './context'
import style from './style.module.less'

const Comment = () => {
  return (
    <BaseContainer
      getData={getCommentData}
      className={style['comment-container']}
    >
      {({ data }: RequestCommentData, setData) => {
        data.sort(
          (a, b) =>
            new Date(b.publishTime).getTime() -
            new Date(a.publishTime).getTime()
        )
        const topLevelComments = data.filter(v => {
          return v.parentId === 0
        })

        const finalData = topLevelComments.map(parent => {
          const children = data.filter(c => c.parentId === parent.id)
          return {
            parent,
            children,
          }
        })

        return (
          <>
            <PageTitle title="留言板" />
            <CommentCtx value={setData}>
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
                {finalData.length === 0 ? (
                  <NoData />
                ) : (
                  <CommentList data={finalData} />
                )}
              </div>
            </CommentCtx>
          </>
        )
      }}
    </BaseContainer>
  )
}

export default Comment
