import { Menu, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

type CustomProps = PropsWithChildren<{
  className?: string;
  "aria-label"?: string;
}>;

const TagDropdown = () => {
  return (
    <div className="w-56 text-right relative">
      <Menu as="div" className=" inline-block text-left">
        <div>
          <Menu.Button
            className="inline-flex negative-z justify-center w-full px-4 py-2 text-sm font-medium
              text-white bg-almostblack bg-gradient-to-tl from-bluegray-500 via-bluegray-700 to-bluegray-800
              rounded-md  hover:bg-opacity-90 hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-200 hover:ring-gray-300
              transition duration-500 focus:outline-none focus-visible:ring-2
              focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Tags
            {/* This styling - dark-shadow - has to be the worst i've ever done */}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-gray-200 dark-shadow hover:text-white-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <div className="relative">
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-50 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-orange-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <EditActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <EditInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Tags
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-orange-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DuplicateActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <DuplicateInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Duplicate
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-orange-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <ArchiveActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArchiveInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Archive
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-orange-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <MoveActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <MoveInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Move
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-orange-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DeleteActiveIcon
                          className="w-5 h-5 mr-2 text-red-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <DeleteInactiveIcon
                          className="w-5 h-5 mr-2 text-red-400"
                          aria-hidden="true"
                        />
                      )}
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </div>
  );
};

function EditInactiveIcon(props: CustomProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="rgb(251, 146, 60)"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props: CustomProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="rgb(251, 146, 60)"
        stroke="rgb(251, 146, 60)"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props: CustomProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="rgb(251, 146, 60)"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="rgb(251, 146, 60)"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props: CustomProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="rgb(251, 146, 60)"
        stroke="#rgb(251, 146, 60)"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="rgb(238, 162, 101)"
        stroke="#rgb(251, 146, 60)"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props: CustomProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="rgb(251, 146, 60)"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="rgb(251, 146, 60)"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="rgb(251, 146, 60)" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props: CustomProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="rgb(110, 52, 4)"
        stroke="#rgb(251, 146, 60)"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="rgb(251, 146, 60)"
        stroke="#rgb(251, 146, 60)"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="rgb(251, 146, 60)" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props: CustomProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="rgb(251, 146, 60)" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="rgb(251, 146, 60)" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="rgb(251, 146, 60)" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props: CustomProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#rgb(251, 146, 60)" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#rgb(251, 146, 60)" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#rgb(251, 146, 60)" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props: CustomProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="rgb(251, 146, 60)"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="rgb(251, 146, 60)" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="rgb(251, 146, 60)" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props: CustomProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="rgb(251, 146, 60)"
        stroke="#rgb(251, 146, 60)"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#rgb(251, 146, 60)" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#rgb(251, 146, 60)" strokeWidth="2" />
    </svg>
  );
}

export { TagDropdown };
