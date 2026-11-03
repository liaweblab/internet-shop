function showTab(tabId) {

    const tabs = document.querySelectorAll('.tab-content');

    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
}



function addProduct() {

    const id = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = document.getElementById('productPrice').value;
    const brand = document.getElementById('productBrand').value;
    const quantity = document.getElementById('productQuantity').value;
    const rating = document.getElementById('productRating').value;

    if (!id || !name || !category || !price || !brand || !quantity || !rating) {
        alert('Заповніть усі поля!');
        return;
    }

    const table = document.getElementById('productsTable');
    const row = table.insertRow();

    row.insertCell(0).textContent = id;
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = category;
    row.insertCell(3).textContent = price + ' грн';
    row.insertCell(4).textContent = brand;
    row.insertCell(5).textContent = quantity;
    row.insertCell(6).textContent = rating;

    document.getElementById('productId').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productBrand').value = '';
    document.getElementById('productQuantity').value = '';
    document.getElementById('productRating').value = '';
}


function addClient() {

    const id = document.getElementById('clientId').value;
    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const email = document.getElementById('clientEmail').value;
    const city = document.getElementById('clientCity').value;
    const date = document.getElementById('clientDate').value;

    if (!id || !name || !phone || !email || !city || !date) {
        alert('Заповніть усі поля!');
        return;
    }

    const table = document.getElementById('clientsTable');
    const row = table.insertRow();

    row.insertCell(0).textContent = id;
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = phone;
    row.insertCell(3).textContent = email;
    row.insertCell(4).textContent = city;
    row.insertCell(5).textContent = formatDate(date);

    document.getElementById('clientId').value = '';
    document.getElementById('clientName').value = '';
    document.getElementById('clientPhone').value = '';
    document.getElementById('clientEmail').value = '';
    document.getElementById('clientCity').value = '';
    document.getElementById('clientDate').value = '';
}


function addOrder() {

    const id = document.getElementById('orderId').value;
    const client = document.getElementById('orderClient').value;
    const product = document.getElementById('orderProduct').value;
    const quantity = document.getElementById('orderQuantity').value;
    const sum = document.getElementById('orderSum').value;
    const date = document.getElementById('orderDate').value;
    const status = document.getElementById('orderStatus').value;

    if (!id || !client || !product || !quantity || !sum || !date || !status) {
        alert('Заповніть усі поля!');
        return;
    }

    const table = document.getElementById('ordersTable');
    const row = table.insertRow();

    row.insertCell(0).textContent = id;
    row.insertCell(1).textContent = client;
    row.insertCell(2).textContent = product;
    row.insertCell(3).textContent = quantity;
    row.insertCell(4).textContent = sum + ' грн';
    row.insertCell(5).textContent = formatDate(date);
    row.insertCell(6).textContent = status;

    document.getElementById('orderId').value = '';
    document.getElementById('orderClient').value = '';
    document.getElementById('orderProduct').value = '';
    document.getElementById('orderQuantity').value = '';
    document.getElementById('orderSum').value = '';
    document.getElementById('orderDate').value = '';
    document.getElementById('orderStatus').value = '';
}


function formatDate(date) {

    const parts = date.split('-');

    return parts[2] + '.' + parts[1] + '.' + parts[0];
}