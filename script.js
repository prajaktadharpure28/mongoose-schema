const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb+srv://prajudharpure:prajakta@cluster0.vzgzz.mongodb.net/whatsapp?retryWrites=true&w=majority")

run()
async function run() {
    try{
    const user = await User.create({
        name: "praju", 
        age: 22,
        email: "praju@gmail.com",
        hobbies: ["calligraphy", "basket ball"],
        address: {
            street: "Main street",
        },
    })
    user.createdAt = 5
    await user.save()
    console.log(user)
} catch (e) {
    // console.log(e.message)
    console.log(e.message)
}
}
    // user.name = "prajuu"
    // await user.save()
// const user = new User({ name: "Praju", age: 26 })
// await user.save()
// console.log(user)
// }