import React, { useContext } from 'react'
import Link from 'next/link'
import { UserContext } from './Context/UserContext';
import { useRouter } from 'next/router';

const Navbar = () => {
const { user, setUser } = useContext(UserContext);
const router = useRouter();

const handleLogout =()=> {
  setUser(null)
}
  return (
    <nav>
        <Link className={router.pathname=='/about' ? 'nav__item--active' : null} href='/about'> About </Link>
        <Link className={router.pathname=='/contact' ? 'nav__item--active' : null} href='/contact'> Contact </Link>
        <Link className={router.pathname=='/blog' ? 'nav__item--active' : null} href='/blog'> Blog </Link>
        {
          !user ?  <Link className='btn btn-success' href="user/auth"> Signin</Link> :  (<><strong>Yo { user } </strong> <Link onClick={handleLogout} className='btn btn-danger' href='/'>Logout</Link></>)
        }
    </nav>
  )
}

export default Navbar