import React from 'react'
import Filters from '../../components/Filters/Filters'
import Navbar from '../../components/Navbar/Navbar'
import Table from '../../components/Table/Table'
import css from './home.module.css'
const Home = () => {
  return (
    <div className={css.home_container}>
        <Navbar/>
      <div className={css.container}>
          <Table/>
          <Filters/>
      </div>
    </div>
  )
}

export default Home