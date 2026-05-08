export class EmployeePassword {
    employeePassword: string
    
    constructor(employeePassword: string){
        this.validate(employeePassword);
        this.employeePassword = employeePassword
    }

    private validate(employeePassword: string){
        if(!employeePassword) throw new Error("employeePassword is required");
    }
}