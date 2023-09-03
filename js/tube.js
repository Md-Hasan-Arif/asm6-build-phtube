const getHeader = document.getElementById('header-section')
const navSection = document.createElement('div');
navSection.innerHTML = `
<div class="navbar bg-white  border-b-2 ">
<div class="navbar-start gap-x-3 pl-4">
   <img src="Logo.png" alt="">
</div>
<div class="navbar-center">

    <button class=" bg-slate-400 normal-case text-xl text-black p-2 font-medium">Short By view</button>
</div>
<div class="navbar-end pr-4">
    <button class="btn bg-[#FF1F3D] border-none text-white">Blog</button>

</div>

</div>
 `
getHeader.appendChild(navSection)

const categoryHandler =async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();
    // console.log(data.data)

    const btnCardContainer = document.getElementById('btn-container') 
    data.data.forEach((category) => {
        const div = document.createElement('div');
        
        div.innerHTML =`
        <button class="btn" onclick="handleLoadNews('${category.category_id}')">${category.category}</button>
        `
        btnCardContainer.appendChild(div)
    });
}

const handleLoadNews = async(categoryId)=>{
    
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();
    console.log(data.data)
    displayData(data.data)
      
}

const displayData = (takeData) => {
    // console.log(takeData)
    videoContainer = document.getElementById('card-section');
    videoContainer.classList="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    
    videoContainer.innerHTML= ''
    if(takeData.length=== 0){
        const errorSection = document.getElementById('error-section');
        errorSection.innerHTML =''
        const showingError = document.createElement('div')
        showingError.classList=" flex justify-center mt-12"
        showingError.innerHTML = `
        
       <div> <img src="./icon.png" alt="" >
       <p>Oops!! Sorry, There is no content here</p></div>
        
        `
        errorSection.appendChild(showingError)
    }
    else{
        takeData.forEach(element => {
        
            const div = document.createElement('div')
            div.classList = "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center"
    
            div.innerHTML = `
                <div class="card  w-52 bg-base-100 ">
                <figure><img src="${element.thumbnail}" class="h-30"  alt="" /></figure>
                <div class=" ">
                 <div class="flex w-full">
                      <div>
                         <img class="rounded-full w-10 " src="${element.authors[0].profile_picture}">
                      </div>
                      <div class="">
                        <h2 class="card-title">${element.title}</h2>
                        <p>${element.authors[0].profile_name}</p>
                          <span>${element.authors[0].verified}</span>
                        <p>${element.others.views}</p>
                      </div>
                    </div>
                 </div>
              </div>
                `
            videoContainer.appendChild(div)
        });
    }
    }
categoryHandler()
handleLoadNews(1000)