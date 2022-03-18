import { getCommentData } from '@src/api/comment'
import PageTitle from '@src/components/pageTitle'
import BaseContainer from '../components/baseContainer'

const Comment = () => {
  return (
    <BaseContainer getData={getCommentData}>
      {() => {
        return (
          <>
            <PageTitle title="留言板" />
          </>
        )
      }}
    </BaseContainer>
  )
}

export default Comment
