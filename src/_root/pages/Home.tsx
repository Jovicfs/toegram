import React, { useState } from 'react';
import { Sidebar } from '@/components/feed/Sidebar';
import { Feed } from '@/components/feed/Feed';
import { Messages } from '@/components/feed/Messages';
import { MessagesProvider } from '@/context/MessagesContext';

function Home() {
    const [activeTab, setActiveTab] = useState<'feed' | 'messages'>('feed');

    return (
        <MessagesProvider>
            <div className="flex h-screen">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                <main className="flex-1 flex w-full">
                    {activeTab === 'feed' ? (
                        <Feed />
                    ) : (
                        <Messages />
                    )}
                </main>
            </div>
        </MessagesProvider>
    );
}
export default Home;