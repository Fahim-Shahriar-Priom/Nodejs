var db = require('./db');

module.exports = {
	insert: function(user, callback){
		if(user.name.length>=4 && user.email.length>=8 && user.password.length>=6){
		var sql = "INSERT INTO users VALUES (null, '" + user.name + "', '" + user.email + "', '" + user.password + "', '" + user.gender + "',2)";
		db.execute(sql, function(flag) {
            callback(flag);
        })
		}
		else
		{
			callback(false);
		};
	},
	validate: function(user, callback){
		var sql = "SELECT * FROM users WHERE email='" + user.email + "' AND password='" + user.password + "'";
		db.getResult(sql, function(result){
			if(result.length > 0)
			{
				callback(result);
			}
			else
			{
				callback(false);
			}
		});
	},
	getAllUser:function(callback){
		var sql = "SELECT * FROM user_type,users WHERE user_type.id=users.user_type_id";
		db.getResult(sql,function(result){
			callback(result);
		});
	}
};