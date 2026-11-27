# Osakafe · Menu (iPad)

Website menu tĩnh (HTML + CSS + JS thuần), không cần build, không cần server riêng.

## Cấu trúc
- `index.html` – khung trang
- `style.css` – giao diện (bảng màu, font, bố cục iPad ngang/dọc)
- `app.js` – dữ liệu menu (20 món) và logic chuyển tab
- `images/` – ảnh món, đặt tên theo số món: `1.jpg` … `20.jpg`
- `fonts/` – font nhúng sẵn (Plus Jakarta Sans, Cormorant Garamond, Montserrat, Waiting for the Sunrise)
- `logo.png` – logo Osakafe

## Deploy (chọn 1 cách)
- **Netlify**: vào app.netlify.com/drop, kéo thả cả thư mục này vào.
- **Cloudflare Pages**: Create project > Upload assets > kéo thả thư mục.
- **Vercel**: `npx vercel --prod` trong thư mục này (Framework: Other, không cần build).
- **GitHub Pages**: đẩy thư mục lên repo, Settings > Pages > chọn branch `main`, thư mục `/ (root)`.
- **Firebase Hosting**: `firebase init hosting` (public = thư mục này), rồi `firebase deploy`.

## Chỉnh sửa
- Đổi ảnh: thay file trong `images/` (giữ nguyên tên số, tỉ lệ dọc 2:3 là đẹp nhất).
- Đổi tên món / thêm bớt món: sửa mảng `CATS` ở đầu `app.js`. Nếu thêm món mới thì thêm ảnh tương ứng vào `images/` và khai báo trong object `IMG`.
- Đổi màu: sửa các biến `--cream`, `--sand`, `--clay`, `--wood`, `--ink`, `--sun` ở đầu `style.css`.

## Dùng trên iPad
Mở link bằng Safari > nút Chia sẻ > **Thêm vào Màn hình chính** để chạy toàn màn hình như app.
