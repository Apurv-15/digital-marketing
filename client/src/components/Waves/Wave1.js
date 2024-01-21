import React from "react";
import Wavify from "react-wavify";
import "./AnimatedWaveBackground.css"; // Create a separate CSS file for styling

const Wave1 = ({ darkTheme }) => {
  const waveColor = darkTheme ? "#1a1a1a" : "#3498db"; // Set appropriate color for dark theme

  return (
    <div className={`wave-container ${darkTheme ? "dark-theme" : ""}`}>
      <Wavify
        className="wave"
        fill={waveColor}
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 4,
        }}
      />
    </div>
  );
};

export default Wave1;
