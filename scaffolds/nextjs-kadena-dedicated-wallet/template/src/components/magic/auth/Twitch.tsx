import { LoginProps } from '@/utils/types';
import { useMagic } from '../MagicProvider';
import { useEffect, useState } from 'react';
import { saveToken } from '@/utils/common';
import Spinner from '../../ui/Spinner';
import Image from 'next/image';
import twitch from 'public/social/Twitch.svg';
import Card from '../../ui/Card';
import CardHeader from '../../ui/CardHeader';

const Twitch = ({ token, setToken }: LoginProps) => {
  const { magic } = useMagic();
  const [isAuthLoading, setIsAuthLoading] = useState<string | null>(null);

  useEffect(() => {
    setIsAuthLoading(localStorage.getItem('isAuthLoading'));
  }, []);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        if (magic) {
          const result = await magic?.oauth.getRedirectResult();
          //do stuff with user profile data
          saveToken(result.magic.idToken, setToken, 'SOCIAL');
          setLoadingFlag('false');
        }
      } catch (e) {
        console.log('social login error: ' + e);
        setLoadingFlag('false');
      }
    };

    checkLogin();
  }, [magic, setToken]);

  const login = async () => {
    setLoadingFlag('true');
    await magic?.oauth.loginWithRedirect({
      provider: 'twitch',
      redirectURI: window.location.origin,
    });
  };

  const setLoadingFlag = (loading: string) => {
    localStorage.setItem('isAuthLoading', loading);
    setIsAuthLoading(loading);
  };

  return (
    <Card>
      <CardHeader id="twitcg">Twitch Login</CardHeader>
      {isAuthLoading && isAuthLoading !== 'false' ? (
        <Spinner />
      ) : (
        <div className="login-method-grid-item-container">
          <button
            className="social-login-button"
            onClick={() => {
              if (token.length == 0) login();
            }}
            disabled={false}
          >
            <Image src={twitch} alt="Twitch" height={24} width={24} className="mr-6" />
            <div className="text-xs font-semibold text-center w-full">Continue with Twitch</div>
          </button>
        </div>
      )}
    </Card>
  );
};
export default Twitch;
