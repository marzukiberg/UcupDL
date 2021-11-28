import React, {createContext, useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ShareMenu from 'react-native-share-menu';
import About from './src/components/molecules/About';
import Download from './src/components/molecules/Download';
import Header from './src/components/molecules/Header';
import Instructions from './src/components/molecules/Instructions';
import Overview from './src/components/molecules/Overview';
import {lang_en, lang_id} from './src/constants';
import {apply} from './src/theme/OsmiProvider';

export const AppContext = createContext();

const App = () => {
  const [url, setUrl] = useState(null);
  const [lang, setLang] = useState(lang_id);

  const updateLang = () => {
    lang === lang_id ? setLang(lang_en) : setLang(lang_id);
  };

  const handleShare = useCallback(item => {
    if (!item) return;
    const {data} = item;
    setUrl(data);
  }, []);

  useEffect(() => {
    ShareMenu.getInitialShare(handleShare);
  }, []);
  useEffect(() => {
    const listener = ShareMenu.addNewShareListener(handleShare);
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <AppContext.Provider value={{lang, updateLang}}>
      <SafeAreaView style={apply('flex bg-white')}>
        <Header />

        <ScrollView style={[apply('p-6')]}>
          <Overview />

          {url ? <Download videoURL={url} setUrl={setUrl} /> : <Instructions />}
          <About />
        </ScrollView>
      </SafeAreaView>
    </AppContext.Provider>
  );
};

export default App;
