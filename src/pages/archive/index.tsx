import { ArchiveData, getArchiveData } from '@src/api/archive'
import BaseContainer from '../components/baseContainer'

const Archive = () => {
  return (
    <BaseContainer getData={getArchiveData}>
      {(data: ArchiveData) => {
        return <div>2222</div>
      }}
    </BaseContainer>
  )
}

export default Archive
