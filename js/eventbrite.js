class EventBrite{
// constructor when instantiate
constructor(){
    this.auth_token = '4ITOFGS4MNJ46XKRRPRD';
    this.order_by= 'date'
}
//GET THE EVENTS FRO THE API 
    async queryApi(eventName,category){
        //QUERY EVENTBRITE API 
        const eventsResponse= await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.order_by}&categories=${category}&token=${this.auth_token}`);
        //WAIT FOR RESPONSE AND RETURN AS JSON
         const events= await eventsResponse.json();
         return{
             events
         }

    }
//GET CATEGORIES FROM API   
 async getCategoriesApi(){
    //QUERY THE API
    const categoriesResponse= await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);
 
    //HOLD THE RESPONSE AND RETURN AS JSON
    const categories=await categoriesResponse.json();
    return{
        categories
    }
}

}