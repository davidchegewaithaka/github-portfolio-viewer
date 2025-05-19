import { useEffect, useState } from "react";

const GITHUB_USERNAME = "davidchegewaithaka"; // ✅ Replace with your GitHub username

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">
            @{GITHUB_USERNAME}
          </h1>
          <p className="text-gray-400 text-lg">My GitHub Portfolio</p>
        </header>

        {repos.length === 0 ? (
          <p className="text-center text-gray-400">Loading repositories...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-cyan-500/30 transition"
              >
                <h2 className="text-xl font-semibold text-white mb-2 truncate">
                  {repo.name}
                </h2>
                <p className="text-gray-400 text-sm mb-4 h-[60px] overflow-hidden">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>★ {repo.stargazers_count}</span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline font-medium"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
