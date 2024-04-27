//The Car class or function constructor should also have a method called toggleAvailability that changes the isAvailable property to its opposite value (true to false, false to true)
class Car{
    constructor(make,model,year,isAvailable){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable
    }
    toggleAvailability(){
        this.isAvailable=!isAvailable
    }
}
    const car1= new Car('mazda','Demio',2020,true);
    console.log(car1.isAvailable);
    //Create an instance of the Car class or function constructor for a car in the inventory. Then, create an instance of the Rental class or function constructor for a rental involving the car you created. Finally, calculate the rental duration using the calculateRentalDuration method.
class Rental{
    constructor(car,startDate,endDate,renterName){
        this.car=car;
        this.startDate=startDate;
        this.endDate =endDate;
        this.renterName = renterName
    }
    calculateRentalDuration(){
        const start = new Date(this.startDate);
        const end = new Date(this.endDate)
        const duration = Math.abs(end-start)
        return Math.ceil (duration/(1000*60*60*24))
    }
}
const carInstance = new Car("Toyota","Camry",2020);
const startDate = new Date("2024-04-25");
const endDate = new Date ("2024-05-22")
const rentInstance =new Rental(carInstance,startDate,endDate)
const timeDuration =rentInstance.calculateRentalDuration()
console.log("Rent duration",timeDuration,"days")
// Create a Question class with the following properties:
// text(string): The text of the question.
//options(array): An array containing the multiple-choice options. ● correctAnswer(string): The correct answer to the question.
//The Question class should also have a method called checkAnswer that takes a user's answer as a parameter and returns true if the answer is correct and false otherwise.
class Questions{
    constructor(text,options,correctAnswer,checkAnswer){
    this.text = text;
    this.options= options;
    this.correctAnswer= correctAnswer;
    this.checkAnswer=checkAnswer;
    }
    checkCorrectAnswer(userAnswer){
        return userAnswer===this.checkAnswer
    }
}
const question1 = new Questions(
    "What is the staple food of Uganda"
    ["meat","bananas","rice"],
    "bananas"
)
console.log(question1.checkCorrectAnswer("bananas"))
console.log(question1.checkCorrectAnswer("rice"))
// class questions{
//     this.questions[]
//     this.
// }


