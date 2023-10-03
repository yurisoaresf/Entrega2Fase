const express = require("express");
const router = express.Router();
const Filme = require ("../models/filme");

router.get("/", async (req,res) => {
    res.json(await Filme.find());
});

router.get("/:id", async (req,res) => {
    res.json(await Filme.findById(req.params.id));
});

router.post("/", async (req,res) => {
    res.json(await new Filme(req.body).save());
});

router.put("/:id", async (req,res) => {
    res.json(await Filme.findByIdAndUpdate(req.params.id, req.body));
});

router.delete("/:id", async (req,res) => {
    res.json(await Filme.findByIdAndRemove(req.params.id, req.body));
});

module.exports = router;