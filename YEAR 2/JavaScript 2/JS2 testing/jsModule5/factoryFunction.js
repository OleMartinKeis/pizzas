function createAnimal(name, type, food) {
    return {
        name: name,
        type: type,
        food: food
    ,
    eat: function () {
        console.log(`${name} is a ${type} and eats ${food}`)
    }
    }
}

const animal = createAnimal('Jasper', 'cat', 'catfood')

animal.eat();

console.log(createAnimal)