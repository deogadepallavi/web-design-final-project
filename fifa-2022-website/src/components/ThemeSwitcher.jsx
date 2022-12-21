import React from "react";
import "./ThemeSwitcherStyles.css";


function ThemeSwitcher({toggleTheme}) {
    return (
        <div>
            <p className="toggle-style">Change Theme</p>
            <label className="switch">
            <input type="checkbox" onClick={() => toggleTheme()} />
            <span className="slider round"></span>
        </label>
        </div>
    );
}

export default ThemeSwitcher;