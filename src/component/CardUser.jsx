import React from "react"
import { Link } from "react-router-dom"

const CardUser = ({ users }) => {
  return (
    <>
      <div className="rounded-md">
        <div className="p-5 flex gap-10">
          <img
            src={users.avatar_url}
            alt="pict user"
            className="w-[8rem] md:w-[10rem] rounded-lg"
          />
          <div className="my-auto text-sm sm:text-2xl ">
            <h1 className="font-bold">{users.login}</h1>
            <h1>Id : {users.id}</h1>
            <Link to={`/user/${users.login}`} className="hover:text-blue-500">
              View Profile
            </Link>
          </div>
        </div>
        <hr className="" />
      </div>
    </>
  )
}

export default CardUser
