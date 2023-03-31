var Encryption = require('../../services/Encryption');
var passport = require('passport');
class Login{
    
    get(req,res){

        res.render('login',{ csrfToken:req.csrfToken() })
    }

    post(req,res,next){

        // fetching where to redirect after successfult login
        // it can be either default route or any protected route that is requested directly
        var rdr=req.body.redirect;
        if(rdr != ''){
            var enc = new Encryption();
            var success=enc.showString(rdr);
        }else{
            var success='/dashboard';
        }

        passport.authenticate('local-login',{
        successRedirect: success,
        failureRedirect: `/?redirect=${rdr}`,
        failureFlash: true
        })(req,res,next);
        
    }

    logout(req,res){

        req.logout(()=>{
            res.redirect('/');
        });
    }
}

module.exports = new Login();