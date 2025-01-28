'use strict'
const closeTogle =document.querySelector('#close-panel');
const leftSection = document.querySelector(".left-section");
closeTogle.addEventListener('click',function(){
  
  leftSection.classList.toggle("hidden");
  closeTogle.classList.toggle("show")
});

const nsLink = document.getElementById('NS');
const subNews = document.querySelector('.sub-News');

nsLink.addEventListener('mouseover', function() {
  subNews.classList.toggle("show")
 });

 nsLink.addEventListener('mouseout', function() {
  setTimeout(function() {
    if (!subNews.matches(':hover')) {
      subNews.classList.remove("show");
    }
  }, 100); // Adding a slight delay to ensure it doesn't close when moving to the submenu
});
subNews.addEventListener('mouseleave', function() {
  subNews.classList.remove("show");
});


const vcLink = document.getElementById('Vacancies');
const subVacancy =document.querySelector('.sub-vacancies');

vcLink.addEventListener('mouseover',function(){
  subVacancy.classList.toggle("show")
});
vcLink.addEventListener('mouseout',function(){
  if (!subVacancy.matches(':hover')) {
    subVacancy.classList.remove("show");
  }
}, 100); 

subVacancy.addEventListener('mouseleave', function() {
  subVacancy.classList.remove("show");
});

const abtLink=document.getElementById('Aboutus')
const subAbout=document.querySelector('.sub-About');

abtLink.addEventListener('mouseover',function(){
  subAbout.classList.toggle("show")
});
abtLink.addEventListener('mouseout',function(){
  if (!subAbout.matches(':hover')) {
    subAbout.classList.remove("show");
  }
}, 100); 
subAbout.addEventListener('mouseleave', function() {
  subAbout.classList.remove("show");
});

const acaLink =document.getElementById('ACA');
const subAca=document.querySelector('.sub-academics');
acaLink.addEventListener('mouseover',function(){
  subAca.classList.toggle("show")
});
acaLink.addEventListener('mouseout',function(){
  if (!subAca.matches(':hover')) {
    subAca.classList.remove("show");
  }
}, 100); 
subAca.addEventListener('mouseleave',function() {
  subAca.classList.remove('show')
  
});

const adminLink=document.getElementById('ADMIN');
const subAdmin=document.querySelector('.sub-Admission');
adminLink.addEventListener('mouseover',function(){
  subAdmin.classList.toggle('show')
});
adminLink.addEventListener('mouseout',function(){
  if(!subAdmin.matches(':hover')) {
    subAdmin.classList.remove("show");
  }
}, 100); 

subAdmin.addEventListener('mouseleave',function(){
  subAdmin.classList.remove('show')
});

const facsLink=document.getElementById('FACS');
const subFacs=document.querySelector('.sub-Facilities');
facsLink.addEventListener('mouseover',function(){
  subFacs.classList.toggle('show')
});
facsLink.addEventListener('mouseout',function(){
  if(!subFacs.matches(':hover')) {
    subFacs.classList.remove("show");
  }
}, 100); 

subFacs.addEventListener('mouseleave',function(){
  subFacs.classList.remove('show')
});

const aptLink=document.getElementById('APT');
const subApt=document.querySelector('.sub-Apointment');
aptLink.addEventListener('mouseover',function(){
  subApt.classList.toggle('show')
})
aptLink.addEventListener('mouseout',function(){
if(
  !subApt.matches(':hover')) {
    subApt.classList.remove("show");
  }
}, 100);

subApt.addEventListener('mouseleave',function(){
  subApt.classList.remove('show')
});









// nsLink.addEventListener('click', function() {
//   subNews.classList.toggle("show")
//  });





// nsLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   subNews.style.display = subNews.style.display === 'none' ? 'block' : 'none';
// });




// students portal//


    // document.addEventListener('DOMContentLoaded', function() {
    //     var calendarEl = document.getElementById('calendar');

    //     var calendar = new FullCalendar.Calendar(calendarEl, {
    //         initialView: 'dayGridMonth', // Sets the initial view to a month view
    //         headerToolbar: { // Adds navigation buttons
    //             left: 'prev,next today',
    //             center: 'title',
    //             right: 'dayGridMonth,timeGridWeek,timeGridDay'
    //         },
    //         events: [ // Example events
    //             {
    //                 title: 'Class Test',
    //                 start: '2024-09-05',
    //                 end: '2024-09-07'
    //             },
    //             {
    //                 title: 'School Holiday',
    //                 start: '2024-09-10'
    //             },
    //             {
    //                 title: 'Exam',
    //                 start: '2024-09-15',
    //                 end: '2024-09-18'
    //             }
    //         ]
    //     });

    //     calendar.render(); // Renders the calendar inside the specified div
    // });


    // Import and configure Zoom Web SDK
// ZoomMtg.setZoomJSLib("https://source.zoom.us/2.20.2/lib", "/av");
// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareJssdk();

// Initialize and join a Zoom meeting
// ZoomMtg.init({
//   leaveUrl: "http://www.yourwebsite.com",
//   success: function () {
//     ZoomMtg.join({
//       meetingNumber: "yourMeetingNumber",
//       userName: "Your Name",
//       signature: "yourSignature", // Signature must be generated on the server-side
      // apiKey: "yourApiKey",
      // userEmail: "yourEmail@example.com", // optional
      // passWord: "yourMeetingPassword", // optional
//       success: function (res) {
//         console.log("Join meeting success");
//       },
//       error: function (res) {
//         console.log(res);
//       },
//     });
//   },
//   error: function (res) {
//     console.log(res);
//   },
// });