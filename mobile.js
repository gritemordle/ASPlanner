

var evCache = new Array();
var prevDiff = -1;


 // Install event handlers for the pointer target
 var el=document.getElementById("ASListen");
 el.onpointerdown = pointerdown_handler;
 el.onpointermove = pointermove_handler;

 // Use same handler for pointer{up,cancel,out,leave} events since
 // the semantics for these events - in this app - are the same.
 el.onpointerup = pointerup_handler;
 el.onpointercancel = pointerup_handler;
 el.onpointerout = pointerup_handler;
 el.onpointerleave = pointerup_handler;


function pointerdown_handler(ev) {
 // The pointerdown event signals the start of a touch interaction.
 // This event is cached to support 2-finger gestures
 evCache.push(ev);
 //log("pointerDown", ev);
}

function pointermove_handler(ev) {
 // This function implements a 2-pointer horizontal pinch/zoom gesture. 
 //
 // If the distance between the two pointers has increased (zoom in), 
 // the target element's background is changed to "pink" and if the 
 // distance is decreasing (zoom out), the color is changed to "lightblue".
 //
 // This function sets the target element's border to "dashed" to visually
 // indicate the pointer's target received a move event.
 log("pointerMove", ev);
 ev.target.style.border = "dashed";

 // Find this event in the cache and update its record with this event
 for (var i = 0; i < evCache.length; i++) {
   if (ev.pointerId == evCache[i].pointerId) {
      evCache[i] = ev;
   break;
   }
 }

 // If two pointers are down, check for pinch gestures
 if (evCache.length == 2) {
   // Calculate the distance between the two pointers
   var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

   if (prevDiff > 0) {
     if (curDiff > prevDiff) {
       // The distance between the two pointers has increased
       //log("Pinch moving OUT -> Zoom in", ev);
      zoom(1);
     }
     if (curDiff < prevDiff) {
       // The distance between the two pointers has decreased
       //log("Pinch moving IN -> Zoom out",ev);
             zoom(-1);
     }
   }

   // Cache the distance for the next move event 
   prevDiff = curDiff;
 }
}


function pointerup_handler(ev) {
  //log(ev.type, ev);
  // Remove this pointer from the cache and reset the target's
  // background and border
  remove_event(ev);
  //ev.target.style.background = "white";
 // ev.target.style.border = "1px solid black";

  // If the number of pointers down is less than two then reset diff tracker
  if (evCache.length < 2) {
    prevDiff = -1;
  }
}




function remove_event(ev) {
 // Remove this event from the target's cache
 for (var i = 0; i < evCache.length; i++) {
   if (evCache[i].pointerId == ev.pointerId) {
     evCache.splice(i, 1);
     break;
   }
 }
}





  function zoom(deltaY)
  {
  
  
  				var leftmost=0;
				var rightmost=0;	
				var baseradius=5;
				
	
		if(event.deltaY>0)
		
		{ 		
		
			
				
			for(var i=0;i<nodes.length;i++)
			{		

				nodes[i].x-=canvas.width/3;
				nodes[i].y-=canvas.height/2	
				
				nodes[i].x*=.9;
				nodes[i].y*=.9;	
				
				
			
				nodes[i].x+=canvas.width/3;
				nodes[i].y+=canvas.height/2;
				
	
										
			}	
	
		
		}
		
		
		else{
		

			for(var i=0;i<nodes.length;i++)
			{ 

				nodes[i].x-=canvas.width/3;
				nodes[i].y-=canvas.height/2;
	
				nodes[i].x*=1.1;
				nodes[i].y*=1.1;

				nodes[i].x+=canvas.width/3;
				nodes[i].y+=canvas.height/2;			
					
			}

			
			}
		
		
			for(var ii=0;ii<nodes.length;ii++)
			{
				if(nodes[ii].x<leftmost)
				{leftmost=nodes[ii].x;}
				if(nodes[ii].x>rightmost)
				{rightmost=nodes[ii].x;}
			}	

			baseradius=((rightmost-leftmost)/200);
			
			for(var ii=0;ii<nodes.length;ii++)
			{
				if(nodes[ii].s==1){nodes[ii].r=baseradius*1.05;}
				if(nodes[ii].s==2){nodes[ii].r=baseradius*1.75;}
				if(nodes[ii].s==3){nodes[ii].r=baseradius*3.75;}
			}			
			
		
		    drawWeb();		
	
			event.preventDefault();
  
  
  }














