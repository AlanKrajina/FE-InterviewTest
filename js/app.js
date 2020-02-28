window.onload = function() {
    getData();
  };

let allData = [] 

const getData = () => {
    fetch(`https://learn.accountingcpd.net/ACPD/API/Test/SampleObject`)
      .then(res => res.json())
      .then(response => {
            response.forEach(data => {

           allData.push(data);
         })
         // initial show on page load
         initialCourses();
         loadMore();
      })    
}

/////////////////////////////////

const domCreator = (data) => {
    let z = document.createElement('li');
    z.classList.add('item'); 

    let h = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    z.appendChild(h);               
    z.appendChild(p1);  
    z.appendChild(p2);                            

    h.innerHTML= data.title 
    p1.innerHTML= data.description 
    p2.innerHTML= `Price: $${data.price}` 

    parent.appendChild(z);    
}


let counter = 0


const loadMore = () => {
    let counter2 = 0
    let arr = []
    allData.forEach(data => {
        arr.push(data)
        counter2 += 1;
        if (arr.length >= 11){
        let z = document.createElement('li');
        z.classList.add('item'); 

        let h = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        z.appendChild(h);               
        z.appendChild(p1);  
        z.appendChild(p2);                            

        h.innerHTML= data.title 
        p1.innerHTML= data.description 
        p2.innerHTML= `Price: $${data.price}`  

         parent.appendChild(z);               
          if (counter2 >= 11){
             z.classList.add('visually-hidden'); 
     }
     } })
     createBtn()
}

//////////////////////////////////// 

const createBtn = () => {
   let btn = document.createElement("BUTTON");   // Create a <button> element
   btn.innerHTML = "Load More";                   // Insert text
   btn.classList.add("load-more-comments");    
   parent.appendChild(btn);

   btn.addEventListener('click', function(){

    [].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, idx){
        if (idx < maxItems) {
            item.classList.remove(hiddenClass);
        }
    });
 
 });
}

const initialCourses = () => {
      parent.innerHTML = '';
      allData.forEach(data => {
          counter += 1;
          if (counter <= 10){
            domCreator(data)                   
      }
   })         
}


///////////////////////////////////////////

const allCourses = () => {
    parent.innerHTML = '';
    let counter2 = 0
    allData.forEach(data => {
        counter2 += 1;
        if (counter2 <= 10){
        domCreator(data)                     
 }})
}


const tax = () => {
    parent.innerHTML = '';
    allData.forEach(data => {
        if (data.type === "tax"){
            domCreator(data)             
 }})
}

const communication = () => {
    parent.innerHTML = '';
    allData.forEach(data => {
        if (data.type === "communication"){
            domCreator(data)
            }
    })
}

const technology = () => {
    parent.innerHTML = '';
    allData.forEach(data => {
        if (data.type === "technology"){
            domCreator(data)                
 }})
}


// Load More Functionality

let parent = document.querySelector('ul'),
//    loadMoreBtn =  document.querySelector('#load-more-comments'),
    loadTaxBtn = document.querySelector('#taxId'),
    loadAllBtn = document.querySelector('#allCourses'),
    loadComBtn = document.querySelector('#communicationId'),
    loadTechBtn = document.querySelector('#technologyId'),

    maxItems = 10,
    hiddenClass = "visually-hidden";

 
/*
loadMoreBtn.addEventListener('click', function(){
   [].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, idx){
       if (idx < maxItems) {
           item.classList.remove(hiddenClass);
       }
   });
});
*/

loadTaxBtn.addEventListener('click', function(){
    tax()
});

loadAllBtn.addEventListener('click', function(){
    allCourses();
    loadMore();
});

loadComBtn.addEventListener('click', function(){
    communication();
});

loadTechBtn.addEventListener('click', function(){
    technology()
});





