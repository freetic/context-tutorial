import React from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    return (
        <ColorContext.Consumer>
            {value => (
                <div
                    style={{
                        width:'64px',
                        height:'64px',
                        background: value.color1
                    }}
                />
            )}
        </ColorContext.Consumer>
    );
};

export default ColorBox;