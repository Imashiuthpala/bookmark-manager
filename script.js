// script.js

function addBookmark() {
    const bookmarkInput = document.getElementById('bookmarkInput');
    const categoryInput = document.getElementById('categoryInput');
    const bookmarkList = document.getElementById('bookmarkList');

    const url = bookmarkInput.value.trim();
    const category = categoryInput.value.trim();

    if (!url) {
        alert("Please enter a bookmark URL.");
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'bookmark-item';

    const link = document.createElement('a');
    link.href = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    link.textContent = url;
    link.target = "_blank";

    const badge = document.createElement('span');
    badge.className = 'category-badge';
    badge.textContent = category || "General";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => {
        bookmarkList.removeChild(listItem);
    };

    listItem.appendChild(link);
    listItem.appendChild(badge);
    listItem.appendChild(deleteBtn);

    bookmarkList.appendChild(listItem);

    // Clear inputs
    bookmarkInput.value = '';
    categoryInput.value = '';
}
