function e(e){const s=parseFloat(e);let a,t=e.match(/m?s/);switch(t&&(t=t[0]),t){case"s":a=1e3*s;break;case"ms":a=s;break;default:a=0}return a}export{e as c}