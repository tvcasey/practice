import React, { useState } from 'react';

// A password checker, but can be used to select anything
// and add up to a solution- will adapt to Onchange3.

function PasswordStrength(props) {
    const [strength, setStrength] = useState("weak");
    const [password, setPassword] = useState(" ");
    const handleChange = ({ target }) => {
        setPassword(target.value);
        let score = 0;
        if (password >= 6) {
            score += 1;
        }
        if ((password.match(/A-Z/g) || []).length >= 1) {
            score += 1;
        }
        if ((password.match(/0-9/g) || []).length >= 1) {
            score += 1;
        }
        if (score === 1){
            setStrength("weak");
        }   else if (score === 2){
            setStrength("so-so");
        }   else if (score === 3){
            setStrength("Strong");
        }
        return score;
        // switch(score) {
        //     case 1: setStrength("weak");
        //         break;
        //     case 2: setStrength("So-So");
        //         break;
        //     case 3: setStrength("Strong");
        //         break;
        }
    

            return (
                <div className="square">
                    <label className="sentence">Please Enter Your Password</label>
                    <input type="password" className="jargon" value={password}
                        onChange={handleChange} />
                    <span>How Strong Is This Password</span>
                    <span className={strength}>
                        {strength.toUpperCase()}</span>
                    <ul>
                        <li>At least 6 charcters long</li>
                        <li>Use at least one capital letter</li>
                        <li>Use at least one numerical character</li>
                    </ul>
                </div>

    );

}
export default PasswordStrength;