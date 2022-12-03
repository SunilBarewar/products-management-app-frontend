import React from 'react'
import css from './navbar.module.css'
import { UilSearch } from '@iconscout/react-unicons'
import logo from '../../assets/logo1.png'
import Input from '../Input/Input'
import { useContext } from 'react'
import { store } from '../../context/Context'
const Navbar = () => {
  const {searchQuery,setSearchQuery,setPage} = useContext(store)
  const onChange = (e) =>{
      setSearchQuery(e.target.value)
      setPage(1)
  }
  return (
    <div className={css.navbar}>
        <div className={css.nav_logo}>
          <img src={logo} alt="" />
        </div>
        <div className={css.nav_search}>
            <Input value={searchQuery} handleChange={onChange} type={"text"} placeholder={'search'} className={css.search} name={"search"} />
            <UilSearch  size = "50"/>
        </div>
    </div>
  )
}

export default Navbar