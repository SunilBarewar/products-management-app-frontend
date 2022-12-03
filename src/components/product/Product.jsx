import React from 'react'
import css from './product.module.css'
import { UilEdit, UilTrashAlt, UilStar } from '@iconscout/react-unicons'
import { deleteImage, deleteProduct, getProducts } from '../../api/productApi'
import { useState } from 'react'
import ProductModel from '../ProductModel/ProductModel'
import Button from '../Button/Button'
import { useContext } from 'react'
import { store } from '../../context/Context'
import toast from 'react-hot-toast'
import { baseUrl } from '../../api/API'
const Product = ({ product }) => {
  const { setProducts, setPage, setPageCount } = useContext(store)
  const [modalOpened, setModalOpened] = useState(false)

  const handleDelete = async () => {

    try {
      await deleteImage(product.image)
      await deleteProduct(product._id)
      const { data } = await getProducts("");
      toast.success("product deleted successfully")
      setPage(1)
      setProducts(data.products);
      setPageCount(data.pageCount);
    } catch (error) {
      toast.error("product not deleted")
    }

  }
  const handleEdit = () => {
    setModalOpened(true)
  }
  return (
    <tr className={css.product_container}>
      <td className={css.image_container}><img src={`${baseUrl}/images/${product.image}`} alt="" /></td>
      <td> <p className={css.text}>{product.name}</p> </td>
      <td className={css.text}>${product.price}</td>
      <td>
        <div className={css.rating}>
          <UilStar className={css.star} size="23" />
          <span className={css.text}>{product.rating}</span>
        </div>
      </td>
      <td>
        <div className={css.actions}>
          <Button label={<UilEdit size="30" className={css.edit} />} handleFunction={handleEdit} />
          <Button label={<UilTrashAlt size="30" className={css.delete} />} handleFunction={handleDelete} />
        </div>


        {
          modalOpened ?
            <ProductModel
              data={product}
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              action={"UPDATE"}
            /> : ""
        }
      </td>
    </tr>

  )
}

export default Product