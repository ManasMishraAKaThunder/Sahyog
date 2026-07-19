// src/components/PermissionMatrix.jsx
import { Check, X } from "lucide-react";
import { ROLE, PERMISSIONS, PERMISSION_MATRIX } from "@/lib/mockData";

const ROLE_LABELS = {
  [ROLE.ADMIN]: "Admin",
  [ROLE.MANAGER]: "Manager",
  [ROLE.MEMBER]: "Member",
};

export default function PermissionMatrix() {
  const roles = [ROLE.ADMIN, ROLE.MANAGER, ROLE.MEMBER];

  return (
    <div className="bg-white border border-graphite-200 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-graphite-200 text-left">
            <th className="px-5 py-3 font-medium text-graphite-700/70">Permission</th>
            {roles.map((role) => (
              <th key={role} className="px-5 py-3 font-medium text-graphite-700/70 text-center">
                {ROLE_LABELS[role]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PERMISSIONS.map((permission) => (
            <tr key={permission} className="border-b border-graphite-200 last:border-b-0">
              <td className="px-5 py-3 text-graphite-900 font-medium">{permission}</td>
              {roles.map((role) => {
                const granted = PERMISSION_MATRIX[role][permission];
                return (
                  <td key={role} className="px-5 py-3 text-center">
                    {granted ? (
                      <Check className="w-4 h-4 text-success inline-block" />
                    ) : (
                      <X className="w-4 h-4 text-graphite-700/30 inline-block" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}