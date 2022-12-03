export const columnFields = ["Image", "Name", "Price", "Rating", "Actions"]

export const sortByOptions = [
    { value: "rating", label: "rating" },
    { value: "priceInc", label: "price low-high" },
    { value: "priceDec", label: "price high-low" }
]

export const productInputFields = [
    {name:"name",placeholder:"Enter the product name",type:"text"},
    {name:"price",placeholder:"Enter price",type:"text"},
    {name:"rating",placeholder:"Enter rating",type:"text"},
    {name:"category",placeholder:"product category",type:"text"},
    {name:"image", placeholder:"choose image",type:"file"},
]

export const productCategories = ["smartphone", "laptop", "shoes", "watch", "shirts"]