import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const whatsappNumber = '9877772326'; 

  return (
    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: 'green' }} />
    </a>
  );
};

export default Contact;
