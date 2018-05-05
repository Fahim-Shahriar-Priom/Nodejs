var db = require('./db');

module.exports = {
	insert: function(order, callback){
		var sql = "INSERT INTO orders VALUES (null, '" + order.customer_id + "', '" + order.customer_address + "', '" + order.order_date + "', '" + order.shipping_date + "', '" + order.order_amount + "', '" + order.delivery_status + "')";
		db.execute(sql, function(flag){
			callback(flag);
		});
	},
	getAllPendingOrder: function(callback){
		var sql = "SELECT * FROM orders WHERE delivery_status='pending'";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAllDeliveredOrder: function(callback){
		var sql = "SELECT * FROM orders WHERE delivery_status='delivered'";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAllPendingOrderByCustomerId: function(id,callback){
		var sql = "SELECT * FROM orders WHERE delivery_status='pending' and customer_id='"+id+"'";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAllDeliveredOrderByCustomerId: function(id,callback){
		var sql = "SELECT * FROM orders WHERE delivery_status='delivered' and customer_id='"+id+"'";
		db.getResult(sql, function(result){
			callback(result);
		});
	},

	deliverOrderById: function(id, callback){
		var sql = "UPDATE orders SET delivery_status='delivered' WHERE id='"+id+"'";
		db.execute(sql, function(flag){
			callback(flag);
		});
	},
	getLastOrderIdByCutomerId: function(cutomerId, callback){
		var sql ="SELECT MAX(id) as id FROM orders where customer_id='"+cutomerId+"'";
		db.getResult(sql, function(result){
			callback(result);
		});
	}


};