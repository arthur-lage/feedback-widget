import { Menu, Transition } from "@headlessui/react";

import { User } from "phosphor-react";

import { useUser } from "../hooks/useUser";

import { Tooltip } from "./Tooltip";

export function Profile() {
  const { currentUser, logout } = useUser();

  return (
    <div className="z-20 absolute top-4 right-20 flex flex-col items-center">
      <Menu as="div" className={"relative"}>
        {({ open }) => (
          <>
            <Menu.Button
              tabIndex={1}
              className="outline-none shadow-widget_button ease-linear group flex items-center cursor-pointer p-2 rounded-[8px] hover:rounded-[50%] transition-all duration-150 bg-brand-500 hover:bg-brand-300 dark:text-zinc-100 has-tooltip focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:outline-none"
            >
              {open ? (
                <Tooltip
                  currentTooltip="profile-active"
                  label={"Fechar opções de perfil"}
                />
              ) : (
                <Tooltip
                  currentTooltip="profile"
                  label={"Abrir opções de perfil"}
                />
              )}
              <User weight="regular" className="w-8 h-8" />
            </Menu.Button>

            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items
                static
                className="outline-none z-20 min-w-[200px] max-w-[275px] absolute left-[-225px] top-3 flex flex-col items-center rounded-lg bg-zinc-100 shadow_profile dark:bg-zinc-900 pt-6"
              >
                <Menu.Item as="div">
                  <img
                    className="rounded-full w-16 mb-3"
                    src={currentUser!.image}
                    alt={currentUser!.name}
                  />
                </Menu.Item>
                <Menu.Item
                  as="span"
                  className="text-sm px-6 text-zinc-800 dark:text-zinc-100"
                >
                  {currentUser!.id}
                </Menu.Item>
                <Menu.Item
                  as="span"
                  className="text-xl font-medium px-6 mt-3 text-zinc-800 dark:text-zinc-100"
                >
                  {currentUser!.name}
                </Menu.Item>
                <Menu.Item
                  as="span"
                  className="text-l px-6 mt-2 mb-3 text-zinc-800 dark:text-zinc-100"
                >
                  {currentUser!.email}
                </Menu.Item>
                <Menu.Item
                  as="button"
                  role="button"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:outline-none w-full bg-brand-500 hover:bg-brand-300 transition-colors ease-linear duration-150 rounded-bl-md rounded-br-md py-2"
                  onClick={logout}
                  onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                    if (e.key === "Enter" || " ") {
                      logout();
                    }
                  }}
                >
                  Log out
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
