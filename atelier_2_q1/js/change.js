$().ready(function () {

  
   $("#mainForm").validate({
      rules: {
         Nom: {
            
            required:true, 
            nowhitespace:true, 
            lettersonly:true,
            minlength: 3,
         },
         Prenom: {
            required: true,
            lettersonly:true,
            minlength: 3,
            nowhitespace:true,
            lettersonly:true
         },
         Adress: {
            required: true,
            minlength: 10
         },
         Email: {
            required: true,
            reelemail:true
         },
         Login: {
            required: true,
            minlength: 5
         },
         Mot_de_passe:{ 
            strongPassword:true,          
            required:true
            
         },
         Confirmer_mot_de_passe:{       
            required: true,
           equalTo: "input[name=Mot_de_passe]"
         },
         telephone:{
            required: true,
            numbersonly:true,
            minlength: 10     
         },
         pays:{
            required: true  
         },
         check:{
            required: true
         },
         civilité:{
            required: true,
            
         }
         
      
      },
      messages: {
         Nom:{ required:"Veuillez fournir un nom d'au moins trois lettres"},
         Prenom: {required:"Veuillez fournir un prenom d'au moins trois lettres"},
         Adress: "Veuillez fournir un Adress d'au moins dix lettres",
         Email: {required:"L'email est incorrect"},
         Login:"Veuillez fournir un Login d'au moins cinq lettres",
         Adress: "Veuillez fournir un Adress d'au moins dix lettres",
         Mot_de_passe:{ required:"Le mot de pass est incorrect"},
         Confirmer_mot_de_passe:"Le mot de pass est incorrect",
         telephone:{required:"Le numero de telephone est incorrect <br>esseyez de saisir au moins dix chifre ",
         minlength:"Veuillez fournir un Nombre de telephone <br>d'au moins dix nombres"}, 
         pays: "Choisir un pays",
         civilité:"Choisir une civilité",
         check:"Accepter les condition et les terme pour soumettre "
      },
      errorPlacement:function(error,element){
         if(element.is(":checkbox")){
            error.appendTo(element.parents(".warn"));

         }else {
       error.insertAfter(element);
         }
      }
   });
   //method pour verifier que le champ de password est remplie avec un mots de pass fort
   $.validator.addMethod('strongPassword', function(value, element) {
      var id='#'+element.id; 
      if(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/.test(value)){
         $(id).removeClass('warning');    
         return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/.test(value);         
      }
      else{
        $(id).addClass('warning');
      return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/.test(value); }
     
    },'Le mot de passe doit contenir  <br>• Au moins une lettre minuscule  <br>• Au moins une lettre majuscule  <br>• Au moins un chiffre  <br>• Au moins huit caractères' );
//method pour verifier que le champ est n'est pes remplie evec des espaces
   $.validator.addMethod( "nowhitespace", function( value, element ) {
      var id='#'+element.id; 
      if(/^\S+$/i.test( value )){
         $(id).removeClass('warning');    
         }
      else{
        $(id).addClass('warning');}
      return /^\S+$/i.test( value );
   }, "N'est utiliser pas d'espace" );
   /* -------------------------------------------------------------------------------- */
//method pour verifier que le champ est remplie avec des lettres seulement
   $.validator.addMethod( "lettersonly", function( value, element ) {
      var id='#'+element.id; 
      if(/^[a-z]+$/i.test( value )){
         $(id).removeClass('warning');    
         }
      else{
        $(id).addClass('warning');}
      return  /^[a-z]+$/i.test( value );
   }, "Utiliser les lettres seulement" );
//method pour verifier que le champ est remplie avec des nombres seulement
   $.validator.addMethod("numbersonly",function(value,element) {
      var id='#'+element.id; 
      if(/^\+[0-9]+$/i.test( value )){
         $(id).removeClass('warning'); 
         }
      else{
        $(id).addClass('warning');}
      return  /^\+[0-9]+$/i.test( value ); 
   }, "Utiliser les nombres seulement<br>'exemple : +212625318758'" );
//method pour verifier un email
   $.validator.addMethod("reelemail",function(value,element) {
      var id='#'+element.id; 
      if(/^[^@]+@\w+(\.\w+)+\w$/.test( value )){  
         $(id).removeClass('warning'); 
         }
      else{
        $(id).addClass('warning');}
      return  /^[^@]+@\w+(\.\w+)+\w$/.test( value ); 
   }, "Respecter la form email ****@***.***" );

  
});
//Si le champ est remplie ou bien vide enlever le rouge border
$("input").keyup(function(){
      $(this).removeClass('warning'); 
 
});

//Si tout les champs sont remplie enlever les rouges borders sinon ajouter les rouges borders 
$("#submit").on('click',function(){
   $("input " ).each(function () {
      if($(this).val() === '') {
         $(this).addClass('warning'); 
      } else {
         $(this).removeClass('warning');
      }
   });

//Si un choix est selectionner enlever le rouge border sinon ajouter les rouges borders 
   $("select" ).each(function () {
      if($(this).val()==null) {
         $(this).addClass('warning'); 
      } 
   });
   //Si un choix est selectionner enlever le rouge border sinon ajouter les rouges borders 
   $('select').change(function(){
      $("select" ).each(function () {
         if($(this).val()!=null) {
            $(this).removeClass('warning');
         }
      });
     
   });
   
   
});


