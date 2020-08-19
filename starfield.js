 	 var perm2 = new Array(512)	 
	 for(let p=0;p<256;p++)
	 {perm2[p]=Math.floor(Math.random() * 256);}	 

PerlinNoise2 = new function() {

	this.noise = function(x, y, z) {

   var p = new Array(512)

   
   permutation = perm2;
   
   for (var i=0; i < 256 ; i++) 
 p[256+i] = p[i] = permutation[i]; 

      var X = Math.floor(x) & 255,                  // FIND UNIT CUBE THAT
          Y = Math.floor(y) & 255,                  // CONTAINS POINT.
          Z = Math.floor(z) & 255;
      x -= Math.floor(x);                                // FIND RELATIVE X,Y,Z
      y -= Math.floor(y);                                // OF POINT IN CUBE.
      z -= Math.floor(z);
      var    u = fade(x),                                // COMPUTE FADE CURVES
             v = fade(y),                                // FOR EACH OF X,Y,Z.
             w = fade(z);
      var A = p[X  ]+Y, AA = p[A]+Z, AB = p[A+1]+Z,      // HASH COORDINATES OF
          B = p[X+1]+Y, BA = p[B]+Z, BB = p[B+1]+Z;      // THE 8 CUBE CORNERS,

      return scale(lerp(w, lerp(v, lerp(u, grad(p[AA  ], x  , y  , z   ),  // AND ADD
                                     grad(p[BA  ], x-1, y  , z   )), // BLENDED
                             lerp(u, grad(p[AB  ], x  , y-1, z   ),  // RESULTS
                                     grad(p[BB  ], x-1, y-1, z   ))),// FROM  8
                     lerp(v, lerp(u, grad(p[AA+1], x  , y  , z-1 ),  // CORNERS
                                     grad(p[BA+1], x-1, y  , z-1 )), // OF CUBE
                             lerp(u, grad(p[AB+1], x  , y-1, z-1 ),
                                     grad(p[BB+1], x-1, y-1, z-1 )))));
   }
   function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
   function lerp( t, a, b) { return a + t * (b - a); }
   function grad(hash, x, y, z) {
      var h = hash & 15;                      // CONVERT LO 4 BITS OF HASH CODE
      var u = h<8 ? x : y,                 // INTO 12 GRADIENT DIRECTIONS.
             v = h<4 ? y : h==12||h==14 ? x : z;
      return ((h&1) == 0 ? u : -u) + ((h&2) == 0 ? v : -v);
   } 
   function scale(n) { return (1 + n)/2; }
}



function starfield2(context,canvas)
{

	  context.fillStyle = "midnightblue";
	  context.fillRect(0, 0, canvas.width, canvas.height);
	 	 
	 for(var xx=0;xx<canvas.width;xx+=8)
	 {
	  for(var yy=0;yy<canvas.height;yy+=8)
	  {
	  
			var xi=xx;
			var yi=yy;
	  
			xi /= canvas.width; yi /= canvas.height; // normalize
			size = 3;  // pick a scaling value
			var n = PerlinNoise2.noise( size*xi, size*yi, .8);
			//b=200;
		
			var r = 0;
			var g = Math.round( 51 * n );
			var b = Math.round( 102 * n );
			
			//r = g = b = Math.round( 255 * n );
	  
	  
			context.beginPath();
			context.arc(xx,yy,8, 2 * Math.PI, false);
			context.fillStyle = 'rgb(' + r +',' + g + ',' + b + ')';
			context.fill();
	  
	  }
	 
	 }
			
	 for(var xx=0;xx<canvas.width;xx+=(Math.floor(Math.random() * 40)+1))
	 {
	  for(var yy=0;yy<canvas.height;yy+=(Math.floor(Math.random() * 100)+1))
	  {
	  	
		    var xi=xx;
			var yi=yy;
	  
			xi /= canvas.width; yi /= canvas.height; // normalize
			var size = 3;  // pick a scaling value
			n = PerlinNoise2.noise( size*xi, size*yi, .8);
	
			context.globalAlpha = .3 * n;
	
	
			r=g=b=(Math.floor(Math.random() * 50)+200);
			
	  
			context.beginPath();
			context.arc(xx+Math.floor(Math.random() * 20)-10,yy,(Math.floor(Math.random() * 2)+1), 2 * Math.PI, false);
			context.fillStyle = 'rgb(' + r +',' + g + ',' + b + ')';
			context.fill();
	  
	  }
	  
	 }	 
	 	
}	  