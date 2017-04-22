"use strict";var path=require("path"),mongoose=require("mongoose"),url=require("url"),querystring=require("querystring"),adminModel=mongoose.model("adminModel"),orderModel=mongoose.model("orderModel");exports.indexGet=function(e,n){adminModel.find({},function(o,r){return o?(console.log(o),void red.end(o)):void adminModel.find({createTime:{$gt:"1470895800050"}},function(o,i){return o?(console.log(o),void red.end(o)):void n.render(path.join(__dirname,"../views/index.html"),{data:r,sName:e.session.name,newData:i},function(e,o){return e?(console.log(e),void n.end(e)):void n.end(o)})})})},exports.allGoods=function(e,n){adminModel.find({},function(o,r){return o?(console.log(o),void n.end(o)):void n.render(path.join(__dirname,"../views/allGoods.html"),{data:r,sName:e.session.name},function(e,o){return e?(console.log(e),void n.end(e)):void n.end(o)})})},exports.shopCar=function(e,n){n.render(path.join(__dirname,"../views/shopCar.html"),{},function(e,o){n.end(o)})},exports.user=function(e,n){e.session.name?n.render(path.join(__dirname,"../views/user.html"),{sName:e.session.name},function(e,o){return e?(console.log(e),void n.end(e)):void n.end(o)}):n.render(path.join(__dirname,"../views/user.html"),{sName:"1"},function(e,o){return e?(console.log(e),void n.end(e)):void n.end(o)})},exports.detail=function(e,n){var o=e.params.id;adminModel.find({_id:o},function(e,o){return e?(console.log(e),void n.end(e)):void n.render(path.join(__dirname,"../views/detail.html"),{data:o[0]},function(e,o){return e?(console.log(e),void n.end(e)):void n.end(o)})})},exports.buy=function(e,n){if(n.setHeader("Content-Type","text/html;charset=utf8"),e.session.name){var o=e.params.id;adminModel.find({_id:o},function(o,r){return o?(console.log(o),void n.end(o)):void orderModel.create({name:r[0].name,price:r[0].price,keyword:r[0].keyword,content:r[0].content,filepath:r[0].filepath,parent:e.session.name,isPlay:"0",isRecevied:"0",createTime:new Date},function(e){if(e)return console.log(e),void n.end(e);var o=JSON.stringify({status:1,message:"到订单中心付款"});n.end(o)})})}else{var r=JSON.stringify({status:0,message:"请先登录"});n.end(r)}},exports.buyPost=function(e,n){for(var o=e.body.data,r=0;r<o.length;r++)orderModel.create({name:o[r].name,price:o[r].price,content:o[r].content,filepath:o[r].filepath,parent:e.session.name,isPlay:"0",isRecevied:"0",createTime:new Date},function(e){if(e)return console.log(e),void n.end(e);var o=JSON.stringify({status:1,message:"到订单中心付款"});n.end(o)})},exports.orderlist=function(e,n){var o=e.session.name;orderModel.find({parent:o},function(e,o){n.render(path.join(__dirname,"../views/orderlist.html"),{data:o},function(e,o){return e?(console.log(e),void n.end(e)):void n.end(o)})})},exports.orderlistPayment=function(e,n){var o=e.session.name;orderModel.find({parent:o,isPlay:"0"},function(e,o){n.render(path.join(__dirname,"../views/orderlist.html"),{data:o},function(e,o){return e?(console.log(e),void n.end(e)):void n.end(o)})})},exports.orderlistConfirmRec=function(e,n){var o=e.session.name;orderModel.find({parent:o,isPlay:"1",isRecevied:"0"},function(e,o){n.render(path.join(__dirname,"../views/orderlist.html"),{data:o},function(e,o){return e?(console.log(e),void n.end(e)):void n.end(o)})})},exports.delOrder=function(e,n){n.setHeader("Content-Type","text/html;charset=utf8");var o=querystring.parse(url.parse(e.url).query).id;orderModel.remove({_id:o},function(e){if(e)return console.log(e),void n.end(e);var o=JSON.stringify({status:"1",message:"订单删除成功"});n.end(o)})},exports.payment=function(e,n){n.setHeader("Content-Type","text/html;charset=utf8");var o=querystring.parse(url.parse(e.url).query).id;console.log(o),orderModel.update({_id:o},{isPlay:"1"},function(e){if(e)return console.log(e),void n.end(e);var o=JSON.stringify({status:"1",message:"订单支付成功"});n.end(o)})},exports.confirmRec=function(e,n){n.setHeader("Content-Type","text/html;charset=utf8");var o=querystring.parse(url.parse(e.url).query).id;console.log(o),orderModel.update({_id:o},{isRecevied:"1"},function(e){if(e)return console.log(e),void n.end(e);var o=JSON.stringify({status:"1",message:"确认收货成功"});n.end(o)})};