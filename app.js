const fromDollarToYen = (dollar) => {
    return dollar*146.26;
}
const fromEuroToDollar = (euro) => {
    return euro*1.07;
}
const fromYenToPound = (yen) => {
    return yen*0.0056;
}


module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};