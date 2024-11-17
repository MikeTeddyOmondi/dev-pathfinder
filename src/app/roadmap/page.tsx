
export default function VerticalTimeline() {
  const data = [
    {
      date: "Jan 2025",
      title: "MVP",
      description: "Minimal viable product launched - ",
    },
    {
      date: "May 2025",
      title: "Incubations",
      description: "Launching incubation of projects.",
    },
    {
      date: "June 2025",
      title: "Introducing leaderboards and streaks",
      description: "We will be introducing leaderboards and streaks",
    },
    {
      date: "August 2025",
      title: "Adding Technical Posts and Blogs",
      description:
        "Technical post and articles will allow members posts what they have learnt for others to consume the content.",
    },
    {
      date: "September 2025",
      title: "Job Finder Quests",
      description:
        "We will look out for job opportunities for members who complete courses on our platform.",
    },
    {
      date: "Now",
      title: "Product Launch Version 1.0 release",
    },
  ];

  return (
    <>
      <div className="px-5">
        <div className="relative max-w-xl mx-auto my-16 lg:max-w-3xl before:absolute before:top-0 before:w-1 before:h-full before:left-2 before:bg-indigo-500 lg:before:left-1/2">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 mb-12 lg:flex even:flex-row-reverse">
              <div className="absolute top-0 left-0 w-5 h-5 bg-white border-4 border-indigo-500 rounded-full dark:bg-slate-900 lg:left-1/2 lg:-translate-x-2"></div>
              <p
                className={`text-sm tracking-wide text-indigo-400 uppercase lg:w-1/2 lg:mt-px  lg:pr-8 ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}>
                {item.date}
              </p>
              <div
                className={`lg:w-1/2 lg:-mt-1  ${
                  index % 2 === 0
                    ? "lg:text-left lg:ml-5 "
                    : "lg:text-right lg:pr-10"
                }`}>
                <h4 className="mt-4 text-xl text-indigo-500 lg:mt-0">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="mt-2 leading-7 text-primary-light">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}