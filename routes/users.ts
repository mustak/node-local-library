import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('users/index', { title: 'Users X' });
});

router.get('/cool', function (req, res, next) {
    res.send(`You're so cool`);
});

export default router;
