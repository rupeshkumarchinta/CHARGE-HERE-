const express = require("express");

const Router = express.Router();
const searchRoute = require("./searchStation");
const BookingRoute = require("./Book");
const AccountRoute = require("./Account");


Router.get("/",function(req,res){
    if(req.isAuthenticated() && req.session.role === "user"){
        res.render("User/dashboard");
    }
    else{
        res.redirect("/login");
    }
});

Router.get("/dashboard",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
        res.render("User/dashboard");
    }
    else{
        res.redirect("/login");
    }
});

Router.get("/schedule",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
        res.render("User/schedule");
    }
    else{
        res.redirect("/login");
    }
});

Router.get("/help",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
        res.render("User/help");
    }
    else{
        res.redirect("/login");
    }
});

Router.get("/payment",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
        res.render("User/paymentdetails");
    }
    else{
        res.redirect("/login");
    }
});

Router.use("/search",searchRoute);
Router.use("/book",BookingRoute);
Router.use("/account",AccountRoute);

module.exports = Router;