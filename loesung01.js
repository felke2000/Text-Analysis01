
var s;
var lines;

//add Buttons on open event
document.addEventListener('DOMContentLoaded', function() {
      
       // reate own buttons
        newbutton = document.createElement("BUTTON");
        newbutton.innerHTML="1. Text ausgeben";
        //add to the group
        document.getElementById("ButtonGroup").appendChild(newbutton);
        newbutton.addEventListener("click",printGlobal);

        newbutton = document.createElement("BUTTON");
        newbutton.innerHTML="2. Anzahl je Buchstabe";
        //add to the group
        document.getElementById("ButtonGroup").appendChild(newbutton);
        newbutton.addEventListener("click",tx01);
      
        newbutton = document.createElement("BUTTON");
        newbutton.innerHTML="3. Alle Buchstaben zu Kleinbuchstaben";
        //add to the group
        document.getElementById("ButtonGroup").appendChild(newbutton);
        newbutton.addEventListener("click",tx02);

        newbutton = document.createElement("BUTTON");
        newbutton.innerHTML="4. Anzahl Kleinbuchstaben und Grossbuchstaben";
        //add to the group
        document.getElementById("ButtonGroup").appendChild(newbutton);
        newbutton.addEventListener("click",tx03);

        newbutton = document.createElement("BUTTON");
        newbutton.innerHTML="5. Anzahl Buchstaben und Satzzeichen";
        //add to the group
        document.getElementById("ButtonGroup").appendChild(newbutton);
        newbutton.addEventListener("click",tx04);

        newbutton = document.createElement("BUTTON");
        newbutton.innerHTML="6. Alle Satzzeichen entfernen";
        //add to the group
        document.getElementById("ButtonGroup").appendChild(newbutton);
        newbutton.addEventListener("click",tx05);
     
}, false);

    //read the textfile, s is global variable
    var textArea = document.getElementById("textarea");
    var lines = new Array();
    const inputElement = document.getElementById("input");
    inputElement.addEventListener("change", handleFiles, false);
    function handleFiles() {
        const fileList = inputElement.files; /* now you can work with the file list */
        var file = fileList[0];
        const numFiles = fileList.length;
        console.log("Anzahl Files: ",numFiles);
        console.log(fileList[0]);
        var reader = new FileReader();
        reader.onload= function(progressEvent){    
            lines = this.result.split(/\r\n|\n/);
            //textArea.value = "abcd";    
          };
          reader.readAsText(file);          
        };


     function printGlobal() { 
        const s = lines.join("\n"); 
        textArea.value = s;
    };

    //function isLetter
    function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
    }

    //Textanalyse 1
    function tx01(){
        const s = lines.join("\n"); 
        //dictionary
        myArray = s.split('');                 
        var dict = {};
        for(x=0; x < myArray.length-1; x++){
            if (isLetter(myArray[x])){
                if (dict[myArray[x]] === undefined) {
                    dict[myArray[x]]=1;
                }
                else{
                    dict[myArray[x]]+=1;                                     
                }                
            }           
        }
        var st="";
        Object.keys(dict)
            .sort()
            .forEach(function(v, i) {
                //console.log(v, dict[v]);
                st=st + v + "==>" + dict[v]+"\n";
            })
        textArea.value= st;
    }

    //Textanalyse 2.
    function tx02(){
        const s = lines.join("\n"); 
        //alle Grossbuchstaben zu Kleinbuchstaben ändern        
        regx= /[a-zA-Z]/g;
        var s1= s.replaceAll(regx,function(v) { return v.toLowerCase()});
        textArea.value= s1;      
    }
    
    //Textanalyse 3.
    function tx03(){
        //Anzahl Klein und GrossBuchstaben
        const s = lines.join("\n");
        nrsm = s.match(/[a-z]/g).length;
        nrbg = s.match(/[A-Z]/g).length;
        const output = "Anzahl Kleinbuchstaben: "+nrsm+"\n"+"Anzahl Grossbuchstaben: " + nrbg;
        textArea.value= output;             
    }
    
    function tx04(){
        //Anzahl Buchstaben und Satzzeichen
        const s = lines.join("\n");
        nr = s.match(/[^\s]/g).length;  
        const output = "Anzahl Buchstaben und Satzzeichen: " + nr;
        textArea.value= output;             
    }

    function tx05(){
        //entfernt alle Satzzeichen
        const s = lines.join("\n");
        regx = /[^a-zA-Z\s]/g;
        var s2= s.replaceAll(regx,'');
        textArea.value = s2;     
    }




























