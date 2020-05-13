let month= +document.getElementById("demo").value;
function thangnam() {
    switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        document.write('có 28 ngày');
        break;
        case 1:
        case 3:
        case 5:
        case 7:
        document.write('có 31 ngày');
        break;
        case 8:
        case 9:
        case 10:
        case 11:
        document.write('có 30 ngày');
        break;
        default:
        break;
    }
}