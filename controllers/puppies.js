import { Puppy } from "../models/puppy.js";

function index(req, res) {
    Puppy.find({})
    .then(puppies => {
        res.status(200).json(puppies)
    })
    .catch(err => {
        res.json(err)
    })
}

function show(req, res) {
    Puppy.findById(req.params.id)
    .then(puppy => {
        res.json(puppy)
    })
}

function create(req, res){
    Puppy.create(req.body)
    .then(puppy => {
        res.json(puppy)
    })
    .catch(err => {
        res.json(err)
    })
}

function update(req, res){
    Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(puppy => {
        res.json(puppy)
    })
    .catch(err => {
        res.json(err)
    })
}

function deletePuppy(req, res){
    Puppy.findByIdAndDelete(req.params.id)
    .then(puppy => {
        res.json(puppy)
    })
}

export {
    index,
    show,
    create,
    update,
    deletePuppy as delete
}