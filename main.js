// viết các function(thêm, sửa, xóa, hiển thị) tương tác html
let myStore = new Store("Tung's Store");//dữ liệu lấy từ đây
let pro1 = new Product(1, "Bánh mỳ", 200, "bread1.jpg");
let pro2 = new Product(2, "Bánh bao", 400, "bb.jpg");
console.log(myStore);
myStore.addProduct(pro1);
myStore.addProduct(pro2);
showProduct();

function removeProduct(index){
    //alert("Xóa vị trí: " + index);
    let isConfirm = confirm("Bạn có chắc chắn muốn xóa không?");
    if(isConfirm){
        alert("Xóa thành công!")
        myStore.removeProduct(index);
    }
    showProduct();

}

function addProduct() {
    let idInput = document.getElementById("idProduct").value;
    let nameInput = document.getElementById("nameProduct").value;
    let priceInput = document.getElementById("priceProduct").value;
    let imgInput = document.getElementById("imgProduct").value;
    let newProduct = new Product(idInput, nameInput, priceInput, imgInput);
    myStore.addProduct(newProduct);
    //alert("Thêm sản phẩm thành công!");
    showProduct();
    resetFormProduct();
}

function getEditProduct(index){
    let editProduct = myStore.getEditProduct(index);
    document.getElementById("idProduct").value = editProduct.id;
    document.getElementById("nameProduct").value = editProduct.name;
    document.getElementById("priceProduct").value = editProduct.price;
    document.getElementById("imgProduct").value = editProduct.img;
    document.getElementById("btnSave").innerHTML = `<button onclick="editProduct(${index})">Edit</button>`;
    showProduct();
}

function editProduct(index){
    let idInput = document.getElementById("idProduct").value;
    let nameInput = document.getElementById("nameProduct").value;
    let priceInput = document.getElementById("priceProduct").value;
    let imgInput = document.getElementById("imgProduct").value;
    let editProduct = new Product(idInput, nameInput, priceInput, imgInput);
    myStore.editProduct(index,editProduct);
    showProduct();
    resetFormProduct();
}

function showProduct() {
    let list = myStore.listProduct;
    let str = `
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th colspan="2">Action</th>
        </tr>
    `

    for (let i = 0; i < list.length; i++) {
        str += `
            <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].img}"></td>
            <td><button onclick="getEditProduct(${i})">Edit</button></td>
            <td><button onclick="removeProduct(${i})">Remove</button></td>
        </tr>
        `
    }
    document.getElementById("tableProduct").innerHTML = str;
}

function resetFormProduct(){
    document.getElementById("idProduct").value = "";
    document.getElementById("nameProduct").value = "";
    document.getElementById("priceProduct").value = "";
    document.getElementById("imgProduct").value = "";
    document.getElementById("btnSave").innerHTML = `<button onclick="addProduct()">Add</button>`;
}

//Tạo khung bao gồm các file => các class => dữ liệu => Test (Dữu liệu giả - console.log)\
//Chức năng: Tạo HTML{Sử dụng dữ liệu cứng để giả dụ}
//=> Xây dựng hàm (Nhớ lấy dữ liệu thông qua đối tượng <=> myStore)
//=> Gọi hàm => Kiểm tra lỗi (trong màn hình console)