import { Link } from 'react-router-dom'
import style from './style.module.less'
import {
  GithubOutlined,
  HomeOutlined,
  SendOutlined,
  UserOutlined,
  TagOutlined,
  MessageOutlined,
} from '@ant-design/icons'

const Aside = () => {
  return (
    <div className={style.aside}>
      <div className="info-area">
        <img src="/ys.png" alt="avatar" />
        <p>名字</p>
        <span>十一月的肖邦</span>
        <ul className="social-links">
          <li>
            <a href="https://github.com/Xisney">
              <GithubOutlined />
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-area">
        <span>导航</span>
        <ul className="nav-list">
          <li>
            <Link to="/">
              <HomeOutlined /> 首页
            </Link>
          </li>
          <li>
            <Link to="/navigation">
              <SendOutlined /> 导航
            </Link>
          </li>
          <li>
            <Link to="/about">
              <UserOutlined /> 关于
            </Link>
          </li>
          <li>
            <Link to="/archive">
              <TagOutlined /> 归档
            </Link>
          </li>
          <li>
            <Link to="/comment">
              <MessageOutlined /> 留言
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Aside
