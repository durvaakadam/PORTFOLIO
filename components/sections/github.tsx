export default function GitHub() {
  return (
    <section
      id="github"
      className="max-w-5xl mx-auto px-4 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">
        GitHub Contributions
      </h2>

      <div
        className="
          bg-[#0d1117]
          rounded-xl
          p-6
          overflow-x-auto
          transition-all duration-300
          hover:shadow-lg hover:shadow-accent/20
        "
      >
        <a
          href="https://github.com/durvaakadam"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1} // Prevent focus/hover
          style={{ pointerEvents: 'none' }} // Disable all pointer events
        >
          <img
            src="https://ghchart.rshah.org/22c55e/durvaakadam"
            alt="GitHub contribution graph"
            className="w-full select-none pointer-events-none"
          />
        </a>

        <div className="flex items-center justify-between mt-3 text-[11px] text-gray-400">
          <span>200+ contributions in 2025</span>

          <div className="flex items-center gap-1">
            <span>Less</span>
            <span className="w-2.5 h-2.5 bg-[#161b22] rounded-sm" />
            <span className="w-2.5 h-2.5 bg-[#0e4429] rounded-sm" />
            <span className="w-2.5 h-2.5 bg-[#006d32] rounded-sm" />
            <span className="w-2.5 h-2.5 bg-[#26a641] rounded-sm" />
            <span className="w-2.5 h-2.5 bg-[#39d353] rounded-sm" />
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}