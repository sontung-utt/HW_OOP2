class Store{
    name;
    listProduct;
    constructor(nameInput){
        this.name = nameInput;
        this.listProduct = [];
    }
    addProduct(newProduct){
        this.listProduct.push(newProduct);
    }

    removeProduct(index){
        this.listProduct.splice(index,1);
    }

    getEditProduct(index){
        let editProduct = this.listProduct[index];
        return editProduct;
    }

    editProduct(index, newProduct){
        this.listProduct[index] = newProduct; 
    }
}