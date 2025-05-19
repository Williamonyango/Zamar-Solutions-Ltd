import { createStore } from "zustand/vanilla";

const DynamicContentStore = createStore((set, _get) => ({
  categories: new Map(),
  values: new Map(),
  clients: new Map(),
  projects: new Map(),
  showcase: new Map(),
  subs: new Map(),
  texts: new Map().set("landing_title", "Building Brands"),
  services: new Map(),
  testimonials: new Map(),
  leaders: new Map(),

  fill(field, data) {
    const map = new Map(data.map((d) => [d.id, d]));
    set((prev) => ({ ...prev, [field]: map }));
  },
}));

export default DynamicContentStore;
