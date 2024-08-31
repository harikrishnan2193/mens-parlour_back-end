const users = require('../Model/userSchema')

const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    console.log('Inside register controller');

    const { username, email, password } = req.body

    try {
        const existUser = await users.findOne({ email })

        if (existUser) {
            res.status(406).json('This user accound alrady exist. Please login')
        }
        else {
            const newUser = new users({
                username,
                email,
                password
            })
            await newUser.save()

            res.status(200).json(newUser)
        }
    } catch (err) {        
        res.status(401).json('Registration failled dew to' ,err)
    }

    // res.status(200).json('registration request resolved')
}

exports.login = async (req, res) => {
    console.log('Inside login controller');

    const {email, password} = req.body

    try {
        const existingUser = await users.findOne({email,password})

    if(existingUser){
        const token = jwt.sign({userId:existingUser._id},"supersecretkey54321")

        res.status(200).json({existingUser,token})
    }
    else{
        res.status(406).json('Incorrect email or password')
    }
    } catch (err) {
        res.status(401).json(`Login failed deu to ${err}`)
    }
}