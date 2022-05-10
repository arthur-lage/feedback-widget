import { User } from "phosphor-react";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { Tooltip } from "./Tooltip";

export function Profile() {
  const [showProfile, setShowProfile] = useState(false);

  const { logout } = useUser();

  function handleShowProfile() {
    setShowProfile(!showProfile);
  }

  const { currentUser } = useUser();

  return (
    <div className="absolute top-4 right-20 flex flex-col items-center">
      <button
        className="cursor-pointer p-2 rounded-[8px] hover:rounded-[50%] transition-all duration-200 bg-brand-500 hover:bg-brand-300 dark:text-zinc-100 has-tooltip"
        onClick={handleShowProfile}
      >
        {showProfile ? (
          <Tooltip currentTooltip="profile" label={"Fechar opções de perfil"} />
        ) : (
          <Tooltip currentTooltip="profile" label={"Abrir opções de perfil"} />
        )}
        <User weight="bold" size={32} color="#fff" />
      </button>
      {showProfile && (
        <>
          {currentUser && (
            <div className="relative">
              <div className="absolute left-[-200px] top-10 flex flex-col items-center">
                <img src={currentUser.image} alt="User Image" />
                <span>{currentUser.id}</span>
                <span>{currentUser.name}</span>
                <span>{currentUser.email}</span>
                <button onClick={logout}>Log out</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
