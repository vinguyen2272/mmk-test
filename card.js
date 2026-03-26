const cards = [
  {
    label: "LUXYRY STYLE",
    img: "asset/news1.jpg",
    title: "PHONG CÁCH  CEO TÀI CHÍNH",
    desc: "Nâng Cấp Mercedes GLS 450 lên đời GSL 600 MAYBACH đang là sự lựa chọn thông minh của Chủ Xế, khi vừa được sở hữu không gian tiện ích như một chiếc GLS 600 Maybach nguyên bản mà lại vừa tiết kiệm được rất nhiều chi phí."
  },
  {
    label: "LADY STYLE",
    img: "asset/news2.jpg",
    title: "HUYỀN BÍ HẮC SẮC NỮ TỔNG TÀI",
    desc: "Mercedes Benz V250 phiên bản full black ( Hiệp Sĩ Bóng Đêm ) cùng khoang nội thất siêu Vip được Custom riêng cho Nữ Dj Ngân 98 và Ca Sĩ Lương Bằng Quang."
  },
  {
    label: "SPORT STYLE",
    img: "asset/new3.jpg",
    title: "VIOS BIẾN HÌNH SPORT ĐĂNG CẤP",
    desc: "Toyota Vios Sport Package là gói tinh chỉnh về thiết kế chứ không phải là gói độ hiệu suất TRD nên không tăng thêm sức mạnh cho động cơ."
  },
  {
    label: "OFFROAD STYLE",
    img: "asset/new4.jpg",
    title: "FORD EVEREST - ĐẠP BẰNG SÔNG NÚI",
    desc: `Chủ nhân chiếc SUV này dường như đã chi khá nhiều tiền và không muốn thấy bất cứ sự "đụng hàng" nào. Do vậy, sẽ chỉ có duy nhất một chiếc Idumban được ra lò.`
  },
  {
    label: "SÀN LIMOUSINE",
    img: "asset/product1.jpg",
    title: "SÀN CARBON FIBER FORET MMK"
  },
  {
    label: "GHẾ LIMOUSINE",
    img: "asset/product2.jpg",
    title: "GHẾ LIMOUSINE NGÃ THÀNH SOFA"
  },
  {
    label: "GHẾ LIMOUSINE",
    img: "asset/product3.jpg",
    title: "GHẾ LIMOUSINE HÀNG 3"
  },
  {
    label: "GHẾ LIMOUSINE",
    img: "asset/product4.jpg",
    title: "GHẾ ĐỘC QUYỀN MIKA THẾ HỆ 3.0"
  },
  {
    label: "GHẾ LIMOUSINE",
    img: "asset/product5.jpg",
    title: "GHẾ LIMOUSINE TOYOTA ALPHARD"
  },
  {
    label: "GHẾ LIMOUSINE",
    img: "asset/product6.jpg",
    title: "GHẾ MIKA 6.0 KIA CARNIVAL HÀNG 2"
  },
  {
    label: "GHẾ LIMOUSINE",
    img: "asset/product7.jpg",
    title: "GHẾ MIKA 6.0 KIA CARNIVAL HÀNG 2"
  },
  {
    label: "GHẾ LIMOUSINE",
    img: "asset/product8.jpg",
    title: "GHẾ ĐIỆN CHUYÊN DỤNG CARNIVAL"
  },
];

function renderCards(container, data, start = 0, end = data.length) {
  container.innerHTML = ""; 

  for (let i = start; i < end && i < data.length; i++) {
    const {label, img, title, desc} = data[i];
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-image">
        <img src="${img}" alt="${title}" />
        <div class="card-label">${label}</div>
      </div>
      <div class="card-content">
        <h3>${title}</h3>
        ${desc ? `<p>${desc}</p>` : ''}
        <a href="#" class="card-link">› Khám phá thiết kế</a>
      </div>
    `;
    container.appendChild(card);
  }
}
const newsContainer = document.getElementById("card-container");
renderCards(newsContainer, cards, 0, 4); 

const newsproduct= document.getElementById("card-product");
renderCards(newsproduct, cards, 4, 12); 


function openTab(index) {
  const tabs = document.querySelectorAll('.product__tab');
  const contents = document.querySelectorAll('.product__content');

  // Xóa active cũ
  tabs.forEach(tab => tab.classList.remove('product__tab--active'));
  contents.forEach(content => content.classList.remove('product__content--active'));

  // Thêm active cho tab và nội dung tương ứng
  tabs[index].classList.add('product__tab--active');
  contents[index].classList.add('product__content--active');
}


const items = document.querySelectorAll('.faq__item');

items.forEach(item => {
  const btn = item.querySelector('.faq__question');

  btn.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});


const accordions = document.querySelectorAll(".footer__accordion");

accordions.forEach(btn => {
  btn.addEventListener("click", () => {

    if (window.innerWidth <= 768) {

      const isActive = btn.classList.contains("active");

      // đóng tất cả
      document.querySelectorAll(".footer__accordion").forEach(a => a.classList.remove("active"));
      document.querySelectorAll(".footer__content").forEach(c => c.classList.remove("open"));

      // nếu chưa mở thì mở
      if (!isActive) {
        btn.classList.add("active");
        btn.nextElementSibling.classList.add("open");
      }
    }

  });
});