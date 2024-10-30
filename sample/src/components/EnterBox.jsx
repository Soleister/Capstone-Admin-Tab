import { useNavigate } from 'react-router-dom';

function EnterBox() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main'); // Navigates to the MainPage component.
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className="bg-black text-white py-2 px-8 rounded"
        onClick={handleClick}
      >
        Enter
      </button>
    </div>
  );
}

export default EnterBox;
