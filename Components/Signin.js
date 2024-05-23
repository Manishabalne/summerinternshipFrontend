import { useForm } from "react-hook-form";

import './Signup.css'

function Signin() {
  let { register, handleSubmit } = useForm();
 
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow">
            <div className="card-title text-center border-bottom ">
              <h2 className="p-3">Signin</h2>
            </div>
            <div className="card-body">
              <form >
                {/* radio */}
                <div className="mb-4">
                  <label
                    htmlFor="student"
                    className="form-check-label me-5"
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--light-dark-grey)",
                    }}
                  >
                    Login as
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="Teacher"
                      value="Teacher"
                      {...register("userType")}
                    />
                    <label
                      htmlFor="Teacher"
                      className="form-check-label"
                      style={{ color: "var(--dark-green)" }}
                    >
                      Teacher
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="student"
                      value="student"
                      {...register("userType")}
                    />
                    <label
                      htmlFor="student"
                      className="form-check-label"
                      style={{ color: "var(--dark-green)" }}
                    >
                      student
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="username"
                    {...register("username")}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control "
                    id="password"
                    {...register("password")}
                  />
                </div>

                <div className="text-end">
                  <button
                    type="submit"
                    className="text-light d-block mx-auto"
                    style={{ backgroundColor: "var(--dark-maroon)" }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;