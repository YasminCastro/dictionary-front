import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Router from 'next/router';
import api from '@/backend/api';

interface IWord {
  word: string;
  phonetic: string;
  audio: string;
  meaning: string;
}

interface IValue {
  wordDefinition: IWord;
  setWordDefinition: React.Dispatch<React.SetStateAction<IWord>>;
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  wordError: string;
  nextWord: string;
  previousWord: string;
  setAllWords: React.Dispatch<React.SetStateAction<any>>;
}

const WordContext = createContext({} as IValue);

export const WordProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [wordDefinition, setWordDefinition] = useState({} as IWord);
  const [searchWord, setSearchWord] = useState('');
  const [allWords, setAllWords] = useState('');
  const [previousWord, setPreviousWord] = useState('');
  const [nextWord, setNextWord] = useState('');
  const [wordError, setWordError] = useState('');

  useEffect(() => {
    async function getWord() {
      try {
        const { data } = await api.get(`/entries/en/${searchWord}`);

        if (data) {
          let phonetic = '';
          let audio = '';
          let meaning = '';

          if (data.phonetic) {
            phonetic = data.phonetic;
          }

          if (data.phonetics && data.phonetics.length > 0) {
            const audioObject = data.phonetics.find((x: any) => x.audio !== '');

            if (audioObject) audio = audioObject.audio;
          }

          if (data.meanings && data.meanings.length > 0) {
            data.meanings.forEach((meaningsRaw: any) => {
              meaning = `${meaningsRaw.partOfSpeech} - ${meaningsRaw.definitions[0].definition}`;
            });
          }

          setWordDefinition({
            word: data.word,
            phonetic,
            audio,
            meaning,
          });
          setWordError('');

          const randomNumber = Math.floor(
            Math.random() * (allWords.length - 0 + 1) + 0
          );

          setNextWord(allWords[randomNumber]);
          // setPreviousWord(allWords[randomNumber]);

          if (searchWord) {
            Router.push(`/dashboard?word=${searchWord}`);
          }
        }
      } catch (error: any) {
        console.log(error);
        const errorMessage = error?.response?.data?.message?.includes(
          "Sorry pal, we couldn't find definitions for the word you were looking for."
        )
          ? 'Não foi possível encontrar a definição para palavra desejada.'
          : 'Ocorreu um erro ao buscar a palavra. ';

        setWordError(errorMessage);
      }
    }

    getWord();
  }, [searchWord]);

  const value = useMemo(
    () => ({
      wordDefinition,
      setWordDefinition,
      searchWord,
      setSearchWord,
      wordError,
      nextWord,
      previousWord,
      setAllWords,
    }),
    [
      wordDefinition,
      setWordDefinition,
      searchWord,
      setSearchWord,
      wordError,
      nextWord,
      previousWord,
      setAllWords,
    ]
  );

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};

export const useWord = (): IValue => useContext(WordContext);
