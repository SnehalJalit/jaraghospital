function filterItems() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const items = document.querySelectorAll("#itemList li");
  
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }
  