/* ================================================= */
        /* NAV MOBILE
        /* ================================================= */
        // 1. Chọn các phần tử cần thiết
        const header = document.querySelector('.header');
        const mobileBtn = document.querySelector('.mobile-btn');
        const nav = document.querySelector('.nav');

        // 2. Định nghĩa hàm xử lý đóng/mở menu
        function toggleMobileMenu() {
            header.classList.toggle('menu-open');
        }

        // 3. Lắng nghe sự kiện click trên nút mobile
        if (mobileBtn) {
            mobileBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                toggleMobileMenu();
            });
        }

        // 4. Lắng nghe sự kiện click trên toàn bộ tài liệu (Document)
        document.addEventListener('click', function (event) {
            if (header.classList.contains('menu-open')) {
                const isClickInsideNav = nav.contains(event.target);
                const isClickOnButton = mobileBtn.contains(event.target);

                if (!isClickInsideNav && !isClickOnButton) {
                    header.classList.remove('menu-open');
                }
            }
        });

        // 5. Ngăn click bên trong menu làm đóng menu
        if (nav) {
            nav.addEventListener('click', function (event) {
                event.stopPropagation();
            });
        }