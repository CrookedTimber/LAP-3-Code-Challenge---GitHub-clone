import React, {useState, useEffect} from "react";

import "./index.css";

const SearchPage = () => {
    const [ inputValue, setInputValue ] = useState("");
    const [ submitValue, setSubmitValue ] = useState("");
    const [ userData, setUserData ] = useState=("");
        
    useEffect(() => {
        async function fetchUserData() {
            try {
                const result = await fetch('https://api.github.com/users/{username}/', {
                  username: 'USERNAME'
                })
                setUserData(result.data);
            } catch(err) {
              console.log(err);
            }
        }

        fetchUserData(submitValue);
    }, [submitValue, setUserData])

    function handleInput(e) {
      const newInput =  e.target.value;
      setInputValue(newInput)
    }

    function handleSubmit(e) {
      e.preventDefault();
      setSubmitValue(inputValue);
      setInputValue("");
    }
    return (

        <div>
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="username">Search Username</label>
          <br />
          <input type="text" id="username" name="username" onChange={handleInput} value={inputValue} />
          <br />
        </form>

        </div>
      );
    }

export default SearchPage;