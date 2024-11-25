import { PluginOption } from "vite";
import getEntries from "./shared";

export default function musicEntryGeneator(): PluginOption {
  const virtualModuleId = "virtual:test-string";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "test-plugin-as-string",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const entries = getEntries(this);
        return `export default '${JSON.stringify(entries)}'`;
      }
    },
  };
}
