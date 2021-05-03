export const TimelineBadge: React.FunctionComponent<{
  icon: JSX.Element | JSX.Element[];
  lastItem?: boolean;
}> = ({ icon, lastItem }) => {
  return (
    <>
      {!lastItem && (
        <div className="h-full w-8 md:w-10 opacity-50 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-0.5 bg-gray-800 bgpointer-events-none" />
        </div>
      )}
      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 shadow-lg inline-flex items-center justify-center text-white relative z-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 md:w-5 md:h-5"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </div>
    </>
  );
};

export const Timeline: React.FunctionComponent = () => {
  return (
    <section className="text-gray-200 bg-gray-900 text-sm lg:text-base font-sans pb-8 ">
      <div className="px-0 py-0 mx-auto flex  flex-wrap">
        <div className="flex flex-wrap">
          <div className="lg:m-auto md:pr-10 md:py-6">
            <div className="flex relative pb-8">
              <TimelineBadge
                icon={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
              />
              <div className="flex-grow pl-4">
                <h2 className="font-medium uppercase text-sm font-mono text-gray-500 mb-1 tracking-wider">
                  GITHUB
                </h2>
                <p className="leading-relaxed font-sans">
                  Add a timeline/activity component that updates dynamically
                  (pulls from multiple sources, like github, twitter, instagram,
                  etc.)
                </p>
              </div>
            </div>
            <div className="flex relative pb-8">
              <TimelineBadge icon={<path d="M22 12h-4l-3 9L9 3l-3 9H2" />} />
              <div className="flex-grow pl-4">
                <h2 className="font-mono uppercase  title-font font-medium text-sm text-gray-500 mb-1 tracking-widest">
                  Twitter
                </h2>
                <p className="leading-relaxed font-sans">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="flex relative">
              <TimelineBadge
                lastItem
                icon={
                  <>
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </>
                }
              />
              <div className="flex-grow pl-4">
                <h2 className="font-mono uppercase title-font font-medium text-sm text-gray-500 mb-1 tracking-widest">
                  FINISH
                </h2>
                <p className="leading-relaxed font-sans">Profit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
