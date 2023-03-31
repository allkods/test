const User = require("../../modules/User");
const Address = require("../../modules/Address");
const Encryption = require("../../services/Encryption");
const bcrypt = require('bcryptjs');

class Signup{
    
    get(req,res){
        res.render('signup',{ csrfToken:req.csrfToken() })
    }

    async post(req,res){

         // destructuring variables
         const { email="", password="", cpassword="", redirect="" } = req.body;

         //preparing redirect
        var success = '/dashboard';
        if (redirect != '') {
            var enc = new Encryption();
            success=enc.showString(redirect);
        }


        //error handlers starts here
        var err = [];

        if (email === '' || password === '' || cpassword === '') // checks for empty field
            err.push('emptyerr');

        var emailRegEx = /^[\w-\.]+@[a-z]+.[a-z]+(.[a-z]+)?$/;  // checks whether email is valid
        if (email.match(emailRegEx) == null)
            err.push('emailerr');


        var passRegEx = /^[\w@]{4,20}$/;
        if (password.match(passRegEx) == null) // chcking for password format
            err.push('passerr');

        if (password != cpassword)
            err.push('passmatcherr');  // matching password with confirm password

        
        if(err.length > 0){
            req.flash("error",err);
            req.flash("message",email);
            res.redirect('/signup');
        }
        else{

            var user = await User.findOne({email:email});

            // checking whether email is already registered
            if(user){
                err.push("userexist");
                req.flash("error",err);
                req.flash("message",email);
                res.redirect('/signup');
            }
            else{

                // Generating password hash

                // Generate a salt
                const salt = await bcrypt.genSalt(10);
            
                // Hashed password
                const hash = await bcrypt.hash(password, salt);

                var user =await User.create({
                    email:email,
                    password: hash,
                    type:'0'
                });

                // hard coding the address data
                await Address.create({
                    uid:user._id,
                    country:"India",
                    state:"Maharashtra",
                    city:"pune",
                    pincode:"411041",
                    addressline:"Narhe"
                })

                req.login(user, function (err) {
                    res.redirect(success);
                });

            }


        }
    }
}

module.exports = new Signup();