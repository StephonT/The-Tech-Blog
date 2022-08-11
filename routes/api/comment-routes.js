const router = require('express').Router();
const { Comment } = require('../../models');


// GET all comments
router.get('/', (req, res) => {
    Comment.findAll({})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err); 
            res.status(500).json(err); 
        })
});

router.post('/', (req, res) => {
    // check session
    Comment.create({
        comment_text: req.body.comment_text, 
        post_id: req.body.post_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    
});

module.exports = router;