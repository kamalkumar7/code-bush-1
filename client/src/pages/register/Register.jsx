import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './register.scss'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from 'react';
import Back from "../../images/Capture.jpeg";
import CodeBush from "../../images/CodeBush.png"



const Register = () => {

    const [file, setFile] = useState("");

    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src={CodeBush}
                        alt=""
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor='file' >Profile Pic: <DriveFolderUploadOutlinedIcon className='icon' /></label>
                                <input type="file" id='file' style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                            </div>

                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="hritik01478" />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="text" placeholder="hritikkumar01478@gmail.com" />
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="hritik01478" />
                            </div>

                            <button>SEND</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register