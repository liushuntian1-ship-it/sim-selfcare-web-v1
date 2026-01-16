export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">用户登录</h2>

      <input
        type="text"
        placeholder="手机号 / 邮箱"
        className="w-full border p-2 mb-3 rounded"
      />

      <input
        type="password"
        placeholder="密码"
        className="w-full border p-2 mb-4 rounded"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded">
        登录
      </button>
    </div>
  );
}
