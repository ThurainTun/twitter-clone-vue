import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const List = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <ul className="my-1.5">
      <li id="home">
        <Link
          to="/home"
          className="flex items-center px-2 py-3 text-xl leading-8 font-bold rounded-full hover:bg-blue hover:bg-opacity-10 hover:text-blue"
        >
          <svg
            className="mr-4 h-6 w-6 "
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
            />
          </svg>
          Home
        </Link>
      </li>
      <li id="explore">
        <Link
          to="/explore"
          className="mt-1 group flex items-center px-2 py-3 text-xl leading-8 font-bold rounded-full hover:bg-blue hover:bg-opacity-10 hover:text-blue"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
          </svg>
          Explore
        </Link>
      </li>
      <li id="notifications">
        <Link
          to="/notifications"
          className="mt-1 group flex items-center px-2 py-3 text-xl leading-8 font-bold rounded-full hover:bg-blue hover:bg-opacity-10 hover:text-blue"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          Notifications
        </Link>
      </li>
      <li id="messages">
        <Link
          to="/messages"
          className="mt-1  flex items-center px-2 py-3 text-xl leading-8 font-bold rounded-full hover:bg-blue hover:bg-opacity-10 hover:text-blue"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Messages
        </Link>
      </li>
      <li id="bookmarks">
        <Link
          to="/bookmarks"
          className="mt-1 group flex items-center px-2 py-3 text-xl leading-8 font-bold rounded-full hover:bg-blue hover:bg-opacity-10 hover:text-blue"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
          Bookmarks
        </Link>
      </li>
      <li id="lists">
        <Link
          to="/lists"
          className="mt-1 group flex items-center px-2 py-3 text-xl leading-8  font-bold rounded-full hover:bg-blue hover:bg-opacity-10 hover:text-blue"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
          </svg>
          Lists
        </Link>
      </li>
      <li id="profile">
        <Link
          to={`/profile/${user._id}`}
          className="mt-1 group flex items-center px-2 py-3 text-xl leading-8 font-bold rounded-full hover:bg-blue hover:bg-opacity-10 hover:text-blue"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Profile
        </Link>
      </li>
    </ul>
  );
};

export default List;
