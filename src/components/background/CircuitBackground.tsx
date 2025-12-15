export function CircuitBackground() {
  // Define multiple circuit paths that look like organic PCB traces
  const circuitPaths = [
    // Left side circuits
    "M -50 100 L 100 100 L 100 200 L 250 200 L 250 350 L 150 350 L 150 500",
    "M -50 300 L 50 300 L 50 450 L 200 450 L 200 600 L 100 600 L 100 750",
    "M 80 -50 L 80 150 L 180 150 L 180 280 L 300 280",
    // Center circuits
    "M 400 -50 L 400 100 L 550 100 L 550 250 L 450 250 L 450 400 L 600 400",
    "M 500 -50 L 500 80 L 650 80 L 650 200 L 750 200 L 750 350",
    "M 600 300 L 600 450 L 700 450 L 700 550 L 550 550 L 550 700",
    // Right side circuits
    "M 900 -50 L 900 120 L 800 120 L 800 280 L 950 280 L 950 450",
    "M 1000 100 L 850 100 L 850 250 L 750 250 L 750 400 L 900 400 L 900 600",
    "M 1100 200 L 950 200 L 950 350 L 1050 350 L 1050 500 L 900 500",
    // Bottom circuits
    "M 200 600 L 200 750 L 350 750 L 350 850 L 500 850",
    "M 700 650 L 700 800 L 550 800 L 550 950 L 400 950",
    "M 300 700 L 450 700 L 450 850 L 600 850 L 600 1000",
    // Additional organic traces
    "M -50 500 L 80 500 L 80 620 L 200 620 L 200 780",
    "M 1100 400 L 1000 400 L 1000 550 L 850 550 L 850 700",
    "M 350 -50 L 350 180 L 480 180 L 480 320 L 380 320 L 380 480",
  ];

  return (
    <div className="circuit-background">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circuit traces */}
        {circuitPaths.map((path, index) => (
          <path
            key={`trace-${index}`}
            d={path}
            className="circuit-trace"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Junction nodes at path endpoints and corners */}
        <g className="circuit-nodes">
          {/* Left side nodes */}
          <circle cx="100" cy="100" r="4" />
          <circle cx="100" cy="200" r="4" />
          <circle cx="250" cy="200" r="4" />
          <circle cx="250" cy="350" r="4" />
          <circle cx="150" cy="350" r="4" />
          <circle cx="50" cy="300" r="4" />
          <circle cx="50" cy="450" r="4" />
          <circle cx="200" cy="450" r="4" />
          <circle cx="200" cy="600" r="4" />
          {/* Center nodes */}
          <circle cx="400" cy="100" r="4" />
          <circle cx="550" cy="100" r="4" />
          <circle cx="550" cy="250" r="4" />
          <circle cx="450" cy="250" r="4" />
          <circle cx="450" cy="400" r="4" />
          <circle cx="600" cy="400" r="4" />
          <circle cx="500" cy="80" r="4" />
          <circle cx="650" cy="80" r="4" />
          <circle cx="650" cy="200" r="4" />
          <circle cx="750" cy="200" r="4" />
          <circle cx="750" cy="350" r="4" />
          {/* Right side nodes */}
          <circle cx="900" cy="120" r="4" />
          <circle cx="800" cy="120" r="4" />
          <circle cx="800" cy="280" r="4" />
          <circle cx="950" cy="280" r="4" />
          <circle cx="950" cy="450" r="4" />
          <circle cx="850" cy="100" r="4" />
          <circle cx="850" cy="250" r="4" />
          <circle cx="750" cy="400" r="4" />
          <circle cx="900" cy="400" r="4" />
        </g>

        {/* Animated electricity dots - multiple per path */}
        {circuitPaths.map((path, index) => {
          const duration = 12 + (index % 3) * 6;
          return [0, 1, 2].map((dotIndex) => (
            <circle
              key={`dot-${index}-${dotIndex}`}
              r="3"
              className={`electricity-dot electricity-dot-${(index + dotIndex) % 5}`}
            >
              <animateMotion
                dur={`${duration}s`}
                repeatCount="indefinite"
                begin={`${index * 1.5 + dotIndex * (duration / 3)}s`}
              >
                <mpath href={`#path-${index}`} />
              </animateMotion>
            </circle>
          ));
        })}

        {/* Hidden paths for animateMotion reference */}
        <defs>
          {circuitPaths.map((path, index) => (
            <path key={`def-${index}`} id={`path-${index}`} d={path} />
          ))}
        </defs>
      </svg>
    </div>
  );
}
