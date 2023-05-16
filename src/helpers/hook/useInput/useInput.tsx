import React, { useState } from 'react';

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value);
    };

    return {
        value, onChange,
    };
};
