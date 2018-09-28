/*
*   Rounded Rectangle Extension for Bar Charts and Horizontal Bar Charts
*   Tested with Charts.js 2.7.0
*   Modified by anthony0030
*/
Chart.elements.Rectangle.prototype.draw=function(){function o(o){return m[(y+o)%4]}
// Draw rectangle from 'startCorner'
var t=this._chart.ctx,i=this._view,e,r,a,n,l,T,h,u,d=i.borderWidth,c=this._chart.config.options.cornerRadius,v=this._chart.config.options.fullCornerRadius,s=this._chart.config.type;
// Canvas doesn't allow us to stroke inside the width so we can
// adjust the sizes to fit if we're setting a stroke on the line
if(c<0&&(c=0),void 0===c&&(c=0),void 0===v&&(v=!0),h=i.horizontal?(
// horizontal bar
e=i.base,r=i.x,a=i.y-i.height/2,n=i.y+i.height/2,l=e<r?1:-1,T=1,i.borderSkipped||"left"):(
// bar
e=i.x-i.width/2,r=i.x+i.width/2,l=1,T=(a=i.y)<(n=i.base)?1:-1,i.borderSkipped||"bottom"),d){
// borderWidth shold be less than bar width and bar height.
var b=Math.min(Math.abs(e-r),Math.abs(a-n)),f=(d=b<d?b:d)/2,C=e+("left"!==h?f*l:0),q=r+("right"!==h?-f*l:0),p=a+("top"!==h?f*T:0),g=n+("bottom"!==h?-f*T:0);
// not become a vertical line?
C!==q&&(a=p,n=g),
// not become a horizontal line?
p!==g&&(e=C,r=q)}t.beginPath(),t.fillStyle=i.backgroundColor,t.strokeStyle=i.borderColor,t.lineWidth=d;
// Corner points, from bottom-left to bottom-right clockwise
// | 1 2 |
// | 0 3 |
var m=[[e,n],[e,a],[r,a],[r,n]],M,y=["bottom","left","top","right"].indexOf(h,0);
// Find first (starting) corner with fallback to 'bottom'
-1===y&&(y=0);var k=o(0),x,_,w,S,R,z;t.moveTo(k[0],k[1]);for(var W=1;W<4;W++){var B,O,P,j,A,D,E,F;k=o(W),4===(x=W+1)&&(x=0),_=o(x),w=m[2][0]-m[1][0],S=m[0][1]-m[1][1],R=m[1][0],z=m[1][1],
// Fix radius being too large
(u=c)>Math.abs(S)/2&&(u=Math.floor(Math.abs(S)/2)),u>Math.abs(w)/2&&(u=Math.floor(Math.abs(w)/2)),S<0?(
// Negative values in a standard bar chart
O=(B=R)+w,j=P=z+S,D=(A=R)+w,F=E=z,
// Draw
t.moveTo(A+u,E),t.lineTo(D-u,F),
// bottom right
t.quadraticCurveTo(D,F,D,F-u),t.lineTo(O,j+u),
// top right
v?t.quadraticCurveTo(O,j,O-u,j):t.lineTo(O,j,O-u,j),t.lineTo(B+u,P),
// top left
v?t.quadraticCurveTo(B,P,B,P+u):t.lineTo(B,P,B,P+u),t.lineTo(A,E-u),
//  bottom left
t.quadraticCurveTo(A,E,A+u,E)):w<0?(
// Negative values in a horizontal bar chart
B=R+w,A=(O=R)+w,D=R,F=E=(j=P=z)+S,
// Draw
t.moveTo(A+u,E),t.lineTo(D-u,F),
//  Bottom right corner
v?t.quadraticCurveTo(D,F,D,F-u):t.lineTo(D,F,D,F-u),t.lineTo(O,j+u),
// top right Corner
v?t.quadraticCurveTo(O,j,O-u,j):t.lineTo(O,j,O-u,j),t.lineTo(B+u,P),
// top left corner
t.quadraticCurveTo(B,P,B,P+u),t.lineTo(A,E-u),
//  bttom left corner
t.quadraticCurveTo(A,E,A+u,E)):(
//Positive Value
t.moveTo(R+u,z),t.lineTo(R+w-u,z),
// top right
t.quadraticCurveTo(R+w,z,R+w,z+u),t.lineTo(R+w,z+S-u),
// bottom right
v||"horizontalBar"===s?t.quadraticCurveTo(R+w,z+S,R+w-u,z+S):t.lineTo(R+w,z+S,R+w-u,z+S),t.lineTo(R+u,z+S),
// bottom left
v?t.quadraticCurveTo(R,z+S,R,z+S-u):t.lineTo(R,z+S,R,z+S-u),t.lineTo(R,z+u),
// top left
v||"bar"===s?t.quadraticCurveTo(R,z,R+u,z):t.lineTo(R,z,R+u,z))}t.fill(),d&&t.stroke()};