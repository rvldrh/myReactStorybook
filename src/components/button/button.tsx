import React from 'react';

export interface Button1Props {
  text?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void; // Tambahkan properti onClick
}

const Button1: React.FC<Button1Props> = ({ text = 'Button', size = 'medium', onClick }) => {
  let buttonSizeClass = 'px-6 py-3 text-base'; // Ukuran dan ukuran teks default
  let textSizeClass = 'text-base'; // Ukuran teks default

  if (size === 'small') {
    buttonSizeClass = 'px-4 py-2';
    textSizeClass = 'text-sm'; // Ukuran teks kecil
  } else if (size === 'large') {
    buttonSizeClass = 'px-8 py-4';
    textSizeClass = 'text-lg'; // Ukuran teks besar
  }

  return (
    <button
      className={`bg-black my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white ${buttonSizeClass}`}
      onClick={onClick} // Menambahkan onClick ke dalam button
    >
      <span className={`${textSizeClass}`}>
        {text}
      </span>
    </button>
  );
}

export default Button1;
