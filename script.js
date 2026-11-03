let editingProductRow = null;
let editingClientRow = null;
let editingOrderRow = null;

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');

    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
}


function saveProduct() {
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

    if (editingProductRow) {
        editingProductRow.cells[0].textContent = id;
        editingProductRow.cells[1].textContent = name;
        editingProductRow.cells[2].textContent = category;
        editingProductRow.cells[3].textContent = price + ' грн';
        editingProductRow.cells[4].textContent = brand;
        editingProductRow.cells[5].textContent = quantity;
        editingProductRow.cells[6].textContent = rating;

        editingProductRow = null;
        document.getElementById('productButton').textContent = 'Додати товар';
    } else {
        const table = document.getElementById('productsTable');
        const row = table.insertRow();

        row.insertCell(0).textContent = id;
        row.insertCell(1).textContent = name;
        row.insertCell(2).textContent = category;
        row.insertCell(3).textContent = price + ' грн';
        row.insertCell(4).textContent = brand;
        row.insertCell(5).textContent = quantity;
        row.insertCell(6).textContent = rating;

        const actions = row.insertCell(7);
        actions.innerHTML =
            '<button class="edit-button" onclick="editProduct(this)">Редагувати</button>' +
            '<button class="delete-button" onclick="deleteProduct(this)">❌</button>';
    }

    clearProductForm();
}


function editProduct(button) {
    const row = button.closest('tr');

    editingProductRow = row;

    document.getElementById('productId').value = row.cells[0].textContent;
    document.getElementById('productName').value = row.cells[1].textContent;
    document.getElementById('productCategory').value = row.cells[2].textContent;
    document.getElementById('productPrice').value =
        row.cells[3].textContent.replace(' грн', '');
    document.getElementById('productBrand').value = row.cells[4].textContent;
    document.getElementById('productQuantity').value = row.cells[5].textContent;
    document.getElementById('productRating').value = row.cells[6].textContent;

    document.getElementById('productButton').textContent = 'Зберегти зміни';
}


function deleteProduct(button) {
    const row = button.closest('tr');
    const productName = row.cells[1].textContent;

    const orders = document.querySelectorAll('#ordersTable tr');

    for (const order of orders) {
        if (order.cells[2].textContent === productName) {
            alert('Неможливо видалити товар. Він використовується в таблиці «Замовлення».');
            return;
        }
    }

    row.remove();
}


function clearProductForm() {
    document.getElementById('productId').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productBrand').value = '';
    document.getElementById('productQuantity').value = '';
    document.getElementById('productRating').value = '';
}


function saveClient() {
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

    if (editingClientRow) {
        editingClientRow.cells[0].textContent = id;
        editingClientRow.cells[1].textContent = name;
        editingClientRow.cells[2].textContent = phone;
        editingClientRow.cells[3].textContent = email;
        editingClientRow.cells[4].textContent = city;
        editingClientRow.cells[5].textContent = formatDate(date);

        editingClientRow = null;
        document.getElementById('clientButton').textContent = 'Додати клієнта';
    } else {
        const table = document.getElementById('clientsTable');
        const row = table.insertRow();

        row.insertCell(0).textContent = id;
        row.insertCell(1).textContent = name;
        row.insertCell(2).textContent = phone;
        row.insertCell(3).textContent = email;
        row.insertCell(4).textContent = city;
        row.insertCell(5).textContent = formatDate(date);

        const actions = row.insertCell(6);
        actions.innerHTML =
            '<button class="edit-button" onclick="editClient(this)">Редагувати</button>' +
            '<button class="delete-button" onclick="deleteClient(this)">❌</button>';
    }

    clearClientForm();
}


function editClient(button) {
    const row = button.closest('tr');

    editingClientRow = row;

    document.getElementById('clientId').value = row.cells[0].textContent;
    document.getElementById('clientName').value = row.cells[1].textContent;
    document.getElementById('clientPhone').value = row.cells[2].textContent;
    document.getElementById('clientEmail').value = row.cells[3].textContent;
    document.getElementById('clientCity').value = row.cells[4].textContent;
    document.getElementById('clientDate').value =
        dateForInput(row.cells[5].textContent);

    document.getElementById('clientButton').textContent = 'Зберегти зміни';
}


function deleteClient(button) {
    const row = button.closest('tr');
    const clientName = row.cells[1].textContent;

    const orders = document.querySelectorAll('#ordersTable tr');

    for (const order of orders) {
        if (order.cells[1].textContent === clientName) {
            alert('Неможливо видалити клієнта. Його дані використовуються в таблиці «Замовлення».');
            return;
        }
    }

    row.remove();
}


function clearClientForm() {
    document.getElementById('clientId').value = '';
    document.getElementById('clientName').value = '';
    document.getElementById('clientPhone').value = '';
    document.getElementById('clientEmail').value = '';
    document.getElementById('clientCity').value = '';
    document.getElementById('clientDate').value = '';
}


function saveOrder() {
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

    if (editingOrderRow) {
        editingOrderRow.cells[0].textContent = id;
        editingOrderRow.cells[1].textContent = client;
        editingOrderRow.cells[2].textContent = product;
        editingOrderRow.cells[3].textContent = quantity;
        editingOrderRow.cells[4].textContent = sum + ' грн';
        editingOrderRow.cells[5].textContent = formatDate(date);
        editingOrderRow.cells[6].textContent = status;

        editingOrderRow = null;
        document.getElementById('orderButton').textContent = 'Додати замовлення';
    } else {
        const table = document.getElementById('ordersTable');
        const row = table.insertRow();

        row.insertCell(0).textContent = id;
        row.insertCell(1).textContent = client;
        row.insertCell(2).textContent = product;
        row.insertCell(3).textContent = quantity;
        row.insertCell(4).textContent = sum + ' грн';
        row.insertCell(5).textContent = formatDate(date);
        row.insertCell(6).textContent = status;

        const actions = row.insertCell(7);
        actions.innerHTML =
            '<button class="edit-button" onclick="editOrder(this)">Редагувати</button>' +
            '<button class="delete-button" onclick="deleteOrder(this)">❌</button>';
    }

    clearOrderForm();
}


function editOrder(button) {
    const row = button.closest('tr');

    editingOrderRow = row;

    document.getElementById('orderId').value = row.cells[0].textContent;
    document.getElementById('orderClient').value = row.cells[1].textContent;
    document.getElementById('orderProduct').value = row.cells[2].textContent;
    document.getElementById('orderQuantity').value = row.cells[3].textContent;
    document.getElementById('orderSum').value =
        row.cells[4].textContent.replace(' грн', '');
    document.getElementById('orderDate').value =
        dateForInput(row.cells[5].textContent);
    document.getElementById('orderStatus').value = row.cells[6].textContent;

    document.getElementById('orderButton').textContent = 'Зберегти зміни';
}


function deleteOrder(button) {
    const row = button.closest('tr');
    row.remove();
}


function clearOrderForm() {
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


function dateForInput(date) {
    const parts = date.split('.');
    return parts[2] + '-' + parts[1] + '-' + parts[0];
}