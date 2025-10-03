import Image from "next/image";

export const TechStack = () => {
  return (
    <div className="container mb-10">
      <h1 className="flex justify-center text-3xl font-bold w-full mb-4 h-14">
        Tech Stack
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="group flex flex-col items-center h-48">
            <Image
              src="/html.png"
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-out"
              width={100}
              height={100}
            />
            <span className="text-lg font-medium hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
              HTML
            </span>
          </div>
          <div className="group flex flex-col items-center h-48">
            <Image
              src="/css.png"
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-out"
              width={100}
              height={100}
            />
            <span className="text-lg font-medium hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
              CSS
            </span>
          </div>
          <div className="group flex flex-col items-center h-48">
            <Image
              src="/React.png"
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-out"
              width={100}
              height={100}
            />
            <span className="text-lg font-medium hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
              REACT
            </span>
          </div>
          <div className="group flex flex-col items-center h-48">
            <Image
              src="/firebase.webp"
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-out"
              width={100}
              height={100}
            />
            <span className="text-lg font-medium hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
              FIREBASE
            </span>
          </div>
          <div className="group flex flex-col items-center h-48">
            <Image
              src="/nextjs.png"
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-out"
              width={100}
              height={100}
            />
            <span className="text-lg font-medium hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
              NEXTJS
            </span>
          </div>
          <div className="group flex flex-col items-center h-48">
            <Image
              src="/redux.png"
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-out"
              width={100}
              height={100}
            />
            <span className="text-lg font-medium hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
              REDUX
            </span>
          </div>
          <div className="group flex flex-col items-center h-48">
            <Image
              src="/tailwind.png"
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-out"
              width={100}
              height={100}
            />
            <span className="text-lg font-medium hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
              TAILWIND
            </span>
          </div>
          <div className="group flex flex-col items-center h-48">
            <Image
              src="/nodejs.png"
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-out"
              width={100}
              height={100}
            />
            <span className="text-lg font-medium hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
              NODEJS
            </span>
          </div>
          <div className="group flex flex-col items-center h-48">
            <Image
              src="/javascript.png"
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-out rounded-xl"
              width={100}
              height={100}
            />
            <span className="text-lg font-medium hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
              JAVASCRIPT
            </span>
          </div>
          <div className="group flex flex-col items-center h-48">
            <Image
              src="/typescript.png"
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-out"
              width={100}
              height={100}
            />
            <span className="text-lg font-medium hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
              TYPESCRIPT
            </span>
          </div>
          <div className="group flex flex-col items-center h-48">
            <Image
              src="/drizzle.png"
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-out rounded-xl"
              width={100}
              height={100}
            />
            <span className="text-lg font-medium hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
              DRIZZLE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
