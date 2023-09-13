import { useState } from "react";


const initFormState = {
  name: "",
  email: "",
  password: "",
  country: "",
  martialStatus:false
};

function Form() {
  const [formState, setFormState] = useState(initFormState);
  const [users,setusers]= useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log("submit")
    setusers([...users,formState]);
    setFormState(initFormState);
    console.log(users,formState);

  }

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name: key, value, type, checked } = e.target;
    const val=type==="checkbox"? checked :value;

    setFormState({
        ...formState,
        [key]: val,
      });

    // if(type==="checkbox"){
    //     setFormState({
    //         ...formState,
    //         [key]: checked,
    //       });
    // }else{
    //     setFormState({
    //         ...formState,
    //         [key]: value,
    //       });
    // }
    
  };
  console.log(formState);
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={formState.name}
            name="name"
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            value={formState.email}
            name="email"
            onChange={handleChange}
            placeholder="email"
          />
        </div>
        <div>
          <input
            value={formState.password}
            name="password"
            onChange={handleChange}
            type="pasword"
            placeholder="password"
          />
        </div>

        <div>
          <select
            value={formState.country}
            onChange={handleChange}
            name="country"
          >
            <option value="IND">India</option>
            <option value="USA">USA</option>
            <option value="RUS">Russia</option>
          </select>
        </div>
        <div>
            <label>
                <input type="checkbox" checked={formState.martialStatus} name="martialStatus" onChange={handleChange} /> Married
            </label>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
