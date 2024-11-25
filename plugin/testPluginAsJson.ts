import { PluginOption } from "vite";
import getEntries from "./shared";

export default function musicEntryGeneator(): PluginOption {
  const virtualModuleId = "virtual:test-json.json";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "test-plugin-as-json",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const entries = getEntries(this);
        return JSON.stringify(entries);
      }
    },
  };
}
