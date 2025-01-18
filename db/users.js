const {v4:uuid}=require('uuid')

const userData={
    "users":[
        {
            id:uuid(),
            username:"kiran",
            password:"ki@123",
            emailId:"kiran@gmail.com"
        },
        {
            id:uuid(),
            username:"kumar",
            password:"kum@123",
            emailId:"kum@gmail.com"
        },
    ]
}

module.exports=userData