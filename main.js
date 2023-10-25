import { boston } from "./boston.js";
var bostondata=boston.data;
var ele="";
 
for(let i=0;i<bostondata.length;i++){
    
        if(bostondata[i][11]>=200000){
            ele+="<h2>" +
bostondata[i][8] +
"</h2>" +
"<h3>" +
bostondata[i][11] +
"</h3>";

        }

}

document.getElementById("app").innerHTML="<ul>"+ele+"</ul>";

