export function CircuitBackground() {
  // Helper to reverse a path direction
  const reversePath = (path: string): string => {
    const points: { x: number; y: number }[] = [];
    const commands = path.match(/[ML]\s*-?\d+\s+-?\d+/g) || [];
    commands.forEach((cmd) => {
      const nums = cmd.match(/-?\d+/g);
      if (nums && nums.length >= 2) {
        points.push({ x: parseInt(nums[0]), y: parseInt(nums[1]) });
      }
    });
    points.reverse();
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  };

  // Define circuit paths - messy Factorio-style spaghetti
  const basePaths = [
    // === Left region ===
    "M -50 100 L 100 100 L 100 200 L 250 200 L 250 350 L 150 350 L 150 500",
    "M -50 300 L 50 300 L 50 450 L 200 450 L 200 600 L 100 600 L 100 750",
    "M 80 -50 L 80 150 L 180 150 L 180 280 L 300 280",
    "M -50 500 L 80 500 L 80 620 L 200 620 L 200 780",
    "M -50 150 L 30 150 L 30 250 L 120 250 L 120 380",
    "M 50 -50 L 50 80 L 150 80 L 150 180 L 80 180 L 80 320",
    "M -50 400 L 100 400 L 100 520 L 180 520 L 180 650",
    "M 20 -50 L 20 120 L 130 120 L 130 250 L 220 250",
    "M -50 220 L 70 220 L 70 350 L 160 350 L 160 480 L 90 480",
    "M 100 -50 L 100 60 L 200 60 L 200 150 L 280 150 L 280 280",
    "M -50 600 L 60 600 L 60 720 L 150 720 L 150 850",
    "M 30 700 L 30 800 L 120 800 L 120 900 L 200 900",
    "M -50 700 L 40 700 L 40 820 L 130 820 L 130 950",

    // === Center-left region ===
    "M 250 -50 L 250 100 L 350 100 L 350 220 L 280 220 L 280 380",
    "M 300 -50 L 300 80 L 400 80 L 400 200 L 320 200 L 320 350",
    "M 350 -50 L 350 180 L 480 180 L 480 320 L 380 320 L 380 480",
    "M 200 200 L 200 320 L 300 320 L 300 450 L 380 450",
    "M 280 100 L 280 200 L 380 200 L 380 320 L 450 320",
    "M 220 350 L 320 350 L 320 480 L 420 480 L 420 600",
    "M 250 450 L 250 580 L 350 580 L 350 700 L 450 700",
    "M 300 550 L 400 550 L 400 680 L 300 680 L 300 800",
    "M 350 650 L 350 780 L 450 780 L 450 900 L 350 900",
    "M 280 750 L 380 750 L 380 880 L 280 880 L 280 1000",

    // === Center region ===
    "M 400 -50 L 400 100 L 550 100 L 550 250 L 450 250 L 450 400 L 600 400",
    "M 500 -50 L 500 80 L 650 80 L 650 200 L 750 200 L 750 350",
    "M 600 300 L 600 450 L 700 450 L 700 550 L 550 550 L 550 700",
    "M 450 -50 L 450 120 L 580 120 L 580 280 L 500 280 L 500 420",
    "M 550 -50 L 550 150 L 650 150 L 650 300 L 580 300 L 580 450",
    "M 480 200 L 480 350 L 580 350 L 580 500 L 680 500",
    "M 520 250 L 620 250 L 620 400 L 720 400 L 720 550",
    "M 600 -50 L 600 100 L 700 100 L 700 250 L 600 250 L 600 400",
    "M 650 180 L 650 320 L 750 320 L 750 480 L 650 480 L 650 620",
    "M 500 400 L 500 550 L 600 550 L 600 700 L 500 700 L 500 850",
    "M 550 500 L 650 500 L 650 650 L 550 650 L 550 800 L 650 800",
    "M 450 600 L 450 750 L 550 750 L 550 900 L 450 900 L 450 1050",
    "M 600 700 L 700 700 L 700 850 L 600 850 L 600 1000",
    "M 520 800 L 620 800 L 620 950 L 520 950",

    // === Center-right region ===
    "M 700 -50 L 700 120 L 800 120 L 800 280 L 720 280 L 720 420",
    "M 750 -50 L 750 80 L 850 80 L 850 200 L 780 200 L 780 350",
    "M 680 150 L 680 300 L 780 300 L 780 450 L 700 450 L 700 600",
    "M 720 200 L 820 200 L 820 350 L 920 350 L 920 500",
    "M 800 250 L 800 400 L 900 400 L 900 550 L 800 550 L 800 700",
    "M 750 450 L 850 450 L 850 600 L 750 600 L 750 750",
    "M 700 550 L 700 700 L 800 700 L 800 850 L 700 850",
    "M 780 650 L 880 650 L 880 800 L 780 800 L 780 950",
    "M 720 750 L 720 900 L 820 900 L 820 1050",

    // === Right region ===
    "M 900 -50 L 900 120 L 800 120 L 800 280 L 950 280 L 950 450",
    "M 1000 100 L 850 100 L 850 250 L 750 250 L 750 400 L 900 400 L 900 600",
    "M 1100 200 L 950 200 L 950 350 L 1050 350 L 1050 500 L 900 500",
    "M 1100 400 L 1000 400 L 1000 550 L 850 550 L 850 700",
    "M 950 -50 L 950 100 L 1050 100 L 1050 250 L 950 250 L 950 400",
    "M 1050 -50 L 1050 150 L 950 150 L 950 300 L 1100 300",
    "M 1100 100 L 1000 100 L 1000 220 L 900 220 L 900 350",
    "M 1000 -50 L 1000 80 L 1100 80 L 1100 200 L 1000 200 L 1000 350",
    "M 1100 500 L 1000 500 L 1000 650 L 900 650 L 900 800",
    "M 1050 600 L 950 600 L 950 750 L 1050 750 L 1050 900",
    "M 1100 700 L 980 700 L 980 850 L 880 850 L 880 1000",
    "M 1000 800 L 1100 800 L 1100 950",
    "M 950 850 L 950 1000 L 1050 1000",

    // === Bottom region ===
    "M 200 600 L 200 750 L 350 750 L 350 850 L 500 850",
    "M 700 650 L 700 800 L 550 800 L 550 950 L 400 950",
    "M 300 700 L 450 700 L 450 850 L 600 850 L 600 1000",
    "M 150 800 L 250 800 L 250 950 L 350 950 L 350 1100",
    "M 400 850 L 400 1000 L 500 1000 L 500 1100",
    "M 650 900 L 750 900 L 750 1050 L 850 1050",
    "M 100 900 L 200 900 L 200 1050 L 300 1050",
    "M 550 950 L 650 950 L 650 1100",
    "M 800 950 L 900 950 L 900 1100",
  ];

  // Reverse roughly half the paths for random direction distribution
  // Use a deterministic pattern based on index for consistency
  const circuitPaths = basePaths.map((path, index) => {
    // Reverse paths where (index * 7) % 11 < 5 - gives ~45% reversed
    const shouldReverse = (index * 7) % 11 < 5;
    return shouldReverse ? reversePath(path) : path;
  });

  // Create a shuffled order for staggered appearance (deterministic pseudo-random)
  // Using a better distribution to avoid clustering
  const shuffledIndices: number[] = [];
  const totalPaths = circuitPaths.length;
  for (let i = 0; i < totalPaths; i++) {
    // Use golden ratio to spread values evenly
    const golden = 0.618033988749;
    shuffledIndices.push(Math.floor(((i * golden) % 1) * totalPaths));
  }
  const appearanceOrder = shuffledIndices;

  // Extract nodes from paths (endpoints and corners)
  const extractNodes = (path: string): { x: number; y: number }[] => {
    const nodes: { x: number; y: number }[] = [];
    const commands = path.match(/[ML]\s*-?\d+\s+-?\d+/g) || [];
    commands.forEach((cmd) => {
      const nums = cmd.match(/-?\d+/g);
      if (nums && nums.length >= 2) {
        const x = parseInt(nums[0]);
        const y = parseInt(nums[1]);
        // Only add nodes that are within the viewbox
        if (x >= 0 && x <= 1000 && y >= 0 && y <= 1000) {
          nodes.push({ x, y });
        }
      }
    });
    return nodes;
  };

  // Get all unique nodes
  const allNodes = circuitPaths.flatMap(extractNodes);
  const uniqueNodes = allNodes.filter(
    (node, index, self) =>
      index === self.findIndex((n) => n.x === node.x && n.y === node.y)
  );

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

        {/* Junction nodes */}
        <g className="circuit-nodes">
          {uniqueNodes.map((node, index) => (
            <circle key={`node-${index}`} cx={node.x} cy={node.y} r="3" />
          ))}
        </g>

        {/* Animated electricity dots - multiple per path */}
        {circuitPaths.map((_path, index) => {
          const duration = 25 + (index % 4) * 10;
          // Use shuffled appearance order for random spawn locations
          // Stagger by .9s between paths, and spread dots within each path
          const spawnOrder = appearanceOrder[index];
          const baseDelay = spawnOrder * .9;
          return [0, 1, 2].map((dotIndex) => (
            <circle
              key={`dot-${index}-${dotIndex}`}
              r="3"
              className={`electricity-dot electricity-dot-${(index + dotIndex) % 5}`}
            >
              <animateMotion
                dur={`${duration}s`}
                repeatCount="indefinite"
                begin={`${baseDelay + dotIndex * (duration / 3)}s`}
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
