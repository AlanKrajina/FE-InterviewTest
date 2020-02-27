// document.body.onload = getData();

window.onload = function() {
    getData()
  };

// let show = document.querySelector("ul");

let counter = 0

 let allData = [] 

const getData = () => {
    fetch(`https://learn.accountingcpd.net/ACPD/API/Test/SampleObject`)
      .then(res => res.json())
      .then(response => {
            response.forEach(data => {
                counter += 1;
               let z = document.createElement('li');
                z.classList.add('item'); 
                z.innerHTML= data.title
                parent.appendChild(z);               
                 if (counter >= 11){
                    z.classList.add('visually-hidden'); 
            }
//            allData.push(data);
         })
//         console.log(allData)
      })    
}



// Load More Functionality

let parent = document.querySelector('ul'),
    items  = parent.querySelectorAll('p'),
    loadMoreBtn =  document.querySelector('#load-more-comments'),
    maxItems = 10,
    hiddenClass = "visually-hidden";

loadMoreBtn.addEventListener('click', function(){

  [].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, idx){
      if (idx < maxItems) {
          item.classList.remove(hiddenClass);
      }

      if ( document.querySelectorAll('.' + hiddenClass).length === 0) {
          loadMoreBtn.textContent = 'none';
      }

  });

});












