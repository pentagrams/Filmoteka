import './button.scss';

export default function Button({ text, className }) {
  return (
    <>
      <button className={`button ${className}`}>
        <p className="button__text">{text}</p>
      </button>
    </>
  );
}
