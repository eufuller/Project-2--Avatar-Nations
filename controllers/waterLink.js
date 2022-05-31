//require dependencies
const express = require("express")
const waterDataBlueprint = require("../models/water.js")

const router = express.Router()

//Routes
// router.get("/water", (req, res) => {
//     waterDataBlueprint.deleteMany({}, (error, allwaters) => {})
//     //waterDataBlueprint.create(AvatarSeed, (error, data) => {
//         res.redirect("/water")
//     })
// })

//water Index page of characters
router.get("/", (req, res) => {
    ///waterDataBlueprint.find({}, (error, allwaters) => {
    res.render("water/index.ejs")//, {water: allwaters,})
    //})
})

//Route to add New character
router.get("/new", (req, res) => {
    res.send("create new route is working") //res.render("water/new.ejs")
})

//Destroy/Delete
router.delete("/:id", (req, res) => {
    waterDataBlueprint.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/water")
    })
})

//Update functionality for Edit page
router.put("/:id", (req, res) => {
    waterDataBlueprint.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedwater) => {
            res.redirect(`/water/${req.params.id}`)
        }
    )
})

//Create functionality for New page
router.post('/', (req, res) => {
    waterDataBlueprint.create(req.body, (error, createdwaterling) => {
        res.redirect("/water")
    })
})

//Route to Edit Page
router.get("/:id/edit", (req, res) => {
    waterDataBlueprint.findById(req.params.id, (error, foundwaterling) => {
        res.send("route to edit page is working") //res.render("edit.ejs", {water: foundwaterling})
    })
})

//Route to Indv. Show Pages
router.get("/:id", (req, res) => {
    waterDataBlueprint.findById(req.params.id, (err, foundwaterling) => {
        res.send("route to show pg. is working") //res.render("show.ejs", {water: foundwaterling})
    })
})

//Export Router Object
module.exports = router