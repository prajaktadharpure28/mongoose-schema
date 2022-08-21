const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb+srv://prajudharpure:prajakta@cluster0.vzgzz.mongodb.net/whatsapp?retryWrites=true&w=majority")

run()
async function run() {
    const user = await User.create({
        name: "praju", 
        age: 22,
        hobbies: ["calligraphy", "basket ball"],
        address: {
            street: "Main street",
        },
    })
    // user.name = "prajuu"
    // await user.save()
// const user = new User({ name: "Praju", age: 26 })
// await user.save()
console.log(user)
}