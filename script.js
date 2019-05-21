const table = document.querySelector('table');
const tableHead = table.rows[0];

tableHead.addEventListener('click', function (event) {
    const {cellIndex: sortParam, nodeName} = event.target;
    if (nodeName === 'TH') {
        const data = sortTableData(table, sortParam);
        changeTableData(table, data);
    }
});

function getTableData(table) {
    const tableRows = [...table.rows];
    const data = [];
    for (let i = 1; i < tableRows.length; i++) {
        const tableRow = tableRows[i];
        data[i-1] = [tableRow.cells[0].innerHTML, tableRow.cells[1].innerHTML];
    }
    return data;
}


function sortTableData(table, sortParam) {
    const data = getTableData(table);
    if (sortParam === 0) {
        data.sort((a, b) => {
            return Number(a[sortParam]) - Number(b[sortParam]);
        });
    } else {
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
function changeTableData(table, data) {
    const tableRows = [...table.rows];
    for (let i = 0; i < data.length; i++) {
        const j = i + 1;
        const tableRow = tableRows[j];
        const dataRow = data[i];
        tableRow.cells[0].innerText = dataRow[0];
        tableRow.cells[1].innerText = dataRow[1];
    }
}
