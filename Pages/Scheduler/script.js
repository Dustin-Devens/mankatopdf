var currDate = new Date(2020, 11, 19);
for (let i = 1; i < 379; i++) {
    var dd = currDate.getDate();
    var mm = currDate.getMonth() + 1;
    var yyyy = currDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    var vDate = mm + '/' + dd + '/' + yyyy;
    let fillDate = document.getElementById('date' + i);
    fillDate.textContent = vDate;
    currDate.setDate(currDate.getDate() + 1);
}