import {NavLink, Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div className='root-layout'>
        <header>
            <nav>
                <h1>TechTron</h1>
                <NavLink to='/'>Intro</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout