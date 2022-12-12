import React from 'react';
import { Button } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default (props) => {
    const { text, category, width } = props;

    return (
        <Button category={category} width={width}>
            { category === 'whatsapp' && <FontAwesomeIcon icon={faWhatsapp} /> } { text }
        </Button>
    );
};