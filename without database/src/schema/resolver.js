const {products, categories} = require('./data')


const resolver = {
    Query: {
        products: (parent, args, context) => {
            return products
        },
        categories : (parent,args,context) =>{
            return categories
        },
        category: (parent,args,context)=>{
            const {id} = args
            return categories.find((category)=>category.id == id)
        }
    },
    Category : {
        products : (parent,args,context)=>{
            console.log(parent)
            const categoryId = parent.id
            
            return products.filter((product)=>product.categoryId === categoryId)
        }
    }
}

module.exports = resolver