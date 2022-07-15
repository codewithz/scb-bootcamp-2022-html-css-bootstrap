let car1 = {
    name: 'Honda City',
    color: 'Black',
    price: 1000000
}

let car2 = {
    name: 'Hyundai i20',
    color: 'White',
    price: 900000
}

let car3 = {
    name: 'Toyota Corolla',
    color: 'Silver',
    price: 1200000
}

// --------------------------------------------------------------

class Car {

    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;

    }

    display() {
        console.log(`Car name is ${this.name}`)
        console.log(`Car color is ${this.color}`)
        console.log(`Car price is ${this.price}`)
    }

    setColor(color) {
        this.color = color;

    }

    getColor() {
        return this.color;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

}

let c1 = new Car("Honda City", "Black", 100000);
c1.display()

let c2 = new Car("Hyundai i20", "White", 900000)
c2.display()
c2.setColor("Red")
c2.display();