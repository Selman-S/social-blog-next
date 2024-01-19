'use client'
import { selectThemeConfig, themeSlice } from '@/lib/redux/slices/themeSlice';
import useAuthCall from '@/service/useAuthCall';
import { PropsWithChildren, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';


function AppContainer({ children }: PropsWithChildren) {

    const themeConfig = useSelector(selectThemeConfig)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(themeSlice.actions.toggleTheme(localStorage.getItem('theme') || themeConfig.theme));

    }, [dispatch, themeConfig.theme]);

    return (
        <div
            className="relative  text-sm bg-loginbg"
        >
            {children}
        </div>
    );
}

export default AppContainer;