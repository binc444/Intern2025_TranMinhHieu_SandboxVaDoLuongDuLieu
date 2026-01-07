/* --- LEFT: TẤT CẢ BÀI VIẾT (recruit.json) --- */
fetch("data/recruit.json")
  .then(res => {
    if (!res.ok) throw new Error("Fetch recruit.json failed: " + res.status);
    return res.json();
  })
  .then(data => {
    renderAllPosts(data); // load vào cột trái
  })
  .catch(err => {
    console.error("JSON ERROR recruit:", err);
    document.getElementById("newsList").innerHTML = "<p>Không thể tải dữ liệu tuyển dụng.</p>";
  });

/* --- RIGHT: BÀI VIẾT MỚI (news.json) --- */
fetch("data/news.json")
  .then(res => {
    if (!res.ok) throw new Error("Fetch news.json failed: " + res.status);
    return res.json();
  })
  .then(data => {
    renderNewPosts(data); // load vào cột phải
  })
  .catch(err => {
    console.error("JSON ERROR news:", err);
    document.getElementById("newPosts").innerHTML = "<p>Không thể tải bài viết mới.</p>";
  });


function renderAllPosts(list) {
  const container = document.getElementById("newsList");
  container.innerHTML = "";

  if (!Array.isArray(list)) return console.error("recruit.json phải trả về mảng");

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
        event: "recruit_job_click",
        job_title: post.title,
        job_slug: post.slug
      });

      window.location.href = `recruit-detail.html?slug=${encodeURIComponent(post.slug)}`;
    };


    container.appendChild(item);
  });
}


/* --- RIGHT: render new posts --- */
function renderNewPosts(list) {
  const container = document.getElementById("newPosts");
  container.innerHTML = "";

  if (!Array.isArray(list)) return;

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
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "news_sidebar_click",
        news_title: post.title,
        news_slug: post.slug
      });

      window.location.href = `news-detail.html?slug=${encodeURIComponent(post.slug)}`;
    };


    container.appendChild(item);
  });
}
