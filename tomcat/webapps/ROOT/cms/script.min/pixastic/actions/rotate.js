/*
 * Pixastic Lib - Rotate - v0.1.0
 * Copyright (c) 2009 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.rotate={process:function(a){if(Pixastic.Client.hasCanvas()){var t=a.canvas,h=a.width,e=a.height,s=document.createElement("canvas");s.width=h,s.height=e,s.getContext("2d").drawImage(t,0,0,h,e);var n=-parseFloat(a.options.angle)*Math.PI/180,i=n;i>.5*Math.PI&&(i=Math.PI-i),i<.5*-Math.PI&&(i=-Math.PI-i);var r=Math.sqrt(h*h+e*e),M=Math.abs(i)-Math.abs(Math.atan2(e,h)),c=Math.abs(i)+Math.abs(Math.atan2(e,h)),o=Math.abs(Math.cos(M)*r),d=Math.abs(Math.sin(c)*r);t.width=o,t.height=d;var g=t.getContext("2d");return g.translate(o/2,d/2),g.rotate(n),g.drawImage(s,-h/2,-e/2),a.useData=!1,!0}},checkSupport:function(){return Pixastic.Client.hasCanvas()}};