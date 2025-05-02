import React from "react";


function BulletCard(){

return(
    <div className="space-y-6">
        <p>An advanced uses fo Tailwind css</p>
        <ul className="space-y-3">
          <li className="flex">
            <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
              <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
              <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
              <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
            </svg>
            <p className="ml-3">
            Learn utilities of Tailwind css
            </p>
          </li>
          <li className="flex">
            <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
              <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
              <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
              <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
            </svg>
            <p className="ml-3">
            Build Tailwind project
            </p>
          </li>
          <li className="flex">
            <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
              <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
              <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
              <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
            </svg>
            <p className="ml-3">
            Add in react project
            </p>
          </li>
          <li className="flex">
            <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
              <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
              <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
              <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
            </svg>
            <p className="ml-3">Code completion with instant preview</p>
          </li>
        </ul>
       
      </div>
)

}

export default BulletCard;