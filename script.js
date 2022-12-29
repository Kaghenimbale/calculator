const btns=document.querySelectorAll('button')
btns.forEach((item)=>{
    // console.log(typeof item.textContent);
    item.addEventListener('click', (e)=>{

        console.log(e.target.textContent)
        
    })
})