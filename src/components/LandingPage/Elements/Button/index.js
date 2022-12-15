import React, { useEffect, useState } from 'react';
import { Button } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default (props) => {
    const { text, category, width, onClickFunction, disabled } = props;

    const [disabledState, setDisabledState] = useState(false);

    useEffect(() => {
        if(disabled !== null && disabled !== undefined)
            setDisabledState(disabled);
    }, [disabled]);

    return (
        <Button
            category={category}
            width={width}
            disabled={disabledState}
            onClick={onClickFunction ? onClickFunction : () => {}}
        >
            { category === 'whatsapp' && <FontAwesomeIcon icon={faWhatsapp} /> } { text }
        </Button>
    );
};