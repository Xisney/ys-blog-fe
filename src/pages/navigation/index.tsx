import BaseContainer from '../components/baseContainer'
import NavCard, { NavCardProps } from './components/navCard'
import { getNavigationItems } from '@src/api/navigation'
import NavAnchor from './components/navAnchor'
import PageTitle from '@src/components/pageTitle'
import style from './style.module.less'

const Navigation = () => {
  return (
    <BaseContainer
      className={style['navigation-container']}
      getData={getNavigationItems}
    >
      {(data: NavCardProps[]) => {
        return (
          <>
            <PageTitle title="导航" />
            <div className="navigation-mainArea">
              {data?.map((v, i) => (
                <NavCard {...v} key={i} />
              ))}
            </div>
            <NavAnchor anchorList={data?.map((v) => v.cardTitle)} />
          </>
        )
      }}
    </BaseContainer>
  )
}

export default Navigation
