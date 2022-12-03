import Product from '../product/Product'
import css from './productList.module.css'
import { columnFields } from '../../data/options.js'
import { useContext } from 'react'
import { store } from '../../context/Context'
import emptyStore from '../../assets/empty.png'
const ProductList = () => {
  const { products } = useContext(store)

  return (
    <div className={css.main_conatiner}>
      <table className={css.list_container}>
        <thead>
          <tr className={css.header_row}>
            {
              columnFields.map((field, i) => {
                return (
                  <th className={css.col_heading}>{field}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            products !== undefined ? (

              products.map((product, i) => {
                return (
                  <>
                    <Product key={product._id} product={product} />
                  </>
                )
              })
            ) : (
              <div className={css.empty_store}>
                <img src={emptyStore} alt="" />
                <span>your store has no products!!!!!</span>
              </div>
            )
          }

        </tbody>
      </table>
    </div>
  )
}

export default ProductList