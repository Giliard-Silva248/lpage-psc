import './style.scss';

interface colorProps {
  colorBtn: string;
}

export const Btn: React.FC<colorProps> = ({ colorBtn }) => {

  let buttonClass = 'btn';
  switch (colorBtn) {
    case 'primary':
      buttonClass += ' btn-primary';
      break;
    case 'secondary':
      buttonClass += ' btn-secondary';
      break;
    default:
      break;
  }

  return (
    <button className={buttonClass}>
      AGENDE SUA CONSULTA
    </button>
  );
}
