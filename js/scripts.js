// SideBar Toggle

var isSidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (!isSidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        isSidebarOpen = true;
    }
}

function closeSidebar() {
    if (isSidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        isSidebarOpen = false;
    }
}
