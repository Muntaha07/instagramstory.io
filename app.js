var arr = [
    {
        dp:"https://images.unsplash.com/photo-1577919518833-57dc0a0105e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1890&q=80",story:"https://images.unsplash.com/photo-1554255654-b9801ab54bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGlzbGFtaWMlMjBncmlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1577375688665-ce3600b36b64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJveSUyMHBvc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1513266913343-a1bfd2ffd806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJveSUyMHBvc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1531311243148-d2653fa84700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGJveSUyMHBvc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1556807166-18a5c02aa7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGJveSUyMHBvc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1552774021-9ebbb764f03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlzbGFtaWMlMjBncmlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1552061902-146c1b6a3e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGlzbGFtaWMlMjBncmlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1545266241-3516e2a6e016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGlzbGFtaWMlMjBncmlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1549555989-eb134d5d0c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGlzbGFtaWMlMjBncmlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1584339312444-6952d098e152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGlzbGFtaWMlMjBncmlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1554255654-b9801ab54bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGlzbGFtaWMlMjBncmlsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
]

var story =document.querySelector(".box")

var clutter= ""
arr.forEach(function (elem,idx) {

            clutter +=`<div class="cricle">
            <img id ="${idx}" src="${elem.dp}" alt="" srcset="">
        </div>`
            
});
 
story.innerHTML =clutter;
story.addEventListener("click",function (dets) {
    document.querySelector("#full-screen").style.display = "block";
    
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    
    setTimeout(function(){
       document.querySelector("#full-screen").style.display = "none";
    
   },3000);
})



var fill =document.querySelector(".ri-heart-line")
var con = document.querySelector('#box-1')
var love = document.querySelector('i')

con.addEventListener("dblclick",function () {
    love.style.transform = 'translate(50%, -50%) scale(1)';
    love.style.opacity =0.8
    fill.style.color = "red"
    
    
    con.addEventListener("click",function () {
     fill.style.color = "black"

   
    
 })
    
    
    setTimeout( function () {
        love.style.transform = 'translate(50%, -50%) scale(0)';
        
    }, 2000);
    setTimeout( function () {
        love.style.opacity = 0;
        
    }, 1000);


})

