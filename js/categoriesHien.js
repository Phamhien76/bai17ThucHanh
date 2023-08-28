//Coi như trong localStorage có item với key là arrCategories chứa tất cả các danh mục
// lấy dữ liệu từ trong localStorage_Nếu null thì khởi tạo mãng arrCategories
let arrCatagories = JSON.parse(localStorage.getItem("cataloglist")) || [];
// giá trị trong ô input
let catalogId = document.getElementById("catalogId");
let catalogName = document.getElementById("catalogName");
let priority = document.getElementById("priority");
let description = document.getElementById("description");
let status_Active = document.getElementById("active");
let status_InActive = document.getElementById("inActive");
// khai báo biến để đánh số thứ tự
let index = 1;
// định ngĩa số dữ liệu trên trang
let recordsPerPage = 3;
//định nghĩa action đang thực hiện
let action = "Create";
function createCatalog(event) {
    //event.preventDefault();
    let status = document.querySelector("input[type='radio']:checked");
    //tạo object để đưa dữ liệu từ ô input vào
    let newCatalog = {
        catalogId: catalogId.value,
        catalogName: catalogName.value,
        priority: priority.value,
        description: description.value,
        status: status.value == true ? "active" : "inActive"
    };
    resetFromCatalog();
    //cho vào mãng arrlocalStorage
    arrCatagories.push(newCatalog);
    //cho vào localStorage
    localStorage.setItem("cataloglist", JSON.stringify(arrCatagories));
};
//Hàm chức năng edit
function editCatalog(catalogId) {
    let i;
    for (i = 0; i < arrCatagories.length; i++) {
        if (arrCatagories[i].catalogId == catalogId) {
            catalogId.value = arrCatagories[i].catalogId;
            catalogName.value = arrCatagories[i].catalogName;
            priority.value = arrCatagories[i].priority;
            description.value = arrCatagories[i].deleteCatalog;
            status_Active.checked = arrCatagories[i].status;
        }

    }
    document.getElementById("btnSave").style.display = "none";
    document.getElementById("btnEdit").style.display = "block";
}
function editButton() {

}



function deleteCatalog() {

}


//Hàm làm trống form sau khi nhập
function resetFromCatalog() {
    catalogId.value = "";
    catalogName.value = "";
    priority.value = "";
    description.value = "";
    status_Active.checked = true;
}
//thêm mới dữ liệu từ ô input vào table
function insertDataFromLocalStorage() {
    let i;
    for (i = 0; i < arrCatagories.length; i++) {
        document.getElementById("listCatalog").innerHTML +=
            `
    <tr>
    <td>${index++}</td>
    <td>${arrCatagories[i].catalogId}</td>
    <td>${arrCatagories[i].catalogName}</td>
    <td>${arrCatagories[i].priority}</td>
    <td>${arrCatagories[i].description}</td>
    <td>${arrCatagories[i].status}</td>
    <td>
    <button onclick=(editCatalog('${arrCatagories.catalogId}'))>Edit</button>
    <button onclick=(deleteCatalog('${arrCatagories.catalogId}'))>Delete</button>
    </td>
    </tr>
    `
    };
}
// phân trang
function renderData(page) {
    //hiển thị dữ liệu cho page
    //1. Render danh sách trang
    //1.1 tính được tổng số trang cần render
    let totalPage = getTotalPage;
}
//funsiton tính tổng số trang theo dư liệu
function getTotalPage() {
    return Math.ceil(arrCatagories.leng / recordsPerPage);
}










insertDataFromLocalStorage();





