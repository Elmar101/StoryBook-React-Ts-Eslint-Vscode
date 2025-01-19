import { ComponentProps, FC } from "react";


type ButtonProps = ComponentProps<"button">;

export const Button: FC<ButtonProps> = (
  ({...props}) => {
    return (
      <button className='text-blue-500'> Clicked Me </button>
    );
  }
);
