const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv').config();
const cors = require('cors');
const multer = require('multer')
const authController = require('./controllers/authController');
const blogController = require('./controllers/blogController');

const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//making images accessable
app.use('/images', express.static('public/images'))

//routes
app.use('/auth', authController)
app.use('/blog', blogController)

// connect db
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB has been started successfully")
})

//Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload', upload.single("image"), async (req, res) => {
    return res.status(200).json({ msg: "Successfully uploaded" })
})


app.listen(process.env.PORT, () => console.log('Server has been started successfully'))