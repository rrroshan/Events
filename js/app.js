// instantiate both class

const eventBrite= new EventBrite();
const ui= new UI();
document.getElementById('submitBtn').addEventListener('click', (e)=>{
         e.preventDefault();

           //GET VALUES FROM THE FORM
           const eventName=document.getElementById('event-name').value;
           const category= document.getElementById('category').value;
          // console.log(eventName+ ' : ' +category);
              
          if(eventName!=''){
            //QUERY EVENTBRITE API 
            eventBrite.queryApi(eventName,category)
            .then(events => {
              //CHECK FOR EVENTS
              eventList = events.events.events;
                       
              if(eventList.length>0){
                //PRINT THE EVENTS
                ui.displayEvents(eventList);

              }else{
                //THERE IS NO EVENTS, PRINT THE MESSAGE 
                ui.printMessage('NO EVENTS FOUND', 'text-center alert alert-danger mt-4'); 
              }

                
            })
            
          }else{
             ui.printMessage('Add an event or city', 'text-center alert alert-danger mt-4'); 
          }
})
