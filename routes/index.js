exports.index = function(req,res) {
       res.render('default',{
        title:'Home',
        classname: 'home',   
        users: ['Ray', 'Rob', 'Rick', 'Frank','the tank']
       });
}  

exports.about = function(req,res) {
     res.render('defaults', {
         title: 'About Us' ,
         classname: 'about'
     });
}