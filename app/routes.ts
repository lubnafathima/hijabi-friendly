import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("salons", "routes/salons.tsx"),
  route("salons/:id", "routes/salons.$id.tsx"),
  route("add-listing", "routes/add-listing.tsx"),
  route("guidelines", "routes/guidelines.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
