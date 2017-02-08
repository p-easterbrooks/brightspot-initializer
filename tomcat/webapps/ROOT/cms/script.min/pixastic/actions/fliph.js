/*
 * Pixastic Lib - Horizontal flip - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.fliph={process:function(t){if(Pixastic.Client.hasCanvas()){var i=t.options.rect,e=document.createElement("canvas");e.width=i.width,e.height=i.height,e.getContext("2d").drawImage(t.image,i.left,i.top,i.width,i.height,0,0,i.width,i.height);var a=t.canvas.getContext("2d");return a.clearRect(i.left,i.top,i.width,i.height),a.scale(-1,1),a.drawImage(e,-i.left-i.width,i.top,i.width,i.height),t.useData=!1,!0}return Pixastic.Client.isIE()?(t.image.style.filter+=" fliph",!0):void 0},checkSupport:function(){return Pixastic.Client.hasCanvas()||Pixastic.Client.isIE()}};