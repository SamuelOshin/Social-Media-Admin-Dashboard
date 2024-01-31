// SideBar Toggle

var openSidebar = false;
var sidebar =  document.getElementById("sidebar");  
function openSidebar(){   
    if (!openSidebar) {
        sidebar.classList.add("sidebar-responsive")
        openSidebar = true;
    }
}

function  closeSidebar() {
    if  (openSidebar){
        sidebar.classList.remove("sidebar-responsive");
        openSidebar = false;
    }           
    }
        
