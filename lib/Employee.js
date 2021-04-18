class Employee {
     constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
     }
     
     getName(){
         return this.name
     }

     getId() {
         return this.id;
     }

     getemail (){
         return this.email
        
     }
     
     getRole(){
         return "Employee";
     }
}

module.exports = Employee;

//these classes build the objects depending on the choice of which type of employee