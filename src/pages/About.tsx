export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            About Beyond Big-O
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Breaking the boundaries of algorithmic thinking
          </p>
        </header>

        <div className="prose prose-lg mx-auto">
          <h2>Our Philosophy</h2>
          <p>
            Most computer science education stops at the basics: sorting algorithms, 
            basic data structures, and the dreaded coding interview preparation. 
            Students learn to calculate big-O complexity and memorize standard solutions, 
            but rarely venture into the fascinating world of advanced algorithmic thinking.
          </p>

          <p>
            <strong>Beyond Big-O</strong> was born from a simple observation: the gap between 
            academic algorithm courses and real-world computational challenges is vast. 
            While students master quicksort and binary search, they remain unaware of 
            suffix trees, advanced pattern matching, approximation algorithms, and the 
            elegant mathematical techniques that power modern systems.
          </p>

          <h2>What Makes Us Different</h2>
          <p>
            We don't just explain algorithms—we explore their mathematical foundations, 
            real-world applications, and the engineering insights that make them practical. 
            Our articles bridge the gap between theoretical computer science and production 
            systems, showing how advanced techniques solve problems at companies like Google, 
            Meta, and innovative startups.
          </p>

          <h3>Our Focus Areas</h3>
          <ul>
            <li><strong>Advanced Data Structures:</strong> From suffix arrays to persistent data structures</li>
            <li><strong>String Algorithms:</strong> Pattern matching beyond naive approaches</li>
            <li><strong>Computational Geometry:</strong> Algorithms for spatial problems</li>
            <li><strong>Graph Theory:</strong> Beyond DFS and BFS to network flow and matching</li>
            <li><strong>Approximation Algorithms:</strong> When optimal isn't necessary</li>
            <li><strong>Randomized Algorithms:</strong> Leveraging probability for efficiency</li>
            <li><strong>Parallel Algorithms:</strong> Designing for modern multi-core systems</li>
          </ul>

          <h2>Interactive Learning</h2>
          <p>
            We believe in learning by doing. Our articles feature interactive demonstrations, 
            code examples you can run, and visualizations that make complex concepts intuitive. 
            We show not just what algorithms do, but how they think.
          </p>

          <h2>For Whom</h2>
          <p>
            Our content is designed for curious minds who want to go beyond the basics:
          </p>
          <ul>
            <li>Software engineers looking to deepen their algorithmic toolkit</li>
            <li>Computer science students hungry for advanced topics</li>
            <li>Researchers seeking practical implementations of theoretical concepts</li>
            <li>Anyone fascinated by the elegant mathematics underlying computation</li>
          </ul>

          <h2>Join the Journey</h2>
          <p>
            The world of algorithms extends far beyond what's covered in typical interviews 
            or introductory courses. It's a world of mathematical beauty, practical power, 
            and endless discovery. We invite you to join us as we explore the algorithms 
            that shape our digital world—the ones that process your DNA, power your search 
            engines, and solve problems you never knew existed.
          </p>

          <p>
            <em>
              Because true understanding begins where memorization ends, and mastery lies 
              not in knowing the complexity, but in understanding the complexity behind 
              the complexity.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}