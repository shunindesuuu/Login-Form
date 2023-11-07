/* eslint-disable react/prop-types */

const Button = ({ handleLogin, isFormValid }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <button
        onClick={handleLogin}
        disabled={!isFormValid}
        className="bg-blue-500 text-white py-2 px-4 rounded shadow">
        Login
      </button>
    </div>
  );
};

export default Button;
