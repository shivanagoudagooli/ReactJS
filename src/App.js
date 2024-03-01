import "./App.css";
import MyButton from "./MyButton";
import LoginForm from "./LoginForm";
function App() {
  return (
    <div className="App">
      <MyButton></MyButton>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;

// .login-container {
//   max-width: 400px;
//   margin: auto;
//   padding: 20px;
//   text-align: left;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
//   background-color: #fff;
//   margin-top: 50px;
// }

// label {
//   align-items: left;
//   margin-bottom: 8px;
//   opacity: 0.5;
// }

// h1 {
//   font-size: 24px;
//   margin-bottom: 20px;
// }

// #highlight {
//   font-weight: bold;
//   opacity: 1;
//   color: blue;
// }

// .input-field {
//   width: 100%;
//   padding: 8px;
//   margin: 8px 0;
//   box-sizing: border-box;
// }

// .password-field {
//   position: relative;
// }

// .password-toggle {
//   position: absolute;
//   right: 10px;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
// }

// .disabled-button {
//   width: 100%;
//   height: 40px;
//   background-color: blue;
//   border: 1px solid blue;
//   opacity: 0.5;
//   color: #666;
//   cursor: not-allowed;
//   margin-top: 15px;
// }

// .enabled-button {
//   background-color: blue;
//   border: 1px solid blue;
//   color: #fff;
//   cursor: pointer;
//   width: 100%;
//   margin-top: 15px;
//   height: 40px;
// }

// import React, { useState } from 'react';

// const apiUrl = 'https://reqres.in/api';

// const App: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
//   const [isChecked, setIsChecked] = useState<boolean>(false);

//   const handleLogin = async () => {
//     const requestBody = {
//       email: email,
//       password: password,
//     };

//     try {
//       const loginResponse = await fetch(`${apiUrl}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       if (!loginResponse.ok) {
//         throw new Error('Invalid username or password');
//       }

//       const { token } = await loginResponse.json();

//       const userDetailsResponse = await fetch(`${apiUrl}/users`, {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (userDetailsResponse.ok) {
//         const users = await userDetailsResponse.json();
//         console.log(users.data);
//       } else {
//         throw new Error('Failed to fetch user details');
//       }
//       alert('Successfully logged in!');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const updateButtonDisabledState = () => {
//     setIsButtonDisabled(
//       !(email.trim() !== '' && password.trim() !== '' && isChecked)
//     );
//   };

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//     updateButtonDisabledState();
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//     updateButtonDisabledState();
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setIsChecked(e.target.checked);
//     updateButtonDisabledState();
//   };

//   const handleShowPasswordToggle = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container">
//       <h1>
//         <img
//           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAABICAMAAABvAfF3AAAABGdBTUEA
//           ALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC8VB
//           MVEX///+8wuT9/f719vvEyefCx+a2veL29vvY2+/Gy+jAxub5+v3Z3PDq7Pf8/P6vtt+GkM5lc8BTYrlwfcWRm
//           9PT1+3h4/OYodV3g8hXZbtebL5/i8ukrNq4vuLm6PX3+PzX2u8ZLaFreMNRYLgeMqO2vOFmc8G/xOVcar
//           0nOqcfMqQtQKqEj827weOxuN85Sq5jcL/g4/Pu8PgsPqmZotXe4fIaLqIgM6RHV7T7+/7l6PVpdsIdMaO0uu
//           Gjq9qMltAlOKbP0+zN0es2SK3t7vhSYbmJlM+CjcxodcKzueBaaLySnNObpNemrtvk5vQkN6bFyuhFVbOIk
//           88vQaqUndQjN6Y+TrA/ULHBx+YcMKMpO6iTndOBjMz6+/1QX7jf4vIhNKTIzelhb790gMbb3/FYZrsiNaU3
//           Sa46S69fbb7Q1Ozw8fl9iMp2gsdjccCutd6qsdwjNqXs7fd+icqKlNBib7+ttN5NXLe6wOO1u+Glrdtgbr7x8vor
//           PamNl9HS1u3+/v9KWrXV2e4bL6Krst2OmNFOXbfv8fk9TrByfsawt9+RmtJVZLo+T7H29/zw8vlIWLXR1e2
//           cpdeIks5MXLba3fB1gccqPKiosNzHzOj4+f1da729w+QmOafz9PqPmdFCU7LL0OpsecOep9iAi8zDyOfj5f
//           R8h8rR1ezn6fZRYbg7TK81R604Sa54hMiiqtnM0ep5hclBUrKnr9tAUbGgqNjr7fdGVrSyueAsP6nO0uszRa
//           zb3vC/xeVvfMWdptdkcsAwQqtZZ7uWn9T09fvt7/iaotbp6/a5v+OpsNxicL8uQKpQYLdrd8KVntQfMqO+w+
//           RCUrHs7vdWZbrk5/QkOKY5Sa6XoNWQmdLU2O7IzOnKz+rd4PFEVLMoO6dPXrfJzukyRKvo6vaDjs08T
//           bBbarxDU7I0Razi5PPy8/q3vuJseMOhqdmttd6Hkc6LldBndMGfp9htesSstN1ue8S+w+VLW7ass91aabxxf
//           cXc3/G77cH1AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+YCAQU
//           QOd25PogAAAd7SURBVGje7Zl5XBVVFMevImCAuCa4EB5xKxUXiEVRFHHJDU3UMFHMLVwQTFNxA
//           18q5pJgpoBibuVCuWSaaJilWVlu2eKeZWl7aat/de69s91578178+zz0T7N75975tw5Z+535t1z78wjxJIlS5Y
//           sWbJkyZIlS/9bVaho5/Kq5CLG28fHx5dZlX187uM+P/T5YxuAbRXpvMCq1arXqFnrfk1o7aDgOnXr1feSDn
//           19NGKeEB+fB6TOUPQ1MIESBA31MF5hjRobBzUBgKbMagbwIIv3fwigOTVaYF9Lflp4K+Bq3UYKbBvciH
//           siIrnjYVAVxTzRADGxvLMdOuuZQQFoL8J4hQHEdTCM6ohR8ezGd0KrM7USaCKRpYM6zC6J/Dl1VV3d
//           nLNAd09YgliSHoE6FIR5xCisNp7RUyaAXtTqjUYfgaVvEsXr0K9+f2zrsLhH0RqQ7Ney+0A0KsgsSYO4Bis
//           sUY+ZZwmS7kgTFYajAKSEGwV2ARhC214gj7M9Gn0FlsfRGEqN1GFoDadWc4A09nMbEQVQV2Z5Qkh
//           NWWBAolmWIOXxVpdhZBSEqWoQORJPGIXtaHrmGDrlxwI8SQSWmmiMYK5K6enp47Adj54YnmBCev
//           pEAxZoZpJFRQHIiNWhIMwk56Hh2J+JdzwLUvBeYyWbjI5gkeUpNKYIUalxAJ36Ci5nLNDbFIsWBWBqrA
//           4FYZ52GpsYxYY+AmDaUDaNp+P5M0SWbJpjZuNZmrDB6Jk9Z26OC5ZcrH/R80ywiCiYMVaHAmB7xmk
//           0zuf+hMwHmOMNsIDNattCkSV0LK9OeYtCQqWoZ3nepK6LAzQsEUu4+sgs6Z3xAS5d5jaLHgUzPBemd
//           9kynYXj00jxJTUAEvyzIM6L1AFYTkQWkj9WzpNUIIWtsMmu51cqLLJWKCysbrzgLos9CsAqe5dttZP4pthZ
//           WBQNQyqSYoA1ZC1ANT0LKVn3opxokRS3fsNayROdb8CSs4T+Zt1jcYTiUFF9HCfwxWU+uRJWc0I2A
//           mxaiadutmNBvVT15UEsUaHsSV0fOZWusLyiUZauW7i2qixk62ys+uvdYXEbBWHqO06xDXcm3djyOBynz
//           mpcOIocsVAlbAddRStaTFOPJ07mPrKQEOwodYPFBArCdHSYYx0uaDEAdBv4CkQ1k1d2DcusWbOWc
//           ReWB2hIEdAl7ZcwAPKNWMir/PIuWEyhIMwOR0l2sj627djFzGQdSyzWot0qyy5sI7F9TWVpY8gSuscNFp
//           MoCPO6gyyBa5UrTWdn5eufywI0utMtwd59aL2BRmds95fRvkkpAAeIxLLkINcogYU0SHPJYhoFtdFBnnTa
//           8Sa1aB2AVTl6Fu84OvSMicV0THmp1DWTxuSWl7PydkhmUe6ZyEKLijGLJygABfaJCtCdxhdBWkDfInoW
//           skONP8xXE98Y1bUoxxULu10GLJ6h8O2RKFqG3+bmO2gqk0pTx8rq8uBVi49InaEFB7hrmPTqashy9LA
//           Ri6coAO8ST3RsROah9yoXaTyxAS03vl/4gEfZBFXFQXX5QNRx9H2o8310QlRwRkbG3Du//L8qunk8eUr0
//           JWBBOn3mbo/MgnEfptbHiuLv9rjvFOaIUkGHebmX/B6GScy7t1FMwZxlq0HYPYtiCuYgvkaE+d7tAZuG+c
//           QhTOeB2+5pFIcwZz4FO5h5lNExSmph5GfeWsfWxp9nBqiH486xxtdP/gxznu+C2/r5Sw4/ps1KRMULBclr5
//           K/BRX6SLnoAc+Y07od0MKdOJjuLrx0DrZbalqvfujamRV+6DCOXycdXoivTZhR8ITmuRrCP/01B2r4EQhT
//           VGDngy21QujtuD9+Dkr7YBfSMr8w/GYqyNlucM6dOgs3JnxeppdcO4mQaNDhVcnSEamiGJ/VQWOBSqs
//           gCX+tYsrUZc765ji9AN5aXfqu45u93g8MehqEkiAUAUZxWsN62g7RpAN9JyY5/z9ps/s2fslzp1EJkGZ3ygw
//           HLj3CBNu3iVK/7LFoYCUWoZkYoZElP3raTZoMf8OkRGPGTzFK+2nZeYIn/Oeuic5ZfpO/MWxd 6wqLCKC
//           gaGEMUUqp7q/jVJv3YhlVXWEjrLiUCS2BubqCWpTwbJc/9mJt2FzHDIsNoUBQYYxQyppZ4POWyZEzdp
//           rIcHVAusJCLWfFalv2tULuk7uv271ymWDjMLS2KBHPLGIUMChaPV4P04hjzm8qC454hsJAdcWXOfmPK
//           A/WURf4YrkHhMK42LjP78/aG9Ou+IP17eVR5YJSF7JrdT2AhxdtnOGFZVMqXlrNHPWXhMAKKBGO8B1
//           sDIbTZCb9Ljn1/sAkzYeAxLUto3jWRZe/+a05YyvgfhKNS/vSYhcLoUBiMq+3kX2kFtY9lRnSV1+nC6Gnek8
//           v+hhPyCYyFbGkkstAvqwrLJm9UPzlgQ1yv23vDr+8LVa5hmoV4FSfY+RKKXe2MY4dmATSaWKI45u3Ddf
//           qq+octZyGLdSxkpMrCFC0H5KzrBJByM1G9hnkWT1Ux4Jy4Uyspq+JhKpnmdn7JnWWwZMmSJUuWLF
//           myZMnSf1//AN4k71rTZHoEAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAyLTAxVDA1OjE2OjU3Kz
//           AwOjAwpOgUbAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMi0wMVQwNToxNjo1NyswMDowMNW1r
//           NAAAAAASUVORK5CYII="
//           alt="Login"
//           style={{ width: 'auto', height: '50px' }}
//         />
//       </h1>
//       <h6>Hello there, Sign in to Continue</h6>
//       <form>
//         <label>Email:</label>
//         <input
//           type="text"
//           value={email}
//           onChange={handleEmailChange}
//           required
//           className="input-field"
//         />
//         <br />
//         <label>Password:</label>
//         <div className="password-field">
//           <input
//             type={showPassword ? 'text' : 'password'}
//             value={password}
//             onChange={handlePasswordChange}
//             required
//             className="input-field"
//           />
//           <span className="password-toggle" onClick={handleShowPasswordToggle}>
//             {showPassword ? '👁️' : '👁️‍🗨️'}
//           </span>
//         </div>
//         <br />
//         <input
//           type="checkbox"
//           id="termsCheckbox"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//         />
//         <label htmlFor="termsCheckbox">
//           By creating or logging into an account, you agree to our
//           <span id="highlight"> Terms & Conditions</span> and{' '}
//           <span id="highlight"> Privacy Policys.</span>
//         </label>
//         <br />
//         <div className="password-field">
//           <button
//             type="button"
//             onClick={handleLogin}
//             disabled={isButtonDisabled}
//             className={isButtonDisabled ? 'enabled-button' : 'disabled-button'}
//           >
//             Next
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default App;
