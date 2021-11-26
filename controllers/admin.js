
module.exports.home = function(req,res) {
console.log("-------home")
res.render("./admin/index")

}
module.exports.setup_admin = function(req,res) {
    console.log("-------setup_admin")
    res.render("./admin/setup_admin")
    
    }


 module.exports.setup_customer = function(req,res) {
     console.log("-------setup_customer")
    res.render("./admin/setup_customer")
        
     }