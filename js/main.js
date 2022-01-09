let panels = document.querySelectorAll('.panel');
panels.forEach((panel) =>{
    panel.onclick = function(){
        removeActive();
        // To Add Class or Remove when i click on the panel
        panel.classList.toggle('active');
        // Song Work On Click
        Song.play();
    }
})
// Function to remove active class from other panels to make the only clicked class is active
function removeActive(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}
// Work Song on Click on panel
let Song=document.getElementById('AdelShaklo');