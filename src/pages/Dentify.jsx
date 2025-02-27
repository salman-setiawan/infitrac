import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import AuthData from '../data/auth'; // Importing authentication data
import bowser from 'bowser';  // Import bowser

const Dentify = () => {
  const [inputValue, setInputValue] = useState('');
  const [commands, setCommands] = useState([]);
  const [step, setStep] = useState(1);  // Track step (ID or password)
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // To store the success message
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      // Step 1: Enter ID
      if (inputValue.trim() !== '') {
        setId(inputValue);
        setCommands([...commands, `${inputValue}`]);
        setInputValue('');
        setStep(2); // Move to password step
      }
    } else if (step === 2) {
      // Step 2: Enter Password
      if (inputValue.trim() !== '') {
        setCommands([...commands, `${inputValue}`]);

        // Verify credentials
        const user = AuthData.find(user => user.id === id && user.pass === inputValue);
        
        if (user) {
          // Successful login, store login status in sessionStorage
          sessionStorage.setItem('isLoggedIn', 'true');
          
          // Reset error message and set success message
          setError('');  // Reset error message
          setSuccessMessage('Login successful! Redirecting...');
          
          // Clear the input fields after login
          setInputValue('');
          setId('');
          setCommands([]);  // Clear all previous commands

          // Disable the form inputs after successful login
          setTimeout(() => {
            navigate('/home'); // Navigate to home after a successful login
          }, 2000);  // Wait for 2 seconds before redirecting
        } else {
          setError('Invalid ID or Password. Please try again.');
          setInputValue('');
          setId(''); // Reset ID
          setCommands([]); // Clear previous commands
          setStep(1); // Go back to ID step
        }
      }
    }
  };

  // Get browser and OS information using bowser
  const browser = bowser.getParser(window.navigator.userAgent);
  const browserName = browser.getBrowser().name;  // Browser name (e.g., Chrome, Firefox)
  const browserVersion = browser.getBrowser().version;  // Browser version
  const osName = browser.getOS().name;  // OS name (e.g., Windows, Mac)
  const osVersion = browser.getOS().version;  // OS version

  return (
    <div>
      <div className='p-4'>
        <div className="text-[12px] text-neutral-300">
          <div>Infitrac v0.2</div>
          <div>Copyright @ 2025, All rights reserved</div>
          <div>{`${browserName} ${browserVersion}`}</div>
          <div>{`${osName} ${osVersion}`}</div>
          <div className='text-[#111111]'>.</div>
          <div>Please input your identification and passkey below.</div>

          {commands.map((command, index) => (
            <div key={index}>
              {command}
            </div>
          ))}

          {successMessage ? (
            <div className="mt-2 text-green-500">{successMessage}</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <span className="text-green-500 font-semibold">{`+`}</span>
              <input
                type={step === 2 ? 'password' : 'text'} // Conditional type for password input
                value={inputValue}
                onChange={handleInputChange}
                className="outline-none flex-grow ml-1"
                disabled={sessionStorage.getItem('isLoggedIn') === 'true' || successMessage}  // Disable input after login
                // placeholder={step === 1 ? 'Enter ID' : 'Enter Password'}
                maxLength={step === 2 ? 8 : undefined}  // Apply maxLength only for the password input
              />
              <button type="submit" className="hidden"></button>
            </form>
          )}

          {/* Error message displayed below the prompt, only shown if there's an error */}
          {error && !successMessage && (
            <div className="mt-2 text-red-500">{error}</div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Dentify;
