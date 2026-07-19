// src/components/UsersTable.jsx
import { ROLE, USER_STATUS } from "@/lib/mockData";

const ROLE_CONFIG = {
  [ROLE.ADMIN]: { label: "Admin", badgeClass: "bg-indigo-100 text-indigo-600" },
  [ROLE.MANAGER]: { label: "Manager", badgeClass: "bg-warning/10 text-warning" },
  [ROLE.MEMBER]: { label: "Member", badgeClass: "bg-graphite-200 text-graphite-700" },
};

const STATUS_CONFIG = {
  [USER_STATUS.ACTIVE]: { label: "Active", badgeClass: "bg-success/10 text-success" },
  [USER_STATUS.INVITED]: { label: "Invited", badgeClass: "bg-graphite-200 text-graphite-700" },
};

function initials(name) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

export default function UsersTable({ users }) {
  return (
    <div className="bg-white border border-graphite-200 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-graphite-200 text-left">
            <th className="px-5 py-3 font-medium text-graphite-700/70">User</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Email</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Role</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Status</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Last Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const role = ROLE_CONFIG[user.role];
            const status = STATUS_CONFIG[user.status];

            return (
              <tr key={user.id} className="border-b border-graphite-200 last:border-b-0">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-semibold shrink-0">
                      {initials(user.name)}
                    </div>
                    <span className="text-graphite-900 font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-graphite-700/70 font-mono text-xs">{user.email}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${role.badgeClass}`}>
                    {role.label}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${status.badgeClass}`}>
                    {status.label}
                  </span>
                </td>
                <td className="px-5 py-3 text-graphite-700/70 font-mono text-xs">{user.lastActive}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}