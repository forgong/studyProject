const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ethereum = require('ethereumjs-tx');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io'));
const Tx = ethereum.Transaction;

const chip = require('../utils/chip.json')
const contract = new web3.eth.Contract(chip, '0x6bFF99C3761669c2f1ce78466C21DcB7fb8DE6E0');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/getToken', function (req, res) {
    contract.methods.GetToken().call().then(console.log);
})

router.get('/BlackJack', function (req, res) {
    if (req.session.loginId == undefined) {
        res.redirect('/login');
    }
    else next()
}, function (req, res) {
    res.render('game', {
        title: 'BlackJack',
        body: `
        <div>블랙잭</div>
        `
    })
})

router.get('/OddEven', function (req, res) {
    if (req.session.loginId == undefined) {
        res.redirect('/login');
    }
    else next()
}, function (req, res) {
    res.render('game', {
        title: 'OddEven',
        body: `
        <div>홀짝 맞추기</div>
        `
    })
})

router.get('/Dice', function (req, res) {
    if (req.session.loginId == undefined) {
        res.redirect('/login');
    }
    else next()
}, function (req, res) {
    res.render('game', {
        title: 'Dice',
        body: `
        <div>주사위 게임</div>
        `
    })
})

router.get('/Rps', function (req, res) {
    if (req.session.loginId == undefined) {
        res.redirect('/login');
    }
    else next()
}, function (req, res) {
    res.render('game', {
        title: 'Rock-Paper-Scissors',
        body: `
        <div>가위바위보 게임</div>
        `
    })
})



module.exports = router;