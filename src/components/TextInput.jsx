import { useState } from 'react';
import Button from './Button';
const TextInput = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'root' && password === 'root') {
            alert('Login Successful');
        } else {
            alert('Login Unsuccessful');
        }
    };
    
    const isFormValid = username !== '' && password !== '';

    return (
        <div className="pt-12 pb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
                <input
                    type="text"
                    name="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </label>
            <div className='flex flex-col items-center justify-center'>
            <Button handleLogin={handleLogin} isFormValid={isFormValid}/>
            </div>

        </div>
    );
};

export default TextInput;
