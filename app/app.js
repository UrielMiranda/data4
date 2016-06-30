/**
 * Created by urielmiranda on 27/06/16.
 */
(function(){
    'use strict';

    var barChart = {
        templateUrl : './app/partials/barchart.html',
        controller : dataCtrl,
    }

    var w = 500;
    var h = 100;
    var barPadding = 1;

    
    angular
        .module("data4",[])
        .controller("barCtrl",barCtrl)
        .component("barChart",barChart);



    function barCtrl(){
        var chart = this;

        chart.dropdownstate = null;
        chart.dataset = [
            {'id':'AGU','name':'Aguascalientes', "idh" : Math.random().toFixed(2)},
            {'id':'BCN','name':'Baja California', "idh" : Math.random().toFixed(2)},
            {'id':'BCS','name':'Baja California Sur',"idh" : Math.random().toFixed(2)},
            {'id':'CAM','name':'Campeche',   "idh" : Math.random().toFixed(2)},
            {'id':'CHP','name':'Chiapas',    "idh" : Math.random().toFixed(2)},
            {'id':'CHH','name':'Chihuahua',  "idh" : Math.random().toFixed(2)},
            {'id':'COA','name':'Coahuila',   "idh" : Math.random().toFixed(2)},
            {'id':'COL','name':'Colima',     "idh" : Math.random().toFixed(2)},
            {'id':'CDMX','name':'Ciudad de México',"idh" : Math.random().toFixed(2)},
            {'id':'DUR','name':'Durango',    "idh" : Math.random().toFixed(2)},
            {'id':'GUA','name':'Guanajuato', "idh" : Math.random().toFixed(2)},
            {'id':'GRO','name':'Guerrero',   "idh" : Math.random().toFixed(2)},
            {'id':'HID','name':'Hidalgo',    "idh" : Math.random().toFixed(2)},
            {'id':'JAL','name':'Jalisco',    "idh" : Math.random().toFixed(2)},
            {'id':'MEX','name':'Estado de México',     "idh" : Math.random().toFixed(2)},
            {'id':'MIC','name':'Michoacán',  "idh" : Math.random().toFixed(2)},
            {'id':'MOR','name':'Morelos',    "idh" : Math.random().toFixed(2)},
            {'id':'NA','name':'Nayarit',     "idh" : Math.random().toFixed(2)},
            {'id':'NLE','name':'Nuevo León', "idh" : Math.random().toFixed(2)},
            {'id':'OAX','name':'Oaxaca',     "idh" : Math.random().toFixed(2)},
            {'id':'PUE','name':'Puebla',     "idh" : Math.random().toFixed(2)},
            {'id':'QUE','name':'Querétaro',  "idh" : Math.random().toFixed(2)},
            {'id':'ROO','name':'Quintana Roo',"idh" : Math.random().toFixed(2)},
            {'id':'SLP','name':'San Luis Potosí', "idh" : Math.random().toFixed(2)},
            {'id':'SIN','name':'Sinaloa',    "idh" : Math.random().toFixed(2)},
            {'id':'SON','name':'Sonora',     "idh" : Math.random().toFixed(2)},
            {'id':'TAB','name':'Tabasco',    "idh" : Math.random().toFixed(2)},
            {'id':'TAM','name':'Tamaulipas', "idh" : Math.random().toFixed(2)},
            {'id':'TLA','name':'Tlaxcala',   "idh" : Math.random().toFixed(2)},
            {'id':'VER','name':'Veracruz',   "idh" : Math.random().toFixed(2)},
            {'id':'YUC','name':'Yucatán',    "idh" : Math.random().toFixed(2)},
            {'id':'ZAC','name':'Zacatecas',  "idh" : Math.random().toFixed(2)},
        ]


        chart.over = null;
        chart.svg = d3.select("div")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        chart.xScale = d3.scale.linear()
            .domain([0, d3.max(chart.dataset, function(d){
                return d[0];

            })])
            .range([10, w]);
        chart.yScale = d3.scale.linear()
            .domain([0],d3.max(chart.dataset, function (d) {
                return d[1];
            }))
            .range([0, h]);

        
        chart.svg
            .selectAll("rect")
            .data(chart.dataset)
            .enter()
            .append("rect")
             .attr("x", function(d , i){
                 return i * (w / 32);
            })
            .attr("y", function(d ){
                return h - (d.idh *40);
            })
            .attr("width", w/chart.dataset.length - barPadding)
            .attr("height", function(d){
                return d.idh * 40;
            })
            .attr("fill", "teal")
            .on("mouseover",function(){
            chart.over = this
                d3.select(this).style('fill', "red");
            })
            .on("mouseout", function(){
                d3.select(this).style("fill", "teal");
            })

        chart.svg
            .selectAll("g")


        // chart.svg
        //     .selectAll("text")
        //     .data(dataset)
        //     .enter()
        //     .append("text")
        //     .text(function(d){
        //         console.log(d.name);
        //         return d.name;
        //     })
        //     .attr("x", function(d,i){
        //         return i * (w / 32) + (w / 32 - barPadding)/2;
        //     })
        //     .attr("y", function(d){
        //         return h - (d.idh * 4) + 15;
        //     })
        //     .attr("font-family", "sans-serif")
        //     .attr("font-size","11px")
        //     .attr("color", "black")
        //     .attr("text-anchor", "middle");

    }
    function dataCtrl(){
        var data = this;
        data.select = select;

        function select(){
            data.dataset.sort()
        }
    }

})();

