import { X } from "phosphor-react";
import { Widget } from "./components/Widget";
import { useError } from "./hooks/useError";

export function App() {
  const { removeError, errors } = useError();

  return (
    <>
      {errors && (
        <>
          {errors.length > 0 && (
            <div
              className={`absolute top-3 left-3 flex flex-col transition-all st415:left-[50%] st415:translate-x-[-50%] st415:w-[95vw] max-h-[200px] w-max pr-3 ${
                errors.length > 3 ? "overflow-y-scroll" : null
              }`}
            >
              {errors.map((error) => (
                <div
                  id={String(error.id)}
                  className="mb-3 text-md relative bg-[#ff4242] transition-all duration-200 rounded-md py-2 pl-2 pr-10 text-white font-['Inter']"
                  key={error.id}
                >
                  <button
                    onClick={() => removeError(error.id)}
                    className="absolute transition-all top-[50%] translate-y-[-50%] right-3 text-white"
                  >
                    <X weight="bold" size={20} />
                  </button>
                  {error.message}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <Widget />
    </>
  );
}
