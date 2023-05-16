import React, { useCallback, useState } from 'react';
import { AuthForm } from 'modules/Authorization';
import { fetchLogin, ILogin } from 'modules/Authorization/store/api/fetchLogin/fetchLogin';
import { useDispatch } from 'react-redux';
import { HeaderWrapper } from 'ui/HeaderWrapper';
import { LogoLink } from 'ui/LogoLink';

const LoginPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch: any = useDispatch();

    const onSubmit = useCallback(
        (data: ILogin) => {
            const { email, password } = data;
            setIsLoading(true);
            dispatch(fetchLogin({ email, password })).then(() => {
                setIsLoading(false);
            });
        },
        [dispatch],
    );

    return (
        <div className="page page--gray page--login">
            <HeaderWrapper>
                <LogoLink
                    link="/"
                />
            </HeaderWrapper>
            <main className="page__main page__main--login">

                <div className="page__login-container container">
                    <section className="login">
                        <h1 className="login__title">Sign in</h1>
                        <AuthForm
                            onSubmit={onSubmit}
                            isLoading={isLoading}
                        />
                    </section>
                    <section className="locations locations--login locations--current">
                        <div className="locations__item">
                            <a className="locations__item-link" href="/">
                                <span>Amsterdam</span>
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </div>

    );
};

export default LoginPage;
