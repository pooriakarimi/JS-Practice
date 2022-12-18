// let monthNumber = prompt ('Enter A Month Number:','');

// if (monthNumber >=1 && monthNumber <=3) {

//     console.log('Spring');
// } else if (monthNumber >= 4 && monthNumber <= 6) {

//     console.log('Summer');
// } else if (monthNumber >= 7 && monthNumber <= 9) {

//     console.log('Fall');
// } else if (monthNumber >= 10 && monthNumber <=12) {

//     console.log('Winter');
// } else if (monthNumber >12 || monthNumber == '') {
// console.log ("Undefined");
// }

// if (monthNumber == 1) {

//     console.log('Farvardin');
// } else if (monthNumber == 2) {

//     console.log('Ordibehesht');
// } else if (monthNumber == 3) {

//     console.log('Khordad');
// } else if (monthNumber == 4){

//     console.log('Tir');
// } else if (monthNumber == 5) {

//     console.log('Mordad');
// } else if (monthNumber == 6) {

//     console.log('Shahrivar');
// } else if (monthNumber == 7) {

//     console.log('Mehr');
// } else if (monthNumber == 8) {

//     console.log('Aban');
// } else if (monthNumber == 9) {

//     console.log('Azar');
// } else if (monthNumber == 10) {

//     console.log('Dey');
// }else if (monthNumber == 11) {

//     console.log('Bahman');
// }else if (monthNumber == 12) {

//         console.log('Esfand');
// }else 
// console.log("Undefined");

let monthNumber = prompt ('Enter A Month Number:','');

switch (monthNumber) {
    case '1':
        console.log('Season: Spring /', 'Month: Farvardin');
        break;

    case '2':
        console.log('Season: Spring /', 'Month: Ordibehesht');
        break;

    case '3':
        console.log('Season: Spring /', 'Month: Khordad');
        break;

    case '4':
        console.log('Season: Summer /', 'Month: Tir');
        break;

    case '5':
        console.log('Season: Summer /', 'Month: Mordad');
        break;

    case '6':
        console.log('Season: Summer /', 'Month: Shahrivar');
        break;

    case '7':
        console.log('Season: Fall /',  'Month: Mehr');
        break;

    case '8':
        console.log('Season: Fall /',  'Month: Aban');
        break;

    case '9':
        console.log('Season: Fall /',  'Month: Azar');
        break;    

    case '10':
        console.log('Season: Winter /', 'Month: Dey');
        break;

    case '11':
        console.log('Season: Winter /', 'Month: Bahman');
        break;

    case '12':
        console.log('Season: Winter /', 'Month: Esfand');
        break;
    
    default:
        console.log("Undefined");
        break;

}
