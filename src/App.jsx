import { useState, useCallback, useEffect, useRef } from "react";


const App=()=>{

  //kati length ko password rakhne. maila default 8 rakheko xu.
  const [length, setLength] = useState(8);

   // number haruli allow garne ki nai
   const [numberAllowed, setNumberAllowed] = useState(false);

   // character haruli allow garne ki nai
   const [characterAllowed, setCharacterAllowed] = useState(false);

    // password field ma rakhne password
  const [password, setPassword] = useState("");


  // yuta method banako jasle password generate garrxa ani tesma usecallback use gareko
  //useCallback vanako chai yuta function ho jasle aru function lai call garna milxa. usecallback use garara chai memory leak problem solve garna milxa.
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str = str + "0123456789";
    }
    if (characterAllowed) {
      str = str + "!@#$%^&*()_+";
    }

    // for loop le password ko length samma loop gardinxa ani mathi ko str ma bhako character haru randomly select garera pass ma add garrinxa
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }

    // password set garako.
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  // password copy garna ko lagi
  const copyPasswordToClipboard = useCallback(() => {
    // password field ma rakhako password select garera copy garrne
    passwordRef.current?.select();
    // copy garrne
    window.navigator.clipboard.writeText(password);
    alert("Password Copied");
  }, [password]);

  // useEffect vaneko chai component load vayepaxi matra run hunxa. yaha useEffect use gareko chai password generate garna ko lagi. useEffect ma chai generatePassword function lai call gareko.
  useEffect(
    () => {
      generatePassword();
    },
    // useEffect ko dependency chai length, numberAllowed, characterAllowed, generatePassword ho. yedi kohi pani yo dependency ma change huncha vane useEffect ko function run hunxa.
    [length, numberAllowed, characterAllowed, generatePassword]
  );

  //useRef vaneko chai html element lai select garna ko lagi use hunxa. yaha password field lai select garna ko lagi use gareko.
  // useRef hamile kun situation ma use garne ho?
  // 1. html element lai select garna ko lagi
  // 2. previous value lai store garna ko lagi
  // 3. component ma rakhne state lai store garna ko lagi

  const passwordRef = useRef(null);


  return(
    <>
    <div className="h-screen w-full flex justify-center items-center" style={{background:`url("https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`, backgroundSize:"cover"}}>

      <div className="bg-gray-600 w-[30] px-5 py-2 rounded-md  flex justify-center item flex-col gap-2">
      <h3 className="text-white">Password Generator</h3>

      <div className="flex flex-row justify-evenly items-center gap-3">
        <input type="text" value={password}  readOnly className="w-full py-1 px-3 rounded-lg"/>
        <button onClick={copyPasswordToClipboard} className="bg-green-500 px-4 py-1 rounded-lg"> Copy</button>
      </div>

      <div className="flex flex-row justify-between items-center gap-2">

          <div className="flex gap-2">
          <input type="range" id="range" min={6} max={100} value={length} onChange={(e)=>setLength(e.target.value)} className="cursor-pointer"/>
            <label htmlFor="range" className="text-orange-400">{length}</label>
          </div>

        <div className="text-orange-400 flex gap-1" >
        <input type="checkbox" id="Number"checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}/>
        <label htmlFor="Number">Number</label>
        </div>

        <div className="text-orange-400 flex gap-1">
        <input type="checkbox" id="Character" checked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)} />
        <label htmlFor="Character">Special character</label>
        </div>
      </div>

      </div>
    </div>
    </>
  )
}
export default App;