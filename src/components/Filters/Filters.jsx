import React, { useContext, useState } from 'react'
import { store } from '../../context/Context'
import Button from '../Button/Button'
import Category from '../Category/Category'
import Sortby from '../sortBy/Sortby'
import css from './filters.module.css'

const Filters = () => {
  const [isActive, setIsActive] = useState(false)
  const {setUser} = useContext(store)
  const logout = ()=>{
    localStorage.removeItem('user')
    setUser(false)
  }
  return (<>
    <Button className={`${css.filter_btn}`} label={"Filters"} handleFunction={() => setIsActive(prev => !prev)} />
    <div className={`${css.container} ${isActive ? css.active : css.inactive}`} >
      <h3 className={css.container_heading}>Filters</h3>
      <Sortby />
      <Category />
      <Button className={`${css.logout_btn}`} label={"Log Out"} handleFunction={logout} />
    </div>
  </>
  )
}

export default Filters