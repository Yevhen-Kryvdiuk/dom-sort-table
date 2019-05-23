const table = document.querySelector('table');
const tableHead = document.querySelector('thead');


tableHead.addEventListener('click', function (event) {
    const sortParam = event.target.dataset.sortParam;
    const nodeName = event.target.nodeName;
    const tableBody = table.tBodies[0];

    if (nodeName === 'TH') {
        const sortedData = sortTableData(tableBody, sortParam);
        const newTableBody = changeTableData(sortedData);
        table.replaceChild(newTableBody, tableBody);
    }
});

function getTableData(tableBody) {
    const tableRows = [...tableBody.rows];

    const data = [];
    tableRows.forEach((tableRow) => {
        const Row = [...tableRow.cells];

        const objk = {};
        Row.forEach((item) => {
            objk[item.dataset.sortParam] = item.innerHTML;
        });
        data.push(objk);
    });

    return data;
}


function sortTableData(tableBody, sortParam) {
    const data = getTableData(tableBody);

    if (sortParam === 'age') {
        data.sort((a, b) => {
            return Number(a[sortParam]) - Number(b[sortParam]);
        });
    }
    if (sortParam === 'name') {
        data.sort((a, b) => {
            if (a[sortParam] > b[sortParam]) {
                return 1;
            }
            if (a[sortParam] < b[sortParam]) {
                return -1;
            }
            return 0;
        });
    }
    return data;
}

function changeTableData(data) {
    const newTableBody = document.createElement('tbody');
    data.forEach((item) => {
        const tr = document.createElement('tr');
        for (let key in item) {
            const td = document.createElement('td');
            td.dataset.sortParam = key;
            td.innerText = item[key];
            tr.appendChild(td);
        }
        newTableBody.appendChild(tr);
    });

    return newTableBody;
}
