
function newRoadSystem(roadRegister) {

    var incoming = roadRegister.map((city, cityIndex) => {
        return roadRegister.filter((orig, roadIndex) => cityIndex !== roadIndex
            && orig[cityIndex])
            .length
    })
    console.log(incoming);
    var outgoing = roadRegister.map(city => city.filter(road => road).length);

    return incoming.filter((city, index) => outgoing[index] !== city).length === 0;
};

console.log(newRoadSystem([4, 0, 4, 3, 4, 1, 5, 1, 7, 6, 7, 2, 7, 1]));