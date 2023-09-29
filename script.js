    /* 
  Invert Hash

  A hash table / hash map is an obj / dictionary

  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const two_obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const two_expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

// Bonus
const two_obj2 = { name: "Zaphod", charm: "high", morals: "dicey", something: "dicey" };
const two_expected2 = { Zaphod: "name", high: "charm", dicey: ["morals", "something"] };

const two_obj3 = { name: "Zaphod", charm: "high", morals: "dicey", something: "dicey", car: "dicey" };
const two_expected3 = { Zaphod: "name", high: "charm", dicey: ["morals", "something", "car"]};

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
    let newObj = new Object()
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let temp

    // console.log("*****************")
    // for (let item in obj) {
    //     console.log(item)
    // }

    for (let i = 0; i < keys.length; i++) {
        if (values[i] in newObj) {
            if (Array.isArray(newObj[values[i]])) {
                newObj[values[i]].push(keys[i])
            }
            else {
                temp = newObj[values[i]]
                newObj[values[i]] = [temp, keys[i]]
            }
        }
        else {
            newObj[values[i]] = keys[i]
        }
    }

    return newObj
} 
