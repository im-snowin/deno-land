const btnGetActivity = document.querySelector("#btnGetActivity");
const activityPlaceholder = document.querySelector("#activityPlaceholder");

btnGetActivity.addEventListener("click", async () => {
  btnGetActivity.classList.add("is-loading");
  const res = await fetch("/api/activity");
  const jsonResponse = await res.json();
  btnGetActivity.classList.remove("is-loading");

  activityPlaceholder.textContent = jsonResponse.data;
});
