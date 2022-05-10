import GoogleLogo from "../assets/google-logo.svg";
import { useUser } from "../hooks/useUser";

export function LoginWithGoogle() {
  const { login } = useUser();

  return (
    <div
      onClick={login}
      className="flex flex-col absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <span className="text-center font-medium text-xl tracking-wide text-zinc-800 dark:text-zinc-100">
        Login in order to see all the feedbacks
      </span>
      <div className="mt-6 flex justify-center">
        <button className="flex items-center rounded-sm bg-brand-500 hover:bg-brand-300 transition-colors ease-linear duration-200 pt-[2px] pl-[2px] pb-[2px] pr-4 focus:ring-2 focus:ring-offset-2 focus:rinng-offset-white dark:focus:ring-offset-[#09090A] focus:ring-brand-500 focus:outline-none">
          <div className="bg-white mr-4 rounded-sm">
            <img
              className="w-10 rounded-sm"
              src={GoogleLogo}
              alt="Google Logo"
            />
          </div>
          <span className="font-[Ubuntu] font-medium text-white tracking-wide">
            Login with Google
          </span>
        </button>
      </div>
    </div>
  );
}
