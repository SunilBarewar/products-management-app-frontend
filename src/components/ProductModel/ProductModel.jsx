import { Modal, useMantineTheme } from "@mantine/core";
import {useState, useContext } from 'react'
import { addProduct, uploadImage, updateProduct, getProducts } from "../../api/productApi";
import css from './productModel.module.css'
import Input from "../Input/Input";
import { store } from "../../context/Context";
import toast from "react-hot-toast";
const ProductModel = ({ modalOpened, setModalOpened, data, action }) => {
    const theme = useMantineTheme();

    const [productData, setProductData] = useState(data)
    const [productImage, setProductImage] = useState(null);
    const { setProducts,setPage,setPageCount } = useContext(store);
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setProductImage(img)
        };
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = productData;
        console.log(data)
        if (productImage) {
            var imgData = new FormData();
            const fileName = Date.now() + '_' + productImage.name
            imgData.append("name", fileName)
            imgData.append('file', productImage)
            data.image = fileName;
            try {
                await uploadImage(imgData);
            } catch (error) {
                console.log(error)
            }
        }

        setModalOpened(false)

        try {

            console.log(action)
            if (action === "ADD") {
                await addProduct(data)
                toast.success(`product added to your store` );
            } else {
                await updateProduct(data._id, data)
                toast.success(`updated successfully` );
            }

            const res = await getProducts("?page=1");
            setPage(1)
            setProducts(res.data.products);
            setPageCount(res.data.pageCount)
        } catch (error) {
            console.log(error)
        }
       
    }

    const handleChange = (e) => {
        e.preventDefault()
        setProductData({ ...productData, [e.target.name]: e.target.value })
    }

    return (
        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size="auto"
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >

            <form className={css.product_container}>
                <h3>{action} PRODUCT </h3>

                <div className={css.product_field}>
                    <span>name</span>
                    <Input
                        value={productData.name}
                        type="text"
                        placeholder="Enter the product name"
                        className={css.product_info}
                        name="name"
                        handleChange={handleChange}
                    />
                </div>
                <div className={css.product_field}>
                    <span>price</span>
                    <Input
                        value={productData.price}
                        type="number"
                        handleChange={handleChange}
                        placeholder="Enter the price"
                        className={css.product_info}
                        name="price"
                    />
                </div>
                <div className={css.product_field}>
                    <span>rating</span>
                    <Input
                        value={productData.rating}
                        handleChange={handleChange}
                        type="number"
                        placeholder="Enter the rating"
                        className={css.product_info}
                        name="rating"
                    />
                </div>
                <div className={css.product_field}>
                    <span>category</span>

                    <Input
                        value={productData.category}
                        type="text"
                        handleChange={handleChange}
                        placeholder="Enter the category"
                        className={css.product_info}
                        name="category"
                    />
                </div>
                <div className={css.product_field}>
                    <span>image</span>
                    <Input
                        handleChange={onImageChange}
                        type="file"
                        placeholder="choose image"
                        className={css.product_info}
                        name="image"
                    />
                </div>

                <button className={css.btn_container} onClick={handleSubmit} >{action}</button>
            </form>
        </Modal>
    )
}

export default ProductModel