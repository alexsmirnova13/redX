import { useState, ChangeEvent, FocusEvent, MouseEvent, useEffect } from 'react';
import Button from '@mui/material/Button';
export interface ICounterProps {
  onCounterClick: (index: number) => void;
  count: number;
  name: string;
}
const Counter: React.FC<ICounterProps> = ({ onCounterClick, count, name }) => {
  const [counter, setCounter] = useState(count);
  const handleCounterClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    if (target.name === 'plus') {
      setCounter(Number(counter) + 1);
      // onCounterClick(Number(counter) + 1);
    } else {
      if (counter !== 1) {
        setCounter(Number(counter) - 1);
        // onCounterClick(Number(counter) - 1);
      }
    }
  };
  const handleDecrease = () => {
    if (counter !== 1) {
      setCounter(Number(counter) - 1);
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value);
    setCounter(inputValue);
  };
  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) {
      setCounter(1);
    } else {
      setCounter(value);
    }
  };
  useEffect(() => {
    onCounterClick(Number(counter));
  }, [counter]);
  return (
    <div className="counter">
      <Button
        variant="contained"
        style={{
          backgroundColor: 'var(--colorLightGrey)',
          color: 'var(--colorGrey)',
          textTransform: 'none',
          fontSize: '27px',
          lineHeight: '25px',
          padding: '1px 10px',
          minWidth: '0',
        }}
        onClick={handleDecrease}
      >
        -
      </Button>
      <input
        type="text"
        className="countInput"
        value={counter}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        name={name}
      />
      <Button
        variant="contained"
        style={{
          backgroundColor: 'var(--colorLightGrey)',
          color: 'var(--colorGrey)',
          textTransform: 'none',
          fontSize: '25px',
          lineHeight: '25px',
          padding: '1px 5px',
          minWidth: '0',
        }}
        name="plus"
        onClick={(e: MouseEvent<HTMLButtonElement>) => handleCounterClick(e)}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
