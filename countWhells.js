const countWheels = (nb_monocycle,nb_moto,nb_voiture,nb_limousine) => {
  let monocycles = nb_monocycle
  let motos = nb_moto * 2
  let voitures = nb_voiture * 4
  let limousines = nb_limousine * 6

  return monocycles + motos + voitures + limousines
}

console.log(countWheels(10, 20, 7, 2))
console.log(countWheels(2, 3, 4, 5))