class student {
    fullName;
    rollNumber;
    course;
    staticFee = 3000;
    staticSchoolName = "PIAIC";
    status;
    constructor(fullName, rollNumber, course, status) {
        this.fullName = fullName;
        this.rollNumber = rollNumber;
        this.course = course;
        this.status = status;
    }
    getinfo() {
        console.log(`Full Name = ${this.fullName}, RollNumber = ${this.rollNumber}, Course = ${this.course}, status = ${this.status}`);
    }
}
class studentdetail extends student {
    constructor(fullName, rollNumber, course, status) {
        super(fullName, rollNumber, course, status);
    }
    welcome() {
        console.log(`Full Name = ${this.fullName}, RollNumber = ${this.rollNumber}, Course = ${this.course}, status = ${this.status}`);
    }
}
let system = new studentdetail("shoaib bhatti", 524359, "WEB 3 & Metaverse", "Paid");
system.welcome();
let system1 = new studentdetail("irum khan", 654232, "Block Chain", "paid");
system1.welcome();
let system2 = new studentdetail("hazik butt", 6217411, "Generative AI", "unpaid");
system2.welcome();
export {};
