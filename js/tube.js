const getHeader = document.getElementById('header-section')
const navSection = document.createElement('div');
navSection.innerHTML = `
 <div class="navbar bg-white ">
 <div class="navbar-start gap-x-3 pl-4">
     <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"
         class=" bg-red-600"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
         <path
             d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
     </svg> 
     <h2 class="text-3xl font-semibold text-black"><span class="text-[#FF1F3D] ">PH</span> TUBE</h2>

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