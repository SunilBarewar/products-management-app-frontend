import { useContext } from 'react'
import { store } from '../../context/Context'
import css from './select.module.css'
const Select = ({ name, options }) => {
    const {setSortby,setPage} = useContext(store)
    const handleChange = (e) =>{
        if(e.target.value === "priceDec"){
            setSortby({option:"price",order:-1})
            return;
        }else if(e.target.value === "priceInc"){
            setSortby({option:"price",order:1})
            return
        }
        setSortby({option:"rating",order:-1})
        setPage(1)
        return;
    }
    return (<div className={css.options}>
        <select onChange = {handleChange} name={name}>
            {
                options.map((option) => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })
            }
        </select>
    </div>
    )
}

export default Select