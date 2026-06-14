const form = document.getElementById("profileForm");
const likeBtn = document.getElementById("likeBtn");
const output = document.getElementById("output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // AJAX POST using fetch
  const res = await fetch("/profile/5", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  output.innerHTML = `<pre>${JSON.stringify(json, null, 2)}</pre>`;
});

likeBtn.addEventListener("click", async () => {
  const res = await fetch("/like/101", { method: "POST" });
  const json = await res.json();
  output.innerHTML = `<pre>${JSON.stringify(json, null, 2)}</pre>`;
});