import React, { Component } from 'react';
import {core as Core} from 'zingchart-react';



const  Week =  (props) => {
	
		let myConfig = {
		  "graphset":[
		    
		    {	
		      "type":"pie",
		      "backgroundColor": "rgba(0,0,0,0)",
		      "plotarea":{
		        "margin":"15"
		      },
		       "gui": { "contextMenu": {
   	 		   "button": {
   	 			"visible": false
   	 			}
   	 		  }},
		      "scale":{
		        "sizeFactor":1
		      },
		      "plot":{
		        "valueBox":{
		          "visible":false
		        },
		        "refAngle":270,
		        "angleStart":270,
		        "detach":false,
		        "slice":"100%",
		        "totals":[100],
		        "animation":{
		          "speed":1000,
		          "effect":2,
		          "method":0
		        },
		        "hoverState":{
		          "visible":true
		        }
		      },



		      "series":[
		        {
		          "size":"100%", //darker red
		          "values":[70],
		          "backgroundColor":"#B75D52",
		          "borderWidth": 15,
		          "borderColor":"#B75D52",
		          "text":"Move",
		          "tooltip":{
		              "x":100,    
		              "y":100,
		              "width":0,
		              "fontSize":19,
		              "padding":0,
		              "anchor":"c",
		              "fontFamily":"Lucida Sans Unicode",
		              "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>", 
		              "align":"left",
		              "borderWidth":0,
		              "backgroundColor":"none",
		            }
		        },
		        { 
		          "size":"75%", // darker yellow
		          "values":[40],
		          "backgroundColor":"#FAD849",
		          "borderWidth":15,
		          "borderColor":"#FAD849",
		          "text":"Exercise",
		          "tooltip":{
		              "x":100,    
		              "y":100,
		              "width":120,
		              "fontSize":19,
		              "padding":30,
		              "anchor":"c",
		              "fontFamily":"Lucida Sans Unicode",
		              "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>",
		              "align":"left",
		              "borderWidth":0,
		              "backgroundColor":"none",
		            }
		        },
		        {       
		          "size":"50%", // darker green
		          "values":[70],
		          "backgroundColor":"#61D2DB",
		          "borderWidth": 15,
		          "borderColor":"#61D2DB",
		          "text":"Stand",

		          "tooltip":{
		              "x":130,    
		              "y":100,
		              "width":120,
		              "fontSize":19,
		              "padding":30,
		              "anchor":"c",
		              "fontFamily":"Lucida Sans Unicode",
		              "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>",
		              "align":"left",
		              "borderWidth":0,
		              "backgroundColor":"none",
		      },
		        }
		      ],
		      "shapes":[
		        {
		          "type":"pie", //lighter red
		          "flat":true,
		          "x":85,
		          "y": 77,
		          "backgroundColor":"#F61F64",
		          "alpha":0.25,
		          "size":70,
		          "slice":55,
		          "placement":"bottom"
		        },
		        {
		          "type":"pie", //lighter yellow
		          "flat":true,
		          "x":85,
		          "y":77,
		          "backgroundColor":"#78ff1b",
		          "alpha":0.25,
		          "size":54,
		          "slice":41,
		          "placement":"bottom"
		        },
		        {
		          "type":"pie", //lighter green
		          "flat":true,
		          "x":85,
		          "y":77,
		          "backgroundColor":"#0efbe1",
		          "alpha":0.25,
		          "size": 39,
		          "slice": 25,
		          "placement":"bottom"
		        },
		         {
		          "type":"circle", // red white circle
		          "size": 5,
		          "x": 85,
		          "y": 15,
		          "background-color":"#FFFFFF",
		         },
		        {
		          "type":"circle", //yellow white cricle
		          "size": 5,
		          "x": 85,
		          "y": 30,
		          "background-color":"#FFFFFF",
		         },
		         {
		          "type":"circle", //green white circle
		          "size": 5,
		          "x": 85,
		          "y": 46,
		          "background-color":"#FFFFFF",
		         }
		      ],
		      "labels": [{
		      	"text":"HOODIE",
		      	"x":"25px",
                "y":"5px",
                "font-color": "#B75D52"
		      },
		      {
		      	"text":"FITTED CAP",
		      	"x":"5px",
                "y":"23px",
                "font-color": "#FAD849"
		      },
		       {
		      	"text":"BRACELET",
		      	"x":"10px",
                "y":"38px",
                "font-color": "#61D2DB"

		      }

		      ],
		    }
		  ]
		};



	return (
		<div className="week-container" >
			<div className="barchart">
				barchart
		     </div>
		     <div className="orders-completed">order</div>
		     <div className="total-sales">total sales</div>
		     <div className="line-graph">line graph</div>
		     <div className="pie-graph">

		     	<Core className="hello" id="myChart" height="155" width="170" data={myConfig} />

		     </div>
		     <div className="sales-number">sales</div>
		     <div className="items">items</div>
       	</div>


		
	)
	
}

export default Week;