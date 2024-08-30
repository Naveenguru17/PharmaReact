"use client"
import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/0852c8fa-1d34-4f40-8f0d-9dc970425da5/webchat/v2.1/config.js';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className=''>
      <div className='p-6'>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
