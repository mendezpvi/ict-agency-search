const regions = {
  "Asia": ["Tokyo", "Beijing", "Mumbai", "Seoul", "Singapore"],
  "Africa": ["Cairo", "Lagos", "Johannesburg", "Casablanca", "Nairobi"],
  "North America": ["New York", "Los Angeles", "Toronto", "Mexico City", "Chicago"],
  "South America": ["São Paulo", "Buenos Aires", "Lima", "Bogotá", "Santiago"],
  "Europe": ["London", "Paris", "Berlin", "Madrid", "Rome"],
  "Oceania": ["Sydney", "Melbourne", "Auckland", "Brisbane", "Perth"],
}

const regionsEl = document.getElementById("regions-el")
const citiesEl = document.getElementById("cities-el")
const formEl = document.getElementById("form-el")

document.addEventListener("DOMContentLoaded", () => {
  for (const region in regions) {
    const OPTION = document.createElement("OPTION")
    OPTION.value = region
    OPTION.textContent = region
    regionsEl.append(OPTION)
  }

  regionsEl.addEventListener("change", (e) => {
    const selectedRegion = e.target.value

    citiesEl.disabled = false

    citiesEl.innerHTML = `<option value="">- Choose a City -</option>`
    for (const city of regions[selectedRegion]) {
      const OPTION = document.createElement("OPTION")
      OPTION.value = city
      OPTION.textContent = city
      citiesEl.append(OPTION)
    }
  })
})

formEl.addEventListener("submit", (e) => {
  e.preventDefault()
  formEl.reset()
  citiesEl.disabled = true
})