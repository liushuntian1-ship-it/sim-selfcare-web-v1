export default function AdminSimsPage() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">SIM 卡管理</h1>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="border-b">
            <th className="p-2">号码</th>
            <th className="p-2">状态</th>
            <th className="p-2">流量</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-2">090-1234-5678</td>
            <td className="p-2">使用中</td>
            <td className="p-2">5.2GB</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
