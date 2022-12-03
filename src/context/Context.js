import { createContext, useState, useEffect} from "react";
import { getProducts } from "../api/productApi";

export const store = createContext();

const Context = ({ children }) => {
    const [user, setUser] = useState(false)
    const [categories, setCategories] = useState([])
    const [sortby, setSortby] = useState({ option: "rating", order: -1 })
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
    }, [])

    useEffect(() => {
        async function fetchProducts() {
            let url = `?page=${page}&sort=${sortby.option}&order=${sortby.order}&category=${categories.toString()}&search=${searchQuery}`

            try {
                const res = await getProducts(url);
                setProducts(res.data.products);
                setPageCount(res.data.pageCount);
            } catch (error) {
                console.log(error)
            }

        }
        fetchProducts();
    }, [page, searchQuery, categories, sortby])

    return <store.Provider value={{
        pageCount,
        products,
        page,
        searchQuery,
        user,
        setCategories,
        setSortby,
        setPage,
        setProducts,
        setUser,
        setPageCount,
        setSearchQuery
    }}>
        {children}
    </store.Provider>

}

export default Context