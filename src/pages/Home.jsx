import React, { useState } from "react"
import { BASE_URL } from "../api"
import CardUser from "../component/CardUser"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { setUserData } from "../reduxs/action/actions"

const Home = () => {
  const [username, setUsername] = useState("")
  const [userAccount, setUserAccount] = useState([])
  //Page
  const [page, setPage] = useState(1)
  //Per page
  const [limit, setLimit] = useState(10)

  const search = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/search/users?q=${username}`)
      return data?.items
    } catch (error) {
      console.log(error)
    }
  }
  const dispatch = useDispatch()
  const handleSearchUser = async (e) => {
    e.preventDefault()
    if (username) {
      const datas = await search()
      setUserAccount(datas)
      dispatch({ type: "SET_USER_DATA", value: datas[0] })
    } else {
      // console.log("your user is empty")
    }
  }

  return (
    <>
      <div className="pt-10">
        <div className="max-w-desk md:mx-auto">
          <div className="p-8 bg-black rounded-lg">
            <span className="text-2xl md:text-3xl font-bold text-white">
              Github Search User
            </span>
            <div className="pt-5 flex gap-5">
              <input
                type="text"
                className="rounded-lg w-7/12 sm:w-5/6 text-black pl-2"
                placeholder="search..."
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />
              <span
                className="bg-sooltan-2 text-white rounded-lg p-2 font-semibold cursor-pointer"
                onClick={handleSearchUser}
              >
                Cari User
              </span>
            </div>
          </div>
          <div className="pt-5">
            {userAccount ? (
              <div className="grid grid-cols-1 md:grid-cols-2 bg-sooltan-4">
                {userAccount.map((user, key) => (
                  <div key={key}>
                    <CardUser users={user} />
                  </div>
                ))}
              </div>
            ) : (
              <h2>nothing</h2>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setUserData }, dispatch)
}
// export default connect(mapDispatchToProps)(UserProfile)

export default connect(mapDispatchToProps)(Home)
