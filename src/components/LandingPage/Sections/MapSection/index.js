import React from 'react';

export default () => {
    const iFrame =  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7316480834224!2d-47.45074968451782!3d-23.506173365442752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf61946b7c4a3b%3A0x7c29ed6ccb499638!2sR.%20Santa%20Maria%2C%20231%20-%20Vila%20Hort%C3%AAncia%2C%20Sorocaba%20-%20SP%2C%2018020-216!5e0!3m2!1spt-BR!2sbr!4v1669938711615!5m2!1spt-BR!2sbr" width="100%" height="420px" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'

    return (
        <div dangerouslySetInnerHTML={ {__html:  iFrame}} />
    );
};