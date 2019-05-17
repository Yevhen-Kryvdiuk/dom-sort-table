const table = document.querySelector('table');
const tableHead = table.rows[0];

tableHead.onclick = function (event) {
    const target = event.target;
    if (target.nodeName === 'TH' ) {
        const sortParam = target.cellIndex;
        const data = sortTableData(table,sortParam);
        changeTableData(table, data);
    }
};

function getTableData(table) {
    const tableRows = table.rows;
    const data = [];
    for (let i = 1; i < tableRows.length; i++) {
        data[i-1] = [tableRows[i].cells[0].innerHTML, tableRows[i].cells[1].innerHTML];
    }
    return data
}


function sortTableData(table,sortParam) {
    const data = getTableData(table);
    if (sortParam === 0) {
        data.sort((a, b) => {
            return a[sortParam] - b[sortParam];
        });
    } else {
        data.sort((a, b) => {
            if (a[sortParam] > b[sortParam]) {
                return 1; }
            if (a[sortParam] < b[sortParam]) {
                return -1; }
            return 0;
        });
    }
    return data;
}
function changeTableData(table, data) {
    let tableRows = table.rows;
    for (let i = 0; i < data.length; i++) {
        const j = i + 1;
        const tableRow = tableRows[j];
        const dataRow = data[i];
        [tableRow.cells[0].innerHTML, tableRow.cells[1].innerHTML] = [dataRow[0], dataRow[1]];
    }
}
