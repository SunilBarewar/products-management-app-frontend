import React, {useState, useContext } from 'react'
import css from './Table.module.css'
import ProductModel from '../ProductModel/ProductModel'
import ProductList from '../ProductList/ProductList'
import Button from '../Button/Button'

import { store } from '../../context/Context'
const Table = () => {
    const [modalOpened, setModalOpened] = useState(false)
    const { page, pageCount, setPage } = useContext(store)
    function handlePrevious() {
        setPage((p) => {
            if (p === 1) return p;
            return p - 1;
        })
    }

    function handleNext() {
        setPage((p) => {
            if (p === pageCount) return p;
            return p + 1;
        })
    }
    const handleAddproduct = () => {
        setModalOpened(prev => !prev);
    }

    return (
        <div className={css.main_container}>
            <div className={css.btn_container}>
                <Button className={`${css.button} ${css.add_btn}`} label={"Add product"} handleFunction={handleAddproduct} />
            </div>
            {
                modalOpened ? (
                    <ProductModel
                        data={{}}
                        action={"ADD"}
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                    />
                ) : ""
            }
            <div className={css.product_list}>
                <ProductList />
            </div>

            <div className={css.pagination} >
                <Button handleFunction={handlePrevious} label={"prev"} disabled={page === 1} />
                <span>{pageCount === 0 ? 0 : page} of {pageCount}</span>
                <Button handleFunction={handleNext} label={"next"} disabled={page === pageCount} />
            </div>
        </div>
    )
}

export default Table