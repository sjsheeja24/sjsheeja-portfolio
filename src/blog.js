import './App.css';

function Blog() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">SJ Sheeja</div>
        <ul className="menu">
          <li className="menu-item"><button>Home</button></li>
          <li className="menu-item"><button>Education</button></li>
          <li className="menu-item"><button>Skill</button></li>
          <li className="menu-item"><button>Contact</button></li>
        </ul>
      </nav>
      
      <div className="background">
        <div className="header">
          <h5>Hey, I'M</h5>
          <h1>SJ SHEEJA</h1>
          <p>A frontend-focused Web Developer building the frontend of<br/> Websites & Web Applications that lead to the success of overall projects.</p>
          {/* Add image source here if needed */}
          <img src="your-image-url-here" alt="Profile" />
        </div>

        <div className="body">
          <h1>Education</h1>
          <h2>Bachelor of Engineering in Computer Science and Engineering</h2>
          <h2>📍 ACET College (2022-2026)</h2>
          <h2>📚 Relevant Coursework: Web Development</h2>
        </div>

        <div className="myskill">
          <h2>🔹 Technical Skills:</h2>
          <ul>
            <li>Programming Languages: Python, Java</li>
            <li>Web Technologies: HTML, CSS</li>
            <li>Database Management: MySQL</li>
            <li>Tools & Platforms: VS Code</li>
          </ul>

          <h2>🔹 Soft Skills:</h2>
          <ul>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>
      
      <footer style={{ background: "#333", color: "#fff", textAlign: "center", padding: "10px 0", position: "fixed", bottom: "0", width: "100%" }}>
        <p>© 2025 Your Company Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Blog;
