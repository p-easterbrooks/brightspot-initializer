/*
 * Pixastic Lib - Sharpen filter - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.sharpen={process:function(a){var t=0;if("undefined"!=typeof a.options.amount&&(t=parseFloat(a.options.amount)||0),0>t&&(t=0),Pixastic.Client.hasCanvasImageData()){var i=Pixastic.prepareData(a),r=Pixastic.prepareData(a,!0);t=.2*t;for(var e=4*t+1,n=t,o=[[0,-n,0],[-n,e,-n],[0,-n,0]],s=0,p=0;3>p;p++)for(var c=0;3>c;c++)s+=o[p][c];s=1/s;var v=a.options.rect,h=v.width,u=v.height;e*=s,n*=s;var f=4*h,d=u;do{var l=(d-1)*f,x=d==u?d-1:d,P=1==d?0:d-2,m=P*f,C=x*f,D=h;do{var g=l+(4*D-4),w=m+4*(1==D?0:D-2),I=C+4*(D==h?D-1:D),k=(-r[w]-r[g-4]-r[g+4]-r[I])*n+r[g]*e,y=(-r[w+1]-r[g-3]-r[g+5]-r[I+1])*n+r[g+1]*e,A=(-r[w+2]-r[g-2]-r[g+6]-r[I+2])*n+r[g+2]*e;0>k&&(k=0),0>y&&(y=0),0>A&&(A=0),k>255&&(k=255),y>255&&(y=255),A>255&&(A=255),i[g]=k,i[g+1]=y,i[g+2]=A}while(--D)}while(--d);return!0}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData()}};