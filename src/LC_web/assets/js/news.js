// news-list.js
fetch("data/news.json")
  .then(res => {
    if (!res.ok) throw new Error("Fetch failed: " + res.status);
    return res.json();
  })
  .then(data => {
    renderAllPosts(data);
    renderNewPosts(data);
  })
  .catch(err => {
    console.error("JSON ERROR:", err);
    document.getElementById("newsList").innerHTML = "<p>Không thể tải dữ liệu.</p>";
  });

/* --- LEFT: TẤT CẢ BÀI VIẾT --- */
function renderAllPosts(list) {
  const container = document.getElementById("newsList");
  container.innerHTML = "";

  // đảm bảo list là mảng
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
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "news_click",
        news_title: post.title,
        news_slug: post.slug
      });

      window.location.href = `news-detail.html?slug=${encodeURIComponent(post.slug)}`;
    };

    container.appendChild(item);
  });
}

/* --- RIGHT: BÀI VIẾT MỚI --- */
function renderNewPosts(list) {
  const container = document.getElementById("newPosts");
  container.innerHTML = "";

  if (!Array.isArray(list)) return;

  // lấy 5 bài mới nhất theo created_at (nếu có), fallback theo thứ tự file
  const newest = list.slice().sort((a, b) => {
    const da = a.created_at ? new Date(a.created_at) : 0;
    const db = b.created_at ? new Date(b.created_at) : 0;
    return db - da;
  }).slice(0, 5);

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
