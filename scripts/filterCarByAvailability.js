function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  /*
1. Looping dulu cars
2. cek property availability kalau true result.push()
*/
  for (let i in cars) {
    if (cars[i].available) {
      result.push(cars[i]);
    }
  }

  // for (let i = 0; i < cars.length; i++) {
  //   if (cars[i].available) {
  //     result.push(cars[i])
  //   }
  // };

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
