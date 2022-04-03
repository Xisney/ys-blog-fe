import PageTitle from '@src/components/pageTitle'
import AboutPieChart from './components/aboutPieChart'
import { getAboutData, AboutData } from '@src/api/about'
import BaseContainer from '../components/baseContainer'
import style from './style.module.less'
import CommonReader from '@src/components/commonReader'
import { useRecoilValue } from 'recoil'
import { groupsAndTagsAtom } from '@src/atom/index'

const About = () => {
  const groupData = useRecoilValue(groupsAndTagsAtom)

  return (
    <BaseContainer className={style['about-container']} getData={getAboutData}>
      {(data: AboutData) => {
        return (
          <>
            <PageTitle title="关于" />
            <article className="about-mainArea">
              <div className="pie-wrapper">
                <AboutPieChart
                  data={
                    groupData?.data.groups
                      .filter(({ blogNum }) => blogNum)
                      .map(({ label, blogNum }) => ({
                        name: label,
                        value: blogNum,
                      })) || []
                  }
                />
              </div>

              <CommonReader content={data.data} />
            </article>
          </>
        )
      }}
    </BaseContainer>
  )
}

export default About
