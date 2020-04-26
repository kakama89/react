import * as React from "react";
export interface TextComponentProps {
  label: string;
  value?: string;
  className: string;
}

const TextComponent: React.FC<TextComponentProps> = ({
  className,
  label,
  value,
}) => {
  return (
    <div className={`txt ${className}`}>
      <label>{label}</label>
      <p>{value}</p>
    </div>
  );
};

export default TextComponent;
