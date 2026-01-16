import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">我的控制台</h2>

      <Link href="/sims" className="block bg-white p-4 rounded shadow">
        我的 SIM 卡
      </Link>

      <div className="bg-white p-4 rounded shadow">
        当前套餐：20GB / 剩余 12GB
      </div>
    </div>
  );
}
