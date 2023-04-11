// Code your solution here
function findMatching(drivers, names) {
    return drivers.filter(drivers => drivers.toLowerCase() === names.toLowerCase())
}

function fuzzyMatch(drivers, names) {
    return drivers.filter(drivers => drivers[0] === names[0])
}

function matchName(drivers, names) {
    return drivers.filter(driver => driver.name === names)
}