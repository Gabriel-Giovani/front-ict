import React, { createContext, useContext, useEffect, useState } from "react";

const ScrollToTopContext = createContext(0);
export const getScrollToTopContext = () => (ScrollToTopContext.Consumer)._currentValue;

export function useScrollToTop() {
    const context = useContext(ScrollToTopContext);

    if (!context)
        throw new Error('useScrollToTop must be used inside ScrollToTopProvider');

    return context;
}

export function ScrollToTopProvider(props) {
    const { children } = props;

    const [scrollToTopValue, setScrollToTopValue] = useState(0);

    useEffect(() => {
        document.body.addEventListener('scroll', () => {
            setScrollToTopValue(document.body.scrollTop);
        });
    }, []);

    return (
        <ScrollToTopContext.Provider value={{
            scrollToTopValue,
            setScrollToTopValue
        }}>
            {children}
        </ScrollToTopContext.Provider>
    );
}


