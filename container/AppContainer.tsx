'use client'
import { selectThemeConfig, themeSlice } from '@/lib/redux/slices/themeSlice';
import { PropsWithChildren, useEffect } from 'react';

 import { useDispatch, useSelector } from 'react-redux';


function AppContainer({ children }: PropsWithChildren) {

  const themeConfig = useSelector(selectThemeConfig)
    // const themeConfig = useSelector((state: IRootState) => state.themeConfig);
     const dispatch = useDispatch();
    // const { i18n } = useTranslation();

    useEffect(() => {
        console.log('app')
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