

        //EJERCICIO 1 - Realice una funcion js que al ingresar un nombre retorne la cantidad de vocales y consonantes que tenga

                function contarVocCon(nombre){
                    var contadorVoc=0;
                    var contadorCon=0;
                    var cantidadVocCon="";

                    nombre=nombre.toLowerCase();//Pasar a minuscula

                    //.lenght retorna la cantidad de caracteres

                    for(var i=0;i<nombre.length;i++){
                        switch(nombre[i]){
                            case 'a':
                            case 'e':
                            case 'i':
                            case 'o':
                            case 'u':contadorVoc++ 
                            break;
                            default:contadorCon++;
                        }
                    }
                    cantidadVocCon="La cantidad de vocales es:"+contadorVoc+" y la cantidad de consonantes es: "+contadorCon+".";
                
                    return cantidadVocCon;
                }
             
        //EJERCICIO 2 - Agregue una validacion en la contraseña que valide tener al menos un numero y una letra en mayuscula

                function validarContraseña(contraseña){
                    var numero=false;
                    var mayuscula=false;
                    var i=0;
  
                    for(i;i<contraseña.length;i++){
                         //document.write("i");
                         //isNaN() verifica si un caracter no es un numero
                        if(isNaN(contraseña[i])){
                            if(contraseña[i]==contraseña[i].toUpperCase()){
                                mayuscula=true;
                            }             
                        }
                        else{
                            numero=true;  
                        }

                        if(numero==true && mayuscula==true){
                            return "Contraseña Valida";
                        }
                    }
                    return "La contraseña debe tener por lo menos una mayuscula y un numero";
                }
                //alert(validarContraseña("aaaaaaa")); 

        //EJERCICIO 3 - Informe al hacer click si el campo usuario o contrasenia esta vacio
                function usConVacio(usuario,contraseña){
                    if(usuario=="" || contraseña==""){
                        return true;   
                       }
                   return false;
                }

        //EJERCICIO 4 - Realice un spinner al hacer click en "loguearse" si todo esta correcto

        function mostrarSpinner(){
            var ingresar=document.getElementById("ingresar");
            var cargarIngresar=document.getElementById("cargarIngresar");
            ingresar.style="display: none";
            cargarIngresar.style="";
        }

        //EJERCICIO 5 - Al cargarse la pagina (metodo load de js) se debe setear el foco 
        //al control del nombre de usuario

              //autofocus="autofocus" 

              function hacerFoco(campo){
                document.getElementById().focus();
              }

        




           
   

              




                
               
     