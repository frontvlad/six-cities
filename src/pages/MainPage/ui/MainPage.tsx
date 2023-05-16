import React from 'react';
import { useRequest } from 'helpers/hook/useRequest/useRequest';
import { CardBoard } from 'modules/CardBoard';
import { MainHeader } from 'modules/MainHeader';
import { fetchOffers } from '../api/fetchOffers/fetchOffers';

const MainPage: React.FC = () => {
    const [data, loading] = useRequest(fetchOffers);

    return (
        <div className="page page--gray page--main">
            <MainHeader />
            <main className="page__main page__main--index ">
                <h1 className="visually-hidden">Cities</h1>
                <CardBoard
                    offers={data}
                    isLoading={loading}
                />
            </main>
        </div>
    );
};

export default MainPage;
