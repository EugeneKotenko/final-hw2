import React, { useState } from 'react';

const Tooltip = ({ content, children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            style={{ position: 'relative', display: 'inline-block' }}
        >
            {children}
            {visible && (
                <div style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(40, 41, 47, 1)',
                    padding: '0.2rem 1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(205, 152, 255, 0.4)',
                    color: 'rgb(213 224 233)',
                    marginBottom: '1.2rem',

                }}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip