import { CommentData, getCommentData } from '@src/api/comment'
import PageTitle from '@src/components/pageTitle'
import BaseContainer from '../components/baseContainer'
import CommentInputArea from './components/commentInputArea'
import CommentList from './components/commentList'
import style from './style.module.less'

const data = [
  {
    id: '1',
    parentId: '',
    content: '发动机卡达开发',
    creator: {
      avatar: '',
      nickname: 'sfdsf',
      mail: '233423@qq.com',
      homePage: 'sdfsfa',
      isAdmin: false,
    },
    publishTime: 1647782010946,
  },
  {
    id: '2',
    parentId: '1',
    content: '发动机卡达开发',
    creator: {
      avatar: '',
      nickname: 'sfdsf',
      mail: '233423@qq.com',
      homePage: 'sdfsfa',
      isAdmin: true,
    },
    publishTime: 1647702010946,
  },
  {
    id: '3',
    parentId: '',
    content: '发动机卡达开发',
    creator: {
      avatar: '',
      nickname: 'sfdsf',
      mail: '233423@qq.com',
      homePage: 'sdfsfa',
      isAdmin: true,
    },
    publishTime: 1647781010946,
  },
]

const Comment = () => {
  return (
    <BaseContainer
      getData={getCommentData}
      className={style['comment-container']}
    >
      {() => {
        const topLevelComments = data.filter(v => {
          return v.parentId === ''
        })

        const finalData = topLevelComments.map(parent => {
          const children = data.filter(c => c.id === parent.id)
          return {
            parent,
            children,
          }
        })

        console.log(finalData, 'ss')

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
              <CommentList data={finalData} />
            </div>
          </>
        )
      }}
    </BaseContainer>
  )
}

export default Comment
