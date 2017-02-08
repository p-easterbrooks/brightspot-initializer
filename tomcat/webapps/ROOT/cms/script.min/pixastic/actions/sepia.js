/*
 * Pixastic Lib - Sepia filter - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.sepia={process:function(a){var i=parseInt(a.options.mode,10)||0;if(0>i&&(i=0),i>1&&(i=1),Pixastic.Client.hasCanvasImageData()){var t=Pixastic.prepareData(a),e=a.options.rect,r=e.width,s=e.height,n=4*r,o=s;do{var c=(o-1)*n,p=r;do{var h=c+4*(p-1);if(i)var v=.299*t[h]+.587*t[h+1]+.114*t[h+2],l=v+39,u=v+14,d=v-36;else var f=t[h],x=t[h+1],C=t[h+2],l=.393*f+.769*x+.189*C,u=.349*f+.686*x+.168*C,d=.272*f+.534*x+.131*C;0>l&&(l=0),l>255&&(l=255),0>u&&(u=0),u>255&&(u=255),0>d&&(d=0),d>255&&(d=255),t[h]=l,t[h+1]=u,t[h+2]=d}while(--p)}while(--o);return!0}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData()}};