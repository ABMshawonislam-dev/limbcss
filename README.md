# LimbCss

Free and opensource components based on TailwindCSS

# Install now!

---

`npm i limbcss`

Then add limbcss to your `tailwind.config.js:`:

```
module.exports = {
  plugins: [require("limbcss")],
};
```

# Navbar

---

```
<nav className="bg-slate-200 navbar relative">
    <div className="container mx-auto lg:navbar-container">
         <a href="#">LOGO</a>
        <label for="toggle-btn" className="toggle-btn-responsive lg:toggle-btn">
            &#8801;
        </label>
        <input id="toggle-btn" type="checkbox" hidden />
        <div className="navbar-responsive lg:navbar-desktop">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div>
              <button className="b-btn b-btn-primary mx-1">Click</button>
              <button className="b-btn b-btn-success  mx-1">Click</button>
            </div>
          </div>
        </div>
</nav>
```
