/*
 * Pixastic Lib - Invert filter - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.invert={process:function(i){if(Pixastic.Client.hasCanvasImageData()){for(var t=Pixastic.prepareData(i),a=!!i.options.invertAlpha,e=i.options.rect,n=e.width*e.height,s=4*n,r=s+1,c=s+2,o=s+3;n--;)t[s-=4]=255-t[s],t[r-=4]=255-t[r],t[c-=4]=255-t[c],a&&(t[o-=4]=255-t[o]);return!0}return Pixastic.Client.isIE()?(i.image.style.filter+=" invert",!0):void 0},checkSupport:function(){return Pixastic.Client.hasCanvasImageData()||Pixastic.Client.isIE()}};