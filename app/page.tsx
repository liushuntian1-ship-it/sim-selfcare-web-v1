export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        SIM 卡自助管理平台
      </h1>

      <div className="space-y-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          SIM 卡列表
        </button>

        <button className="px-4 py-2 bg-green-600 text-white rounded">
          充值 / 套餐管理
        </button>

        <button className="px-4 py-2 bg-purple-600 text-white rounded">
          使用记录查询
        </button>

        <button className="px-4 py-2 bg-gray-700 text-white rounded">
          账号设置
        </button>
      </div>
    </main>
  );
}
