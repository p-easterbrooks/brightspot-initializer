/*
 * Pixastic Lib - Brightness/Contrast filter - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.brightness={process:function(a){var t=parseInt(a.options.brightness,10)||0,i=parseFloat(a.options.contrast)||0,s=!(!a.options.legacy||"false"==a.options.legacy);if(s)t=Math.min(150,Math.max(-150,t));else var n=1+Math.min(150,Math.max(-150,t))/150;if(i=Math.max(0,i+1),Pixastic.Client.hasCanvasImageData()){var e,r,o,c,h=Pixastic.prepareData(a),p=a.options.rect,g=p.width,l=p.height,m=g*l,x=4*m;1!=i?s?(o=i,c=(t-128)*i+128):(o=n*i,c=128*-i+128):s?(o=1,c=t):(o=n,c=0);for(var f,v,u;m--;)(f=h[x-=4]*o+c)>255?h[x]=255:0>f?h[x]=0:h[x]=f,(v=h[e=x+1]*o+c)>255?h[e]=255:0>v?h[e]=0:h[e]=v,(u=h[r=x+2]*o+c)>255?h[r]=255:0>u?h[r]=0:h[r]=u;return!0}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData()}};