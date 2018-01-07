import React, { Component } from 'react';
import {core as Core} from 'zingchart-react';
import {AreaChart} from 'react-easy-chart'



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
		        },
		        { 
		          "size":"75%", // darker yellow
		          "values":[40],
		          "backgroundColor":"#FAD849",
		          "borderWidth":15,
		          "borderColor":"#FAD849",
		        
		        },
		        {       
		          "size":"50%", // darker green
		          "values":[70],
		          "backgroundColor":"#61D2DB",
		          "borderWidth": 15,
		          "borderColor":"#61D2DB",
		     
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

	let orders =   {
            "type":"hbar",
            "font-family":"Arial",
  			"height":"20%",
  			"width": '85%',
            "backgroundColor": "rgba(0,0,0,0)",
            "plot":{
                "bars-overlap":"100%",
                "borderRadius": "100",
                "hover-state":{
                    "visible":false
                },
             
            },

            "plotarea":{
                "margin":"1px 1px 1px 1px"
            },
             "gui": { "contextMenu": {
   	 		   "button": {
   	 			"visible": false
   	 			}
   	 		  }},
            "scale-x":{
                "line-color":"none",
                "values":[""],
                "tick":{
                    "visible":false
                },
                "guide":{
                    "visible":false
                },
                "item":{
                    "font-size":"14px",
                    "padding-right":"20px",
                    "auto-align":true,
                    "rules":[
                        {
                            "rule":"%i==0",
                            "font-color":"#FA8452"
                        }
                    ]
                }
            },
            "scale-y":{
                "visible":false,
                "guide":{
                    "visible":false
                }
            },
            "series":[
                {
                    "values":[100],
                    "bar-width":"10px",
                    "background-color":"#5C385B",
                    "border-color": "#FFF1D1",
                    "border-width": 1,
                    "line-style": "solid",
                    "fill-angle":10,
                    "tooltip":{
                        "visible":false
                    }
                },
                {
                    "values":[40],
                    "bar-width":"10px",
                    "max-trackers":0,
                    "value-box":{
                        "placement":"top-out",
                        "text":"%v",
                        "decimals":0,
                        "font-color":"red",
                        "font-size":"0px",
                        "alpha":0.6
                    },
                    "rules":[
                        {
                            "rule":"%i==0",
                            "background-color":"#F08C81"
                        }
                    ]
                }
            ]
        };



	return (
		<div className="week-container" >
			<div className="barchart">
				<Core  id="barchart" height="200" width="350" data={orders} />
		     </div>
		     <div className="orders-completed">order</div>
		     <div className="total-sales">total sales</div>
		     <div className="line-graph">
	         <AreaChart
			    axes
			    margin={{top: 10, right: 10, bottom: 50, left: 10}}
			  	xType={'text'}
			    width={370}
			    grid
			    verticalGrid
			    interpolate={'cardinal'}
			    height={150}
			    noAreaGradient
			    areaColors={['#FAD849','#B75D52', '#61D2DB']}
			    data={[
			     [
			        { x: '1', y: 0 },
			        { x: '2', y: 5 },
			        { x: '3', y: 3 },
			        { x: '4', y: 4 },
			        { x: '5', y: 6 },
			        { x: '6', y: 3 },
			        { x: '7', y: 2 },
			        { x: '8', y: 4 },
			        { x: '9', y: 3 },
			        { x: '10', y: 0 }
			      ], [
			        { x: '1', y: 0 },
			        { x: '2', y: 1 },
			        { x: '3', y: 1 },
			        { x: '4', y: 2 },
			        { x: '5', y: 3 },
			        { x: '6', y: 5 },
			        { x: '7', y: 7 },
			        { x: '8', y: 8 },
			        { x: '9', y: 4 },
			        { x: '10', y: 0 }
			      ],
			        [
			        { x: '1', y: 0 },
			        { x: '2', y: 3 },
			        { x: '3', y: 5 },
			        { x: '4', y: 3 },
			        { x: '5', y: 4 },
			        { x: '6', y: 9 },
			        { x: '7', y: 7 },
			        { x: '8', y: 4 },
			        { x: '9', y: 7 },
			        { x: '10', y: 0 }
			      ]
			    ]}
  			  />
  			 </div>
		     <div className="pie-graph">

		     	<Core id="pie-graph" height="155" width="170" data={myConfig} />

		     </div>
		     <div className="sales-number">sales</div>
		     <div className="items">items</div>
       	</div>


		
	)
	
}

export default Week;