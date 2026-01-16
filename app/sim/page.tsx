import { sims } from "../lib/mockData";

export default function SimPage() {
  const sim = sims[0];

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">我的 SIM 卡</h1>

      <div className="bg-white rounded-xl shadow p-4 mb-4">
        <p><b>号码：</b>{sim.msisdn}</p>
        <p><b>套餐：</b>{sim.plan}</p>
        <p><b>剩余流量：</b>{sim.remaining}</p>
        <p><b>状态：</b>{sim.status}</p>
      </div>

      <button className="w-full bg-green-600 text-white py-2 rounded mb-2">
        充值流量
      </button>

      <button className="w-full bg-gray-300 py-2 rounded">
        套餐变更
      </button>
    </main>
  );
}
