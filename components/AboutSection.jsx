import React from "react";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="flex flex-col xl:flex-row items-center justify-between w-full"
    >
      <div className="text-center xl:text-left">
        <h2 className="">About Me</h2>
        <p className="mt-5 lg:w-[700px]">
          Creative and ambitious Computer Science graduate with an open-minded
          approach to problem-solving and other areas of life.
          I am currently enrolled in a Top-up Bachelor's degree program in
          Web Development at Copenhagen Business Academy.
          I enjoy applying my knowledge to real-world projects and
          continuously seek opportunities to grow as a developer.
        </p>
      </div>
      <div className="pt-10 xl:pt-0 md:pr-20">
        <ul>
          <li className="relative flex gap-6 pb-5">
            <div className="before:absolute before:left-[7px] before:h-full before:w-[1px] before:bg-secondary">
              <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                <circle r="8" cx="8" cy="8" fill="var(--color-secondary)" />
              </svg>
            </div>

            <div className="">
              <h4>KEA</h4>
              <p>Computer Science AP Degree</p>
              <p>2021-2023</p>
            </div>
          </li>
          <li className="relative flex gap-6 pb-5">
            <div className="before:absolute before:left-[7px] before:h-full before:w-[1px] before:bg-secondary">
              <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                <circle r="8" cx="8" cy="8" fill="var(--color-secondary)" />
              </svg>
            </div>

            <div className="">
              <h4>INTERNSHIP</h4>
              <p>Mobile App Development</p>
              <p>August 2023 (10 weeks)</p>
            </div>
          </li>
          <li className="relative flex gap-6 pb-2">
            <div className="before:absolute before:left-[7px] before:h-full before:w-[1px] before:bg-secondary">
              <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                <circle r="8" cx="8" cy="8" fill="var(--color-secondary)" />
              </svg>
            </div>

            <div className="">
              <h4>CPHBUSINESS</h4>
              <p>Web Dev Top-up Bachelor</p>
              <p>2024 - 2026</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
