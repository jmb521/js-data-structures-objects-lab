// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    // const newDriver = {...driver, [key]:value}
    const newDriver = Object.assign({}, driver, {[key]:value})
    console.log("newDriver", newDriver)
    console.log("driver", driver)
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key) {
    let newDriver = {...driver}
    delete newDriver[key]
    console.log("newDriver", newDriver)
    console.log("driver", driver)
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}