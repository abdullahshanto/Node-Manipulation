// index.js
import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Middleware to parse form data and cookies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = 3000;

// ----------------------
// Homepage Route
// ----------------------
app.get("/", (req, res) => {
  console.log("\n=== GET / ===");
  logRequest(req); // Log all properties

  res.send(`
    <h1>Profile Demo</h1>

    <!-- Profile Form -->
    <form method="POST" action="/profile/1">
      <input name="name" placeholder="Name" required />
      <input name="age" placeholder="Age" required />
      <button>Submit Profile</button>
    </form>
    <br><br>

    <!-- Like Button Form -->
    <form method="POST" action="/like/101">
      <button>Like Post #101</button>
    </form>
  `);
});

// ----------------------
// Profile Submission Route
// ----------------------
app.post("/profile/:id", (req, res) => {
  console.log("\n=== POST /profile/:id ===");
  logRequest(req);

  const userId = req.params.id;
  const name = req.body.name;
  const age = req.body.age;

  res.send(`
    <h2>Profile Updated</h2>
    <p>User ID: ${userId}</p>
    <p>Name: ${name}</p>
    <p>Age: ${age}</p>
    <a href="/">Go back</a>
  `);
});

// ----------------------
// Like Post Route
// ----------------------
app.post("/like/:postId", (req, res) => {
  console.log("\n=== POST /like/:postId ===");
  logRequest(req);

  const postId = req.params.postId;

  res.send(`
    <h2>Post Liked!</h2>
    <p>Post ID: ${postId}</p>
    <a href="/">Go back</a>
  `);
});

// ----------------------
// Helper Function: Log All Important req Properties
// ----------------------
function logRequest(req) {
  console.log("req.method:", req.method);
  console.log("req.url:", req.url);
  console.log("req.path:", req.path);
  console.log("req.originalUrl:", req.originalUrl);
  console.log("req.baseUrl:", req.baseUrl);
  console.log("req.params:", req.params);
  console.log("req.query:", req.query);
  console.log("req.body:", req.body);
  console.log("req.headers:", req.headers);
  console.log("req.cookies:", req.cookies);
  console.log("req.ip:", req.ip);
  console.log("req.protocol:", req.protocol);
  console.log("req.hostname:", req.hostname);
  console.log("req.subdomains:", req.subdomains);
  console.log("req.route:", req.route ? req.route.path : "N/A");
  console.log("req.app:", req.app ? "Express App Object" : "N/A");
  console.log("req.fresh:", req.fresh);
  console.log("req.stale:", req.stale);
  console.log("req.secure:", req.secure);
  console.log("req.is('json'):", req.is("json"));
  console.log("req.accepts():", req.accepts());
  console.log("req.xhr:", req.xhr);
}

// ----------------------
// Start Server
// ----------------------
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));