const express = require("express");
const Stations = require("../../../../Schema/StationSchema");
const Router = express.Router();

Router.get("/",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
        const sts = []
        Stations.find({},function(err,stations){
            if(!err){
                stations.forEach(station => {
                    station.AvailableTypes.map(function(type){
                        if(type.level === "Level 2" && type.slots !== 0){
                            let temp = {name: station.station_Name,
                                        address : station.Address,
                                        slots: type.slots,
                                        time: type.timeslots
                                        }
                            sts.push(temp);
                        }
                    });  
                });
                res.render("User/level-2-stations",{stations: sts});
            }
        });

    }
    else{
        res.redirect("/login");
    }
});


module.exports = Router;