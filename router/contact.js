const express = require("express");
const router = express.Router();
const Contact = require("../models/contactSchema");
const isAuth = require("../middleware/auth");
router.post("/add", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message) {
            return res.status(400).send("infos are required");
        }
        const contact = new Contact({
            name,
            email,
            subject,
            message,
        });
        await contact.save();
        res.status(200).send({ msg: "contact form added", contact });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
router.get("/getContact", isAuth, async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).send({ msg: "contacts", contacts });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
router.delete("/:id", isAuth, async (req, res) => {
    try {
        await Contact.deleteOne({ _id: req.params.id });
        res.status(200).send({ msg: "delete it succ" });
    } catch (error) {
        res.status(400).send({ msg: "ca not delete it" });
    }
});
router.get("/:id", isAuth, async (req, res) => {
    try {
        const result = await Contact.findOne({ _id: req.params.id });
        res.send({ response: result, message: "geting contact successfully" });
    } catch (error) {
        res.status(400).send({ message: "there is no contact with this id" });
    }
});
module.exports = router;
