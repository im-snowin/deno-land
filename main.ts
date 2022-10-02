import { Application, Router } from "./deps.ts";
import getActivity from "./activity.ts";
import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";

const env = Deno.env.toObject();
const PORT: number = parseInt(env.PORT) || 3000;

const app = new Application();
const router = new Router();

// Static content
router.get("/static/:path+", async (ctx) => {
  await ctx.send({
    root: Deno.cwd(),
  });
});

router
  .get("/", async (ctx: Context) => {
    await ctx.send({
      root: `${Deno.cwd()}/views`,
      index: "index.html",
    });
  })
  .get("/api/activity", getActivity);

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port http://localhost:${PORT}`);
app.listen({ port: PORT });
