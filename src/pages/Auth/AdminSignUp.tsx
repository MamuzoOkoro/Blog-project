import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
// import {  } from "../../apis/AuthAPI"

const AdminSignUp = () => {
  const navigate = useNavigate()
  const [image, setimage] = useState<string>("")
  const [avatar, setavatar] = useState<string>()

  const onHandleImage = (e: any) => {
    const localImage = e.target.files[0]
    const saveImage = URL.createObjectURL(localImage)
    setimage(localImage)
    setavatar(saveImage)
  }

  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")])
  })

  const {handleSubmit, register, formState: { errors } } =
  useForm({
    resolver: yupResolver(model)
  })

  const onSubmit = handleSubmit(async (data) => {
    const { name, email, password } = data

    const formData = new FormData()
    formData.append("", name)
    formData.append("", email)
    formData.append("", password)
    formData.append("", image)

    (formData).then(() => {
      navigate("/Admin-sign-in")
    })
  })
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-slate-200">
      <form 
      onSubmit={onSubmit}
      className="w-[300px] p-[25px] bg-white rounded">
        <div className="text-[24px] font-[500]">Hi!</div>
        <div className="text-[15px]">Create a new account as an admin</div>
        <div className="flex items-center flex-col w-[100%] justify-center">
          {/* img */}
          <img className="w-[90px] h-[90px] rounded-[50%]  bg-[black] my-[10px]" src={avatar}
          />
          {/* upload */}
          <label className="py-[7px] px-[20px] bg-[orange] rounded text-white hover: cursor-pointer" htmlFor="image">
            upload image
          </label>
          <input placeholder="image"
                        className="hidden"
                        id='image'
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={onHandleImage}
                    />
        {/* input Holder */}
        <div className="mt-[10px]">
        {/* <div>Name</div> */}
  
        <input placeholder="Enter Name" className="placeholder:text-[14px] px-[5px]
        w-[100%] mt-[10px] outline-[#000000ad]
        h-[35px] border-b-[1px] border-[black]"
        {...register("name")}
        />          
        <input placeholder="Enter Email" className="placeholder:text-[14px] px-[5px]
        w-[100%] mt-[10px] outline-[#000000ad]
        h-[35px] border-b-[1px] border-[black] "
        {...register("email")}
        />
        <input placeholder="Enter Password" className="placeholder:text-[14px] px-[5px]
        w-[100%] mt-[10px] outline-[#000000ad]
        h-[35px] border-b-[1px] border-[black] "
        {...register("password")}
        />
        </div>
        <div className="text-[13px] text-[#000000b4] my-[10px]">Already have an account?
          <Link to="">
          <span className="text-[14px] ml-[5px] font-[600]">Sign-in</span></Link>
        </div>
          <button className="py-[7px] px-[45px] bg-[orange] rounded text-white hover: cursor-pointer " type="submit">
            Sign-up
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminSignUp