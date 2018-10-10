class  UI{         //WHY CLASS IS CONST
    constructor(){
        // APP INITIALIZATION
        this.init();
    }
    //WHEN THE APP STARTS
    init(){
        //DISPLAY CATEGORIES IN <SELECT>
        this.printCategories();    
        this.result=document.getElementById('result');
    }

    //DISPLAY EVENTS FROM THE API 
    displayEvents(events){
        //BUILD THE TEMPLET
        let HTMLTemplate='';
        //LOOP EVENTS AND PRINT THE MESSAGE 
        events.forEach(eventInfo=>{
           HTMLTemplate+=`
           <div class="col-md-4">
           <div class="card">
             <div class = "card-body">
                <img class="img-fluid mb-2" src="${eventInfo.logo !==null ? eventInfo.logo.url:''}"> 
             </div>
             <div class ="card-body">
               <div class = "card-text">
                  <h2 class="text-center card-title">${eventInfo.name.text}</h2>
                  <p class="lead text-info">Event Information:</p>
                  <p>${eventInfo.description.text.substring(0,200)}...</p>
                  <span class= "badge badge-primary">Capacity:${eventInfo.capacity}</span>
                  <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>
                  <a href="${eventInfo.url}" target="-blank" class = "btn-primary btn-block mt-4">Get Tickets</a> 
               </div>
               </div>
           </div>
           </div>
           `
        });
        this.result.innerHTML=HTMLTemplate;
    }
    //PRINT THE CATEGORIES
    printCategories(){

        const categoriesList= eventBrite.getCategoriesApi()
        .then(categories => { 
            
            const categoriesList = categories.categories.categories;
            const categoriesSelect = document.querySelector('#category');
              
            //INSERT CATEGORIES INTO SELECT
            categoriesList.forEach(category => {
                //CREATE THE OPTIONS
                const option= document.createElement('option');
                option.value=category.id;
                option.appendChild(document.createTextNode(category.name));
                categoriesSelect.appendChild(option);
                
            });
              
        })
        .catch(error=> console.log(error));

    }
          //DISPLAY MESSAGE
    printMessage(message,className){
        //CREATE DIV
        const div = document.createElement('div');
        div.className= className;
        //add the text
         
        div.appendChild(document.createTextNode(message));
        
        //INSERT INTO THE HTML
        const divSearch = document.querySelector('#search-events');
        divSearch.appendChild(div);
        
        //REMOVE THE ERROR AFTER 2 SECONDS
        setTimeout(() => {
          this.removeMessage(); 
        },2000);

    }
       //REMOVE THE MESSAGE
           removeMessage(){
               const alert= document.querySelector('.alert');
               if(alert){
                   alert.remove();
               }
           }





}