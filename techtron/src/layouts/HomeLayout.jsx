import {NavLink, Outlet} from 'react-router-dom'

function HomeLayout() {
  return (
    <div>
        <h3>Home layout wrapped</h3>

        <Outlet/>
    </div>
  )
}

export default HomeLayout