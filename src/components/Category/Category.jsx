import { useContext } from "react"
import { store } from "../../context/Context"
import { productCategories } from "../../data/options"
import Input from "../Input/Input"
import css from './category.module.css'
const Category = () => {
    const { setCategories,setPage } = useContext(store)
    const handleChange = (e) => {
        if (e.target.checked) {
            setCategories(prev => [...prev, e.target.value])
            return;
        }

        setCategories(prev => prev.filter((category) => category !== e.target.value))
        setPage(1)

    }
    return (
        <div className={css.container}>
            <h5 className={css.container_heading}>Categories</h5>
            <div className={css.options}>
                {
                    productCategories.map((category, i) => {
                        return (
                            <div key={i} className={css.option}>
                                <Input handleChange={handleChange} type={"checkbox"} value={category} name={category} />
                                <label> {category}</label>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Category