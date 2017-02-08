/*
 * Pixastic Lib - Desaturation filter - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.desaturate={process:function(a){var i=!(!a.options.average||"false"==a.options.average);if(Pixastic.Client.hasCanvasImageData()){var t,e,s=Pixastic.prepareData(a),r=a.options.rect,n=r.width,o=r.height,c=n*o,f=4*c;if(i)for(;c--;)s[f-=4]=s[t=f+1]=s[e=f+2]=(s[f]+s[t]+s[e])/3;else for(;c--;)s[f-=4]=s[t=f+1]=s[e=f+2]=.3*s[f]+.59*s[t]+.11*s[e];return!0}return Pixastic.Client.isIE()?(a.image.style.filter+=" gray",!0):void 0},checkSupport:function(){return Pixastic.Client.hasCanvasImageData()||Pixastic.Client.isIE()}};