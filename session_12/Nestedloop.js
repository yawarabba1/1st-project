class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        document.write(`${this.name} Make A Sound`);
    }

}

class Dog extends Animal{
    makeSound(){
        document.write(`${this.name} Make A Sound Woof`);
    }

}
class Cat extends Animal{
    makeSound(){
        document.write(`${this.name} Make A Sound Meo`);
    }
}

const animal = new Animal("Generic Animal");
const dog = new Dog("Make A Barking");
const cat = new Cat("Make A Whiskers");

animal.makeSound();
dog.makeSound();
cat.makeSound();