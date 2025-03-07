import './App.css';


function Blog() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">SJ sheeja</div>
        <ul className="menu">
          <button>

          <li className="menu-item">Home</li>
          </button>
          <button>
            <li className="menu-time">Education</li>
          </button>
          <button>
            <li className="menu-time">Skill</li>
          </button>
          <button>
          <li className="menu-item">Contact</li>
          </button>
        </ul>
      </nav>
      <div class="background">

      <div>
      <nav className="header">
        
        <h5>Hey I'M</h5>
        <h1>SJ SHEEJA</h1>
        <p>A frontend focused Web Developer buliding the frontend of<br/> Websites & Web Appliations that leads to the success of the overall projects</p>
        <img></img>
      </nav>
      </div>
      <div>
        <nav className="body">
          <h1>Education</h1>
          <h2>Bachelor of Engineering in Computer Science and Engineering</h2>
          <h2>📍 ACET college(2022-2026)</h2>
          <h2>📚 Relevant coursework:Web Development</h2>
        </nav>
      </div>
      <nav className="myskill">
        <div>

          <h1>Skills</h1>
          <h2>🔹 Technical Skills:</h2>
          <li>Programming Languages: Python, Java</li>
          <li>Web Technologies: HTML, CSS</li>
          <li>Database Management: MySQL</li>
          <li>Tools & Platforms: VS Code</li>
          <h2>🔹 Soft Skills:</h2>
          <li>Teamwork</li>
        </div>
      </nav>
    </div>
    <div>
    <footer style={{ background: "#333", color: "#fff", textAlign: "center", padding: "10px 0", position: "fixed", bottom: "0", width: "100%" }}>
      <p>© 2025 Your Company Name. All Rights Reserved.</p>
    </footer>
    </div>
    </div>
  );
};

export default Blog;