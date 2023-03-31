const LocalStrategy=require('passport-local').Strategy;
const User = require('../modules/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');

 module.exports=function(){

      passport.use('local-login',new LocalStrategy({ usernameField: 'email'},async (email, password, done) => {

        const user =await User.findOne({email:email});

            if (!user) { return done(null, false,{message:'emailerr'}); }

            bcrypt.compare(password,user.password,(err,match)=>{
                if(err) throw err;
                if(match){
                    return done(null,user);
                }else{
                    return done(null,false,{message:'passerr'});
                }
    
            });
          
    }));

    
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
       
      passport.deserializeUser(async function(id, done) {
        const user = await User.findById(id)

        if(user)
        done(null, user);
        else
        done("deserialization failed")

      });

 }