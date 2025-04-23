import { useState } from "react";

const LoginSignup = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("bharat");
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    pass: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const loginUser = () => {
    const requestData = {
      login_id: formData.id,
      userpwd: formData.pass
    }

    fetch("https://omhrms.omlogistics.co.in/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => {
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setIsLoggedIn(true);
      return response.json();
    })
    .then(apiData => console.log(apiData))
    .catch(error => console.error("Error: ", error));
  }

  return(
    <>
      {showLoginPage && <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/25">
        <div className="bg-white flex flex-col gap-4 w-[250px] border border-gray-500 rounded-xl px-4 pb-6 pt-2">
          <p onClick={() => setShowLoginPage(false)} className="self-end font-bold cursor-pointer">X</p>
          <input value={formData.id} onChange={handleChange} name="id" type="text" placeholder="Id" className="focus:outline-none px-4 py-2 rounded-2xl border border-gray-300" />
          <input value={formData.pass} onChange={handleChange} name="pass" type="password" placeholder="Password" className="focus:outline-none px-4 py-2 rounded-2xl border border-gray-300" />
          <button onClick={loginUser} className="bg-black text-white px-4 py-2 rounded">Login</button>
        </div>
      </div>}
      {!isLoggedIn ? 
      <button onClick={() => setShowLoginPage(true)} className='cursor-pointer py-2 px-4 border border-gray-500 rounded-xl'>
        Login
      </button> : 
      <p>Hi</p>
      }
    </>
  )
}

export default LoginSignup;