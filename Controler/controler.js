const Feed = require("../Models/feed-model")

const homepage = (req, res) => {
    if(req.method ==="GET") {
        Feed.find().sort({createdAt: -1})
        .then(result => res.render('index', {result, err:null} ))
        .catch(err => console.log(err))
    }
    if(req.method ==="POST") {
        const blog =new Feed(req.body)
        blog.save()
            .then(response => res.redirect('/feed'))
            .catch (err => {
                Feed.find().sort({createdAt: -1})
                .then(result => res.render('index', {result, err} ))
                .catch(err => console.log(err))
                
            })
    }
}   



const onePost = (req, res) => {
    Feed.findById({_id:req.params.id})
    .then(result => res.render('one-feed', {result}))
    .catch(err => console.log(err))
}

const deletePost =(req, res) =>{
    Feed.findByIdAndDelete({_id:req.params.id})
    .then(result => res.redirect('/feed'))
    .catch(err => console.log(err))
}

const editPost = (req, res) => {
    Feed.findById({_id:req.params.id})
    .then(result => res.render('post-edit', {result}))
    .catch(err => console.log(err))
}

const cancelEdit = (req, res) => {
    Feed.findById({_id:req.params.id})
.then(result => res.redirect(`/feed/${req.params.id}`))
.catch(err => console.log(err))
}

const saveChange =(req, res) => {
    Feed.findByIdAndUpdate({_id:req.params.id})
    .then(result => { 
        result.name = req.body.name
        result.message = req.body.message
        result.save()
            .then(result => res.redirect('/feed'))
            .catch(err => console.log(err)) 
    })
    .catch(err => console.log(err))
}


module.exports = {
    homepage,
    onePost,
    deletePost, 
    editPost,
    cancelEdit,
    saveChange
}