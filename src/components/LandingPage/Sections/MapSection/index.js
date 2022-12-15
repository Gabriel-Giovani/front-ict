import React from 'react';

export default () => {
    const iFrame =  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.884718685765!2d-47.44981128446641!3d-23.536648384695038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf61dfbc126251%3A0xd243212375206ada!2sAv.%20Ireno%20da%20Silva%20Ven%C3%A2ncio%2C%20199%20-%20Protestantes%2C%20Votorantim%20-%20SP%2C%2018111-100!5e0!3m2!1spt-BR!2sbr!4v1671064316615!5m2!1spt-BR!2sbr" width="100%" height="420px" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'

    return (
        <div dangerouslySetInnerHTML={ {__html:  iFrame}} />
    );
};