import React from 'react'

function NavBar() {
  return (
    <ul className="flex items-center gap-4 text-white">
    <li>
      <a href="#">HOME</a>
    </li>
    <li>
      <a href="">NEW BOOKS</a>
    </li>
    <li>
      <a href="">KIDS BOOKS</a>
    </li>
    <li>
      <a className="btn btn-soft text-orange-900" href="">
        SIGN UP
      </a>
    </li>
  </ul>
  )
}

export default NavBar