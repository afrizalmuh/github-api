import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { BASE_URL } from "../api"
import { connect, useSelector } from "react-redux"
import { setUserData } from "../reduxs/action/actions"
import { bindActionCreators } from "redux"
import initialState from "../reduxs/reducer/initialState"

const UserProfile = () => {
  const { login } = useParams()
  const [repos, setRepos] = useState([])
  const fetchRepos = async () => {
    try {
      const req = await fetch(`${BASE_URL}/users/${login}/repos`)
      const res = await req.json()
      setRepos(res)
    } catch (error) {
      console.log(error)
    }
  }
  const datasUser = useSelector((state) => state.user)
  console.log("datasUser", datasUser)

  useEffect(() => {
    fetchRepos()
  }, [])
  return (
    <div className="max-w-desk mx-auto gap-10 p-5 flex">
      <div className="pb-5 gap-5">
        <div className="flex flex-col gap-5">
          <img
            src={datasUser.avatar_url}
            alt={datasUser.login}
            className=" rounded-full"
          />
          <h1 className="text-3xl font-semibold">{datasUser.login}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-lg p-2">
        {repos.map((repository, key) => (
          <div className="flex justify-center" key={key}>
            <div className="bg-sooltan-4 text-sm md:text-md outline outline-1 w-4/5 p-7 h-full rounded-xl">
              <a
                href={repository.html_url}
                target="_blank"
                className="text-blue-500 font-semibold"
              >
                {repository.name}
              </a>
              <div>
                <span>{repository.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setUserData }, dispatch)
}
export default connect(mapDispatchToProps)(UserProfile)
