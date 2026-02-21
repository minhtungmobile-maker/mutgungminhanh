import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", quantity: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(Đặt hàng thành công!\nTên: ${formData.name}\nEmail: ${formData.email}\nSố lượng: ${formData.quantity});
  };

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Mứt Gừng Minh Anh</h1>
      <p>Landing page chuẩn HSTAI 777 đã sẵn sàng!</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Đặt hàng ngay</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
          <label>Tên:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Số lượng:</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
          <button type="submit" style={{ marginTop: "1rem" }}>Đặt hàng</button>
        </form>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2>Chatbot hỗ trợ khách hàng</h2>
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", maxWidth: "400px" }}>
          <p><strong>Bot:</strong> Xin chào! Tôi có thể giúp gì cho bạn hôm nay?</p>
          <p><em>(Placeholder chatbot — sẽ tích hợp AI sau)</em></p>
        </div>
      </section>
    </main>
  );
}
