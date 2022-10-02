import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";

const getActivity = async (ctx: Context) => {
  const data = await fetch(
    "https://www.boredapi.com/api/activity?participants=1"
  );
  const jsonResponse = await data.json();
  console.log();

  ctx.response.body = { data: jsonResponse.activity };
  ctx.response.headers.set('Content-Type', 'application/json')
};

export default getActivity;
