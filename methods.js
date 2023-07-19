const student ={
    name:'Kodom Ali',
    money: 5000,
    study:'Math',
    subject :['calculus','algebra','geometry'],
    exam: function(){
        console.log(this.name, 'is participating in an exam');
    },
    student : true
}

// console.log(student);
student.exam();