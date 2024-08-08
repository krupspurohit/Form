import React, { useState } from "react";
import Swal from "sweetalert2";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [radiovalue, setRadioValue] = useState("male");
  const [textarea, setTextArea] = useState("");
  const [checkbox, setCheckbox] = useState([]);
  const [country, setCountry] = useState("---Country---");
  const [state, setState] = useState("---State---");
  const [city, setCity] = useState("---City---");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const countries = [
    {
      name: "India",
      states: [
        {
          name: "Gujarat",
          cities: [
            {
              name: "Junagadh",
            },
            {
              name: "Rajkot",
            },
            {
              name: "Ahemdabad",
            },
          ],
        },
        {
          name: "Rajshthan",
          cities: [
            {
              name: "Jaipur",
            },
            {
              name: "Ajmer",
            },
            {
              name: "Abu",
            },
          ],
        },
        {
          name: "MadhyPradesh",
          cities: [
            {
              name: "Ratlam",
            },
            {
              name: "Ujjain",
            },
            {
              name: "Indor",
            },
          ],
        },
      ],
    },
    {
      name: "Lundon",
      states: [
        {
          name: "ABC",
          cities: [
            {
              name: "abc",
            },
            {
              name: "xyz",
            },
          ],
        },
        {
          name: "US",
          cities: [
            {
              name: "Aeee",
            },
          ],
        },
      ],
    },
    {
      name: "UAE",
      states: [
        {
          name: "MM",
          cities: [
            {
              name: "City 1",
            },
            {
              name: "City 2",
            },
          ],
        },
        {
          name: "State2",
          cities: [
            {
              name: "City 3",
            },
            {
              name: "City 4",
            },
          ],
        },
      ],
    },
  ];

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   file: "",
  //   radiovalue: "",
  //   textarea: "",
  //   checkbox: [],
  //   countries: [],
  //   states: [],
  //   cities: [],
  // });
  // const [formError , setFormError] = useState({})

  const ChangeCountry = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
    setStates(countries.find((ctr) => ctr.name === event.target.value).states);
  };

  const ChangeState = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
    setCities(states.find((sts) => sts.name === event.target.value).cities);
  };

  const ChangeCity = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  const ChangeRadio = (e) => {
    setRadioValue(e.target.value);
    console.log(e.target.value);
  };

  const ChangeCheckbox = (e) => {
    if (e.target.checked) {
      setCheckbox([...checkbox, e.target.value]);
    } else {
      setCheckbox(checkbox.filter((item) => item !== e.target.value));
    }
  };

  const SubmitClick = (e) => {
      e.preventDefault();
    
       console.log("Data Submitted!!")
  };

  // const Validation = () =>{
  //   let err = {}
  //   if(formData.name === " ")
  //   {
  //     err.name = "Username is Required!!"
  //   }
  //   if(formData.email === " "){
  //     err.email = "Email id is Required!!"
  //   }
  //   if(formData.countries.length < 1){
  //     err.countries = "Pelease Select the Country!!"
  //   }
  //   if(formData.states.length < 1){
  //     err.states = "Pelease Select the State!!"
  //   }
  //   if(formData.cities.length < 1){
  //     err.cities = "Pelease Select the City!!"
  //   }
  //   if(formData.checkbox.length < 1){
  //     err.checkbox = "Pelease any one lauagage!!"
  //   }
  //   if(formData.radiovalue === " " ){
  //     err.radiovalue = "Select your gender!!"
  //   }
  //   if(formData.file === " "){
  //     err.file = "Select File!!"
  //   }
  //   if(formData.textarea === " "){
  //     err.textarea = "Your Adress is Required!!"
  //   }


  //   setFormError({...err})
  //   return Object.keys(err).length < 1;
  // }

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/ae/dc/0f/aedc0f273f6ca6209422dd15b25de6a0.jpg')",
        }}
        className="bg-center bg-cover h-screen"
      >
        <div className="text-4xl font-bold text-center py-5 text-transparent bg-clip-text bg-gradient-to-br from-pink-950 to-purple-200 hover:from-pink-500 hover:to-lime-500">
          Data Form
        </div>

        <div className="justify-center items-center flex">
          <div className=" my-10  w-1/2 border-2 border-gray-600 rounded px-8 py-5 ">
            <form >
              <div>
                <input
                  type="text"
                  
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                {/* <span>{formError.name}</span> */}
              </div>
              <div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                {/* <span>{formError.email}</span> */}

              </div>
              <div className="border-2 flex items-center my-3 border-gray-300">
                <div>
                  <input
                    type="radio"
                    name="male"
                    className="p-2 m-3"
                    value="male"
                    onChange={ChangeRadio}
                    checked={radiovalue === "male"}
                  ></input>
                  <label>Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    className="p-2 m-3"
                    name="female"
                    value="female"
                    onChange={ChangeRadio}
                    checked={radiovalue === "female"}
                  ></input>
                  <label>Female</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="other"
                    value="other"
                    checked={radiovalue === "other"}
                    onChange={ChangeRadio}
                    className="p-2 m-3"
                  ></input>
                  <label>Other</label>
                </div>
                {/* <span>{formError.radiovalue}</span> */}
              </div>

              <div className="border-2 flex items-center my-3 border-gray-300">
                <div>
                  <input
                    type="checkbox"
                    className="p-2 m-3"
                    value="hindi"
                    onChange={ChangeCheckbox}
                  ></input>
                  <label>Hindi</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="p-2 m-3"
                    value="english"
                    onChange={ChangeCheckbox}
                  ></input>
                  <label>English</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="gujarati"
                    onChange={ChangeCheckbox}
                    className="p-2 m-3"
                  ></input>
                  <label>Gujarati</label>
                </div>
                {/* <span>{formError.checkbox}</span> */}
              </div>

              <div className="border-2 px-3 py-2 flex items-center my-3 border-gray-300">
                <div className="mx-2">
                  <select value={country} onChange={ChangeCountry}>
                    <option>---Contry---</option>
                    {countries.map((ctr) => (
                      <option key={ctr.name}>{ctr.name}</option>
                    ))}
                  </select>
                  {/* <span>{formError.countries}</span> */}
                </div>
                <div className="mx-2">
                  <select value={state} onChange={ChangeState}>
                    <option>---State---</option>
                    {states.map((sts) => (
                      <option key={sts.name}>{sts.name}</option>
                    ))}
                  </select>
                  {/* <span>{formError.states}</span> */}
                </div>
                <div className="mx-2">
                  <select value={city} onChange={ChangeCity}>
                    <option>---City---</option>
                    {cities.map((c) => (
                      <option key={c.name}>{c.name}</option>
                    ))}
                  </select>
                  {/* <span>{formError.cities}</span> */}
                </div>
              </div>

              <div className="border-2 px-3 py-2 border-gray-300 flex items-center my-3 ">
                <div>
                  <input
                    type="file"
                    value={file}
                    onChange={(f) => setFile(f.target.value)}
                  />
                </div>
                {/* <span>{formError.file}</span> */}
              </div>
              <div className=" border-gray-300 my-3">
                <textarea
                  className="w-full focus:outline-none border-2 border-gray-300"
                  value={textarea}
                  onChange={(e) => setTextArea(e.target.value)}
                  placeholder="Enter Your Address"
                />
                {/* <span>{formError.textarea}</span> */}
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className=" border-0 rounded-sm border-transparent p-3 relative ml-5 w-1/4  focus:border-gray-400 bg-gradient-to-r from-pink-950 to-red-300 hover:from-pink-300 hover:to-purple-300 font-bold"
onClick={SubmitClick}
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};
