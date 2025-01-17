import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../data";
import { PinContainer } from "./ui/3D-pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection {""}
        <span> recent projects</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((pro) => (
          <div
            key={pro.id}
            className="flex sm:h-[41rem] h-[32rem] sm:w-[570px] lg:min-h-[32.5rem] items-center justify-center  w-[40vw]"
          >
            <PinContainer title={pro.link} href={pro.link}>
              <div className="flex relative sm:h-[40vh] h-[30vh] items-center mb-10 justify-center sm:w-[370px] w-[80vh] overflow-hidden  lg:h-[30vh]">
                <div className="flex relative h-full w-full">
                  <img src="./bg.png" alt="img" />
                </div>
                <img
                  src={pro.img}
                  alt={pro.title}
                  className="z-10 absolute  bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {pro.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 ">
                {" "}
                {pro.des}
              </p>
              <div className="flex justify-between items-center mb-3 mt-7">
                <div className="flex items-center">
                  {pro?.iconLists.map((icon, i) => (
                    <div
                      key={icon}
                      style={{
                        transform: `translateX(-${5 * i * 2}px)`,
                      }}
                      className="border bg-black  lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center  border-white/[0.2] rounded-full"
                    >
                      <img src={icon} alt="icons" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check this project
                    <FaLocationArrow className="ms-3" />
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
