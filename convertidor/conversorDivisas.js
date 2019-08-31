
function clearTextField(){
   document.getElementById("txtCountry1").value = "";
   document.getElementById("txtCountry2").value = "";
   document.getElementById("txtCountry3").value = "";
    document.getElementById("txtCountry4").value = "";
    document.getElementById("txtCountry5").value = "";
    document.getElementById("txtCountry6").value = "";
    document.getElementById("txtCountry7").value = "";
    document.getElementById("txtCountry8").value = "";
    document.getElementById("txtCountry9").value = "";
    document.getElementById("txtCountry10").value = "";
    document.getElementById("error").innerHTML = "";
}

function validateFields(){
    cont =0;
    
    for(var i = 1;i <=10; i++){
        if(document.getElementById("txtCountry"+i).value != ""){
            cont+=1;
        }
        
    }
    if(cont ==0){
      document.getElementById("error").innerHTML= "Digite una cantidad en alguno de los campos";
        
    }else{
        if(cont > 1 ){
            clearTextField();
            document.getElementById("error").innerHTML= "Solo puede un campo con monto";
            
        }else{
            document.getElementById("error").innerHTML= "";
            
        }
        
    }
    
    
}