import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component loaded!");

let loggerDefault = new MongoLogger()

let userService = new UserService(loggerDefault)

let user1 = new User(1,"Ali", "Korkmaz", "Ankara")

let user2 = new User(2,"Ahmet", "Can", "İzmir")

userService.add(user1)
userService.add(user2)
console.log(userService.list())
console.log(userService.getById(2))




// değişkene prototyping
let customer = {id:1, firstName: "alex"}

customer.lastName = "souza"
// console.log(customer.lastName)
