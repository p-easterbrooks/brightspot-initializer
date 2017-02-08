/*
 * Pixastic Lib - Crop - v0.1.1
 * Copyright (c) 2008-2009 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.crop={process:function(t){if(Pixastic.Client.hasCanvas()){var e=t.options.rect,i=e.width,n=e.height,a=e.top,o=e.left;"undefined"!=typeof t.options.left&&(o=parseInt(t.options.left,10)),"undefined"!=typeof t.options.top&&(a=parseInt(t.options.top,10)),"undefined"!=typeof t.options.height&&(i=parseInt(t.options.width,10)),"undefined"!=typeof t.options.height&&(n=parseInt(t.options.height,10)),0>o&&(o=0),o>t.width-1&&(o=t.width-1),0>a&&(a=0),a>t.height-1&&(a=t.height-1),1>i&&(i=1),o+i>t.width&&(i=t.width-o),1>n&&(n=1),a+n>t.height&&(n=t.height-a);var h=document.createElement("canvas");return h.width=t.width,h.height=t.height,h.getContext("2d").drawImage(t.canvas,0,0),t.canvas.width=i,t.canvas.height=n,t.canvas.getContext("2d").clearRect(0,0,i,n),t.canvas.getContext("2d").drawImage(h,o,a,i,n,0,0,i,n),t.useData=!1,!0}},checkSupport:function(){return Pixastic.Client.hasCanvas()}};