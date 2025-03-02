import {NavLink, Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div className='root-layout'>
      {/* Spinner 
        <header>
            <nav>
                
            </nav>
        </header>
      */}

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout