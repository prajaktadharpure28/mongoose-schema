const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

run()
async function run() {
    const user = await User.create({ name: "praju", age: 22})
    user.name = "prajuu"
    await user.save()
// const user = new User({ name: "Praju", age: 26 })
// await user.save()
console.log(user)
}