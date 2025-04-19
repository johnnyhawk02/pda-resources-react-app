import React from 'react';
import './FontSwitcher.css';

// Expanded list of fonts
const availableFonts = [
    { name: 'System Default', value: 'system-ui, Avenir, Helvetica, Arial, sans-serif' },
    { name: 'Roboto', value: '"Roboto", sans-serif' },
    { name: 'Open Sans', value: '"Open Sans", sans-serif' },
    { name: 'Lato', value: '"Lato", sans-serif' },
    { name: 'Montserrat', value: '"Montserrat", sans-serif' },
    { name: 'Poppins', value: '"Poppins", sans-serif' },
    { name: 'Raleway', value: '"Raleway", sans-serif' },
    { name: 'Merriweather', value: '"Merriweather", serif' },
    { name: 'Playfair Display', value: '"Playfair Display", serif' },
    { name: 'Noto Serif', value: '"Noto Serif", serif' },
    { name: 'Nunito (Bold)', value: '"Nunito", sans-serif' },
    { name: 'Oswald', value: '"Oswald", sans-serif' },
    { name: 'Fredoka One', value: '"Fredoka One", cursive' },
    { name: 'Quicksand', value: '"Quicksand", sans-serif' },
    { name: 'Rubik', value: '"Rubik", sans-serif' },
    { name: 'Source Sans Pro', value: '"Source Sans Pro", sans-serif' },
    { name: 'Cabin', value: '"Cabin", sans-serif' },
];

function FontSwitcher({ 
    selectedHeadlineFont, 
    selectedBodyFont, 
    onHeadlineFontChange, 
    onBodyFontChange 
}) {
    // Only render in development environment
    if (process.env.NODE_ENV !== 'development') {
        return null;
    }

    return (
        <div className="font-switcher">
            <div className="select-group">
                <label htmlFor="headline-font-select">Headline Font:</label>
                <select 
                    id="headline-font-select" 
                    value={selectedHeadlineFont}
                    onChange={(e) => onHeadlineFontChange(e.target.value)}
                >
                    {availableFonts.map(font => (
                        <option key={`headline-${font.value}`} value={font.value}>
                            {font.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="select-group">
                <label htmlFor="body-font-select">Body Font:</label>
                <select 
                    id="body-font-select" 
                    value={selectedBodyFont}
                    onChange={(e) => onBodyFontChange(e.target.value)}
                >
                    {availableFonts.map(font => (
                        <option key={`body-${font.value}`} value={font.value}>
                            {font.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default FontSwitcher; 