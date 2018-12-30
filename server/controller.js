const bcrypt = require ('bcryptjs')

module.exports = {
    createUser: async (req, res) => {
        try {
            const db = req.app.get('db')
            let {username, password} = req.body

            let userResponse = await db.getUserByUsername(username)
            if(userResponse[0]){
                return res.status(409).send('username already taken')
            }
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            console.log(hash)

            let createdUserResponse = await db.createUser([username, hash])
            let createdUser = createdUserResponse[0]

            delete createdUser.password

            req.session.user = createdUser
            res.send(createdUser)

        } catch (error) {
            console.log('error creating user', error)
            res.status(500).send(error)
        }
    }, 

    login: async (req, res) => {
        try {
            const db = req.app.get('db')
            let{username, password} = req.body
            
            let userResponse = await db.getUserByUsername(username)
            let user = userResponse[0]
            if (!user){
                res.status(401).send('username not found')
            }
            const isAuthenticated = bcrypt.compareSync(password, user.password)
                if(!isAuthenticated){
                    return res.status(403).send('incorrect password')
                 }
                 delete user.password;
                 req.session.user = user
                 res.send(req.session.user)
            

        } catch (error) {
            console.log('error creating user', error)
            res.status(500).send(error)
        }
    },

    read: (req, res) => {
        try {
            
        } catch (error) {
            
        }
    }, 

    update: (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },

    delete: (req, res) => {
        try {
            
        } catch (error) {
            
        }
    }
}