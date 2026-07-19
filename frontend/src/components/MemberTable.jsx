// src/components/MembersTable.jsx

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function MembersTable({ members }) {
  if (!members || members.length === 0) {
    return <p className="text-sm text-graphite-700/70 mt-4">No members found.</p>;
  }

  return (
    <div className="bg-white border border-graphite-200 rounded-xl overflow-hidden mt-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-graphite-200 text-left">
            <th className="px-5 py-3 font-medium text-graphite-700/70">Member</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Role</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-b border-graphite-200 last:border-b-0">
              <td className="px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-semibold shrink-0">
                    {initials(member.name)}
                  </div>
                  <span className="text-graphite-900 font-medium">{member.name}</span>
                </div>
              </td>
              <td className="px-5 py-3 text-graphite-700">{member.role}</td>
              <td className="px-5 py-3 text-graphite-700/70 font-mono text-xs">{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}