const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

if (!slug) {
  document.getElementById("postDetail").innerHTML = "<p>Không tìm thấy bài viết.</p>";
} else {
  // Load bài viết tuyển dụng 
  fetch("data/recruit.json")
    .then(res => res.json())
    .then(data => {
      const post = data.find(p => p.slug === slug);

      if (!post) {
        document.getElementById("postDetail").innerHTML = "<p>Không tìm thấy bài viết.</p>";
        return;
      }

      // Render nội dung bài viết
      renderPostDetail(post);

      fetch("data/news.json")
        .then(r => r.json())
        .then(newsList => {
          renderNewPostsSidebar(newsList);
        })
        .catch(err => {
          console.error("Sidebar load error:", err);
        });
    })
    .catch(err => {
      console.error("JSON ERROR:", err);
      document.getElementById("postDetail").innerHTML = "<p>Không thể tải dữ liệu.</p>";
    });
}


/* -----------------------------
    HIỂN THỊ CHI TIẾT BÀI VIẾT
------------------------------ */
function renderPostDetail(post) {
  const main = document.getElementById("postDetail");

  main.innerHTML = `
    <figure class="post-hero">
      <img src="${post.thumbnail}" alt="">
    </figure>

    <h1 class="news-title">${post.title}</h1>
    <h3 class="news-subtitle">${post.subtitle || ""}</h3>

    <!-- Mục lục -->
    <aside class="post-toc" id="postToc"></aside>

    <!-- Nội dung bài viết -->
    <div class="news-content-detail">${post.content || ""}</div>
  `;

  renderTOC(post);
}


/* -----------------------------
       RENDER TABLE OF CONTENT
------------------------------ */
function renderTOC(post) {
  const tocBox = document.getElementById("postToc");

  if (!post.toc || post.toc.length === 0) {
    tocBox.style.display = "none";
    return;
  }

  let html = `
    <div class="toc-header">
        <h4>Mục lục bài viết</h4>
        <button class="toc-toggle-btn" id="tocToggleBtn">
            <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-right-left"></i>
        </button>
    </div>

    <nav class="toc-body" id="tocBody">
  `;

  post.toc.forEach(i => {
    html += `<a href="#${i.id}">${i.title}</a>`;
  });

  html += `</nav>`;

  tocBox.innerHTML = html;

  activateTOCToggle();
}

function activateTOCToggle() {
  const btn = document.getElementById("tocToggleBtn");
  const tocBody = document.getElementById("tocBody");

  btn.addEventListener("click", () => {
    tocBody.classList.toggle("collapsed");
  });
}


/* -----------------------------
      SIDEBAR BÀI VIẾT MỚI
------------------------------ */
function renderNewPostsSidebar(list) {
  const box = document.getElementById("newPosts");
  if (!box) return;

  box.innerHTML = "";

  const sorted = list.slice().sort((a, b) => {
    const da = a.created_at ? new Date(a.created_at) : 0;
    const db = b.created_at ? new Date(b.created_at) : 0;
    return db - da;
  });

  sorted.slice(0, 5).forEach(post => {
    const div = document.createElement("div");
    div.className = "newpost-card";

    div.innerHTML = `
      <div class="newpost-thumb"><img src="${post.thumbnail}" alt=""></div>
      <div class="newpost-title">${post.title}</div>
    `;

    div.addEventListener("click", () => {
      window.location.href = `news-detail.html?slug=${encodeURIComponent(post.slug)}`;
    });

    box.appendChild(div);
  });
}
