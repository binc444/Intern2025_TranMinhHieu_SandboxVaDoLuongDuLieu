# <span style="color:#6a5acd">Website Sandbox & User Behavior Tracking System</span>

- Họ và tên: **Trần Minh Hiếu**  
- MSSV: **64130678**  
- Trường: **Đại học Nha Trang**  
- Lớp: **64.CNTT.CLC**  

---

> Dự án thực tập triển khai website sandbox và hệ thống đo lường hành vi người dùng bằng Google Tag Manager, Google Analytics 4 và Looker Studio.

---

## <span style="color:#444">1. Tổng quan dự án</span>

Dự án được thực hiện trong khuôn khổ **Thực tập Doanh nghiệp 2**, tập trung vào việc xây dựng một **website sandbox** làm môi trường thử nghiệm cho hoạt động đo lường và phân tích hành vi người dùng trên website.

Thay vì triển khai trực tiếp trên website thật, website sandbox được xây dựng độc lập nhằm:

- đảm bảo an toàn dữ liệu,  
- thuận tiện cho việc kiểm thử tracking,  
- mô phỏng sát hành vi người dùng trong môi trường thực tế.

Toàn bộ dữ liệu hành vi được thu thập thông qua **Google Tag Manager (GTM)**, gửi về **Google Analytics 4 (GA4)** và trực quan hóa bằng **Looker Studio**.

---

## <span style="color:#444">2. Tên đề tài</span>

**Xây dựng website sandbox và hệ thống tracking hành vi người dùng**

---

## <span style="color:#444">3. Mục tiêu thực hiện</span>

- Xây dựng website sandbox mô phỏng cấu trúc website thực tế  
- Triển khai hệ thống tracking theo mô hình event-based của GA4  
- Thu thập và kiểm thử dữ liệu hành vi người dùng  
- Xây dựng dashboard báo cáo phục vụ phân tích và đánh giá hành vi  

---

## <span style="color:#444">4. Chức năng chính của hệ thống</span>

Website sandbox hỗ trợ các chức năng:

- Hiển thị nội dung giới thiệu, tin tức – sự kiện, tuyển dụng  
- Ghi nhận các hành vi người dùng như:
  - xem trang (page_view)  
  - click menu, click bài viết  
  - tương tác CTA (Call To Action)  
  - cuộn trang, đọc nội dung  
- Gửi dữ liệu hành vi sang GA4 thông qua GTM  
- Trực quan hóa dữ liệu bằng dashboard Looker Studio  

---

## <span style="color:#444">5. Hình ảnh minh họa</span>

### <span style="color:#666">Giao diện Website Sandbox</span>

#### Trang chủ
<br/>
<img style="width:auto;height:auto" alt="Trang chủ" src="https://github.com/user-attachments/assets/2e0ea290-e88b-48c4-b177-500d9e5acb74" />
<br/><br/>

#### Trang đội ngũ sáng lập
<br/>
<img style="width:auto;height:auto" alt="Đội ngũ sáng lập" src="https://github.com/user-attachments/assets/1f312750-3490-4946-a05e-a045071ebde5" />
<br/><br/>

#### Trang tuyển dụng
<br/>
<img style="width:auto;height:auto" alt="Tuyển dụng" src="https://github.com/user-attachments/assets/308ec26b-fd41-4dd2-83b6-d73e4668ceb1" />
<br/><br/>

#### Trang tin tức
<br/>
<img style="width:auto;height:auto" alt="Tin tức" src="https://github.com/user-attachments/assets/dcf0d623-e655-44bb-bbdc-4d840d7b642b" />
<br/>

### <span style="color:#666">Dashboard phân tích dữ liệu</span>

#### Báo cáo tổng quan
<br/>
<img style="width:auto;height:auto" alt="Dashboard tổng quan" src="https://github.com/user-attachments/assets/6574a515-5bad-480a-bcaf-ac1dc611bfea" />
<br/><br/>

#### Báo cáo cụ thể các hành vi của người dùng
<br/>
<img style="width:auto;height:auto" alt="Dashboard hành vi" src="https://github.com/user-attachments/assets/88fe75eb-0b0b-4bc6-8b6e-9741231cf6e4" />
<br/>

---

## <span style="color:#444">6. Hướng dẫn chạy source code</span>

### Bước 1: Clone repository
```bash
git clone https://github.com/binc444/Intern2025_TranMinhHieu_SandboxVaDoLuongDuLieu.git
```

### Bước 2: Mở project
- Mở thư mục project bằng **Visual Studio Code**  
- Website được xây dựng theo mô hình **website tĩnh**, không cần backend  

### Bước 3: Chạy website
- Mở trực tiếp file `index.html` bằng trình duyệt  
hoặc  
- Deploy lên hosting tĩnh (khuyến nghị **Netlify**) để:
  - có URL public  
  - GTM và GA4 hoạt động đầy đủ  

---

## <span style="color:#444">7. Công nghệ sử dụng</span>

- HTML  
- CSS  
- JavaScript  
- Google Tag Manager (GTM)  
- Google Analytics 4 (GA4)  
- Looker Studio  

---

## <span style="color:#444">8. Công cụ hỗ trợ</span>

- Visual Studio Code  
- Netlify  
- GTM Preview  
- GA4 DebugView & Realtime  
- Looker Studio  

---

## <span style="color:#444">9. Link demo</span>

- Website Sandbox:  
  https://letscodesandbox.netlify.app/

- Dashboard Looker Studio:  
  https://lookerstudio.google.com/reporting/619d2626-5bbc-4845-9b50-eedcb6112c7e

---

## <span style="color:#444">11. Ghi chú</span>

Dự án mang tính sandbox và học thuật, được xây dựng nhằm mô phỏng quy trình triển khai hệ thống Web Analytics trong môi trường doanh nghiệp thực tế, phục vụ mục đích học tập và nghiên cứu.
