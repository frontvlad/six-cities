import { useInput } from 'helpers/hook/useInput/useInput';
import React from 'react';

interface IAuthFormProps {
    onSubmit: (p: any) => void;
    isLoading: boolean;
  }

const AuthForm: React.FC<IAuthFormProps> = ({
    onSubmit, isLoading,
}) => {
    const email = useInput('');
    const password = useInput('');

    const onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const emailValue = email.value;
        const passwordValue = password.value;
        onSubmit({ email: emailValue, password: passwordValue });
    };

    return (
        <form
            onSubmit={onSubmitForm}
            className="login__form form"
        >
            <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input {...email} className="login__input form__input" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input {...password} className="login__input form__input" type="password" name="password" placeholder="Password" required />
            </div>
            <button className="login__submit form__submit button" type="submit">{isLoading ? 'Load' : 'Sign in'}</button>
        </form>
    );
};

export { AuthForm };
