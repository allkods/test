const User = require("../../modules/User");
const Address = require("../../modules/Address");

class Dashboard{
    
    get(req,res){

        // Example for promise.all
            const promise1 = new Promise((resolve, reject) => {
                (async()=>{
                    const user = await User.findOne({_id:req.user.id});
                    if(!user)
                    reject(new Error("user not found"));
                    else
                    resolve(user)
    
                })();
              });

            const promise2 = new Promise((resolve, reject) => {
                (async()=>{
    
                    const address = await Address.findOne({uid:req.user._id});
                    if(address)
                    resolve(address)
                    else
                    reject(new Error("address not found"));
                })();
    
              });

              Promise.all([promise1,promise2])
              .then(result=>{

                // Aggregate lookup property example
                (async()=>{
                    const adr = await Address.aggregate([
                        {$lookup:{
                            from: 'users',
                            localField: 'uid',
                            foreignField:"_id",
                            as:"userDetails"
                        }},{$match:{uid:req.user._id}}
                    ]
                    )

                    res.render('dashboard',{
                            csrfToken: req.csrfToken(),
                            promiseResult: result,
                            aggregateLookupResult: adr
                         });

                })();
                

              })
              .catch(err=>{
                console.log(err);
                res.status(500).send("promise rejected");
              })
    }

    post(req,res){

    }
}

module.exports = new Dashboard();