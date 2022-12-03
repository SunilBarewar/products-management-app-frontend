import {sortByOptions} from '../../data/options.js' 
import Select from '../Select/Select'
import css from './sortby.module.css'
const Sortby = () => {
  return (
    <div className={css.container}>
        <h5 className={css.container_heading}>sort by</h5>
        <Select name={"sortby"} options={sortByOptions}/>
    </div>
  )
}

export default Sortby