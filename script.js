// script.js
document.getElementById('announcementForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var title = document.getElementById('announcementTitle').value;
    var content = document.getElementById('announcementContent').value;
    
    // Create announcement element
    var announcement = document.createElement('div');
    announcement.classList.add('announcement');
    announcement.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;
    
    // Add announcement to the page
    document.getElementById('announcements').appendChild(announcement);
    
    // Clear form fields
    document.getElementById('announcementTitle').value = '';
    document.getElementById('announcementContent').value = '';
});
