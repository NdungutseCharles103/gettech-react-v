import React from 'react'
import { Link } from 'react-router-dom'

function Wrong() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl">404</h1>
      <p>Page Not Found</p>
      <Link to="/">
        <p className="text-blue-500">Go To Homepage</p>{" "}
      </Link>
    </div>
  );
}

export default Wrong