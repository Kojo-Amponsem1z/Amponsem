'use strict'

const container = document.querySelector(".container"),
 pwShowHide = document.querySelectorAll(".showHidePw"),
 pwFields = document.querySelectorAll(".password");

 pwShowHide.forEach(eye =>{
     eye.addEventListener("click",()=>{
          pwFields.forEach(pwField =>{
            if(pwField.type ==="password"){
               pwField.type = "text";

                pwShowHide.forEach(eye =>{
                eye.classList.replace("fa-eye","fa-eye-slash");
              })
                 }else{
                     pwField.type = "password";
                      pwShowHide.forEach(eye =>{
                eye.classList.replace("fa-eye-slash","fa-eye");
              })

                
              }
                
            })
        })
    })


