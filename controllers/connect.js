import { Account } from "../models/connect.js";

function index(req, res) {
    Account.find({})
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(err => {
        res.json(err)
    })
}

function show(req, res) {
    Account.findById(req.params.id)
    .then(account => {
        res.json(account)
    })
}

function create(req, res){
    Account.create(req.body)
    .then(account => {
        res.json(account)
    })
    .catch(err => {
        res.json(err)
    })
}

function update(req, res){
    Account.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(account => {
        res.json(account)
    })
    .catch(err => {
        res.json(err)
    })
}

function deleteAccount(req, res){
    Account.findByIdAndDelete(req.params.id)
    .then(account => {
        res.json(account)
    })
}

export {
    index,
    show,
    create,
    update,
    deleteAccount as delete
}