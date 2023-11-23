const express = require("express")
const router = express.Router()
const users = require("../models/UserShema")



router.post("/register", async (req, res) => {
    const { Username, password, email, Score } = req.body
    try {
        if (!Username || !password || !email) {
            res.status(403).send("plz fill the form")
        } else {
            const preuser = await users.findOne({ email: email })
            console.log(preuser)
            if (preuser) {
                res.status(404).send("already exist")
            }
            else {
                const AddNewUser = new users({
                    Username, password, email, Score
                })
                await AddNewUser.save()
                console.log(AddNewUser._id)
                
                res.status(201).json(AddNewUser._id)
            }
        }
    } catch (error) {
        res.status(404).json(error)
    }
})

router.get("/getrequist", async (req, res) => {
    try {
        const user = await users.find().sort({ "Score": -1 });
        res.status(201).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.get("/delete", async (req, res) => {
    try {
        const user = await users.deleteMany();
        res.status(201).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.get("/getUser/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params
        const userindividual = await users.find({  _id: id  })
        console.log(userindividual)
        res.status(201).json(userindividual)
    } catch (error) {
        console.log("djflsfj")
        res.status(404).json(error)
    }
})

router.get("/getUserEmail/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params
        const userindividual = await users.find({ email: id })
        console.log(userindividual)
        res.status(201).json(userindividual[0])
    } catch (error) {
        console.log("djflsfj")
        res.status(404).json(error)
    }
})
router.patch("/Update/:id", async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const userindividual = await users.findOneAndUpdate({ _id: id }, { $set: { Score: req.body.Score } })
        if (userindividual==null) {
            console.log(userindividual)
        }
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
    }
})


module.exports = router;