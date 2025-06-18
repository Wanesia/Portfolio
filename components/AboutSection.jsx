import React from "react";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="flex flex-col xl:flex-row items-start justify-between w-full px-10"
    >
      <div className="">
        <h2 className="">About Me</h2>
        <p className="mt-5 md:w-[400px] lg:w-[700px]">
          Creative and ambitious Computer Science graduate with an open-minded
          approach to problem-solving and other areas of life.
          <br />I am currently enrolled in a Top-up Bachelor's degree program in
          Web Development at Copenhagen Business Academy.
          <br />I enjoy applying my knowledge to real-world projects and
          continuously seek opportunities to grow as a developer
        </p>
      </div>
      <div className="pt-10 md:pt-0 md:pr-20">
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
