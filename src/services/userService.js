import { users } from "../data/users.js"

export default class UserService {

    constructor(loggerService){
        this.employee = [],
        this.customer = [],
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            console.log(user)
        }
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
        console.log("Kullanıcı Eklendi! ")
    }

    list(){
        return this.users
        //console.log("Kullanıcılar Listelendi!")
    }

    getById(id){
        return this.users.find(u => u.id == id)
        //console.log(id + " Id kullanıcı eklendi!")
    }
}