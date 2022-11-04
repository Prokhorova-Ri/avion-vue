import { createRouter, createWebHistory } from "vue-router";
import VIndex from "@/Views/VIndex.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: VIndex,
    },
  ],
});

export default router;
