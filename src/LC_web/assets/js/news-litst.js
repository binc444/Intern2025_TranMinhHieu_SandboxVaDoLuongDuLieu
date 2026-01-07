/* -------------------------
      LOAD NEWS.JSON
------------------------- */
let allPosts = [];
let currentPage = 1;
const postsPerPage = 7;

fetch("data/news.json")
  .then(res => {
    if (!res.ok) throw new Error("Fetch failed: " + res.status);
    return res.json();
  })
  .then(data => {
    allPosts = data;
    renderPage(currentPage);
    renderNewPosts(data);
  })
  .catch(err => {
    console.error("JSON ERROR:", err);
    document.getElementById("newsList").innerHTML = "<p>Không thể tải dữ liệu.</p>";
  });


/* -------------------------
   RENDER PAGE (PHÂN TRANG)
-------------------------- */
function renderPage(page) {
  currentPage = page;
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;

  const pagePosts = allPosts.slice(start, end);
  renderAllPosts(pagePosts);
  renderPagination();
}

/* -------------------------
      RENDER PAGINATION
-------------------------- */
function renderPagination() {
  const container = document.getElementById("pagination");
  if (!container) return;

  container.innerHTML = "";

  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  let html = "";

  // Nút Previous
  if (currentPage > 1) {
    html += `<button class="pg-btn" onclick="renderPage(${currentPage - 1})">«</button>`;
  }

  // Số trang
  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button 
        class="pg-btn ${i === currentPage ? "active" : ""}" 
        onclick="renderPage(${i})"
      >
        ${i}
      </button>
    `;
  }

  // Nút Next
  if (currentPage < totalPages) {
    html += `<button class="pg-btn" onclick="renderPage(${currentPage + 1})">»</button>`;
  }

  container.innerHTML = html;
}


/* -------------------------
   LEFT COLUMN: ALL POSTS
-------------------------- */
function renderAllPosts(list) {
  const container = document.getElementById("newsList");
  container.innerHTML = "";

  if (!Array.isArray(list)) return console.error("news.json phải trả về mảng");

  list.forEach(post => {
    const item = document.createElement("div");
    item.className = "news-card";

    item.innerHTML = `
      <div class="news-thumb">
        <img src="${post.thumbnail}" alt="">
      </div>
      <div class="news-content">
        <div class="news-title-main">${post.title}</div>
        <div class="news-title-sub">${post.subtitle || ""}</div>
      </div>
    `;

    item.onclick = () => {
      window.location.href = `news-detail.html?slug=${encodeURIComponent(post.slug)}`;
    };

    container.appendChild(item);
  });
}


/* -------------------------
   RIGHT COLUMN: NEW POSTS
-------------------------- */
function renderNewPosts(list) {
  const container = document.getElementById("newPosts");
  container.innerHTML = "";

  if (!Array.isArray(list)) return;

  const newest = list.slice().sort((a,b) => {
    const da = a.created_at ? new Date(a.created_at) : 0;
    const db = b.created_at ? new Date(b.created_at) : 0;
    return db - da;
  }).slice(0,5);

  newest.forEach(post => {
    const item = document.createElement("div");
    item.className = "newpost-card";

    item.innerHTML = `
      <div class="newpost-thumb">
        <img src="${post.thumbnail}" alt="">
      </div>
      <div class="newpost-title">${post.title}</div>
    `;

    item.onclick = () => {
      window.location.href = `news-detail.html?slug=${encodeURIComponent(post.slug)}`;
    };

    container.appendChild(item);
  });
}
