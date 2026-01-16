"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (!data.success) {
      setError(data.message);
      return;
    }
    if (data.role !== "admin") {
      setError("只有管理员可以登录");
      return;
    }
    router.push("/admin/dashboard");
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", padding: 24, border: "1px solid #ccc" }}>
      <h2>管理员登录</h2>
      <input type="text" placeholder="用户名" value={username} onChange={e => setUsername(e.target.value)} style={{ width: "100%", marginBottom: 12 }} />
      <input type="password" placeholder="密码" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", marginBottom: 12 }} />
      <button onClick={handleLogin} style={{ width: "100%", padding: 8 }}>登录</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
